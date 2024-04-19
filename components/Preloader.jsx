import React, { useEffect } from 'react'
import './preloader.css'
import { preLoaderAnim } from '../animations'
export default function Preloader() {

    useEffect(()=> {
        preLoaderAnim()
    }, [])
    return (

        <div className='preloader'>
            <div className='texts-container'>
                <span>Ima</span>
                <span>Khan</span>
            </div>
        </div>
    )

}

