// Cursor and navigation link animations
let mouseCursor = document.querySelector(".cursor");
let navlinks = document.querySelectorAll('.nav-links li');
let fancy = document.querySelector(".fancy");

window.addEventListener("mousemove", cursor);
document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty('--x', (e.clientX) + 'px');
    document.documentElement.style.setProperty('--y', (e.clientY) + 'px');
}

function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

navlinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
        link.classList.remove("hovered-link");
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
        link.classList.add("hovered-link");
    });
});

// Fancy text animation
const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === splitText.length) {
        complete();
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}

// GSAP Scroll animations
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '80%',
        scrub: 1,
    },
});

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '80%',
        scrub: 1,
    },
});

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '250%',
        scrub: 1,
        pin: true,
        pinSpacing: false,
    },
});

tl.fromTo('.logo', { y: 0 }, { y: -400 });
tl2.fromTo('.fancy', { scale: 6 }, { scale: 1, top: "2rem", left: "3rem", x: "50%", y: "50%" });

// // Three.js 3D Model Setup
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.getElementById('model-container').appendChild(renderer.domElement);

// // Lighting
// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(10, 10, 10);
// scene.add(light);

// // Load the GLTF model
// const loader = new THREE.GLTFLoader();
// loader.load('/models/office.glb', function(gltf) {
//     scene.add(gltf.scene);

//     // Optional: Scale and position the model
//     gltf.scene.scale.set(1, 1, 1);
//     gltf.scene.position.set(0, 0, 0);
// }, undefined, function(error) {
//     console.error('An error occurred loading the model:', error);
// });

// camera.position.z = 5;

// // Animation loop
// function animate() {
//     requestAnimationFrame(animate);

//     // Rotate model (if needed)
//     scene.traverse((object) => {
//         if (object.isMesh) {
//             object.rotation.y += 0.01; // Adjust speed here
//         }
//     });

//     renderer.render(scene, camera);
// }
// animate();

// // Handle window resizing
// window.addEventListener('resize', () => {
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
// });
