import logo from './logo.svg';
import './App.css';

import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

//layouts
import RootLayout from './layouts/RootLayout'

//pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import Art from './pages/Artwork'
import Videos from './pages/Videos'
import Blog from './pages/Blog'
import Poloroid from './pages/photos/Poloroid'
import Video from './pages/video/Video'
import NotFound from './pages/NotFound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="poloroid" element={<Poloroid />} />
      <Route path="film" element={<Video />} />
      <Route path="art" element={<Art />} />
      <Route path="videos" element={<Videos />} />
      <Route path="blog" element={<Blog />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
