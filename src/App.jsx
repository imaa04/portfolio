import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import Intro from '../components/Intro'
import video from '../essets/video.mp4'
import Typewriter from 'typewriter-effect';

export default function App() {
  return (
    <Intro>
    <div className='current wrapper'>
      
      <NavBar />
      
    </div>
   </Intro>
  );
}

//export default App
