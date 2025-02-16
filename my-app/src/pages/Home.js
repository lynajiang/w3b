import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    // Set renderer size and append to the DOM
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (canvasRef.current) {
      canvasRef.current.appendChild(renderer.domElement);
    }

    // Set a background color
    scene.background = new THREE.Color(0xeeeeee);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Position the camera
    camera.position.set(0, 2, 10); // Move camera back to ensure it's not too close

    // // Set up DRACOLoader
    // const dracoLoader = new DRACOLoader();
    // dracoLoader.setDecoderPath('/path/to/draco/'); // Set this to the correct path

    // Load the 3D model
    const loader = new GLTFLoader();
    // loader.setDRACOLoader(dracoLoader); // Provide DRACOLoader to GLTFLoader
    loader.load('/models/office.glb', (gltf) => {
      console.log('Model imported successfully');
      const model = gltf.scene;
      // Create wireframe
      // model.traverse((child) => {
      // if (child.isMesh) {
      //   const wireframe = new THREE.WireframeGeometry(child.geometry);
      //   const line = new THREE.LineSegments(wireframe);
      //   line.material.depthTest = false; // Optional, for better visibility
      //   line.material.opacity = 0.5; // Optional, adjust opacity if needed
      //   line.material.transparent = true; // Optional, make sure it’s visible

      //   child.add(line); // Add the wireframe to the mesh
      // }
      // });

      // Position and scale the model for better visibility
      model.position.set(0, 0, 0); // Adjust position
      model.scale.set(1, 1, 1); // Adjust scale if necessary

      // Add model to scene
      scene.add(model);

      // Helper: Add bounding box to visualize the model's boundaries
      const box = new THREE.BoxHelper(model, 0xff0000); // Red bounding box
      scene.add(box);

      console.log('Model loaded:', model);
    }, undefined, (error) => {
      console.error('Error loading the model:', error);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Clean up on unmount
    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div ref={canvasRef} style={{ width: '100%', height: '100vh' }}></div>
    </div>
  );
};

export default Home;
