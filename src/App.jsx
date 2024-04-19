import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import Intro from '../components/Intro'
import video from '../essets/video.mp4'
import Typewriter from 'typewriter-effect';
import Preloader from '../components/Preloader'

export default function App() {
  return (
    
    
    <div className='current wrapper'>
      <Preloader />
      <NavBar />
      
    </div>
   
  );
}

//export default App
