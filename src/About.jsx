import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
export default function About({ aboutRef }) {
    const about = useRef();
    const headlineRef = useRef();

    useEffect(() => {
        gsap.fromTo(
            headlineRef.current,
            {
                autoAlpha: 0,
                y: -70,
            },
            {
                y: 0,
                autoAlpha: 1,
                duration: 1,
                scrollTrigger: {
                    scroller: '.current',
                    trigger: headlineRef.current,
                    start: 'top 60%',
                    end: 'bottom 0%',
                    toggleActions: 'play none restart reverse',
                },
            }
        );
    }, []);

    return (
        <section ref={aboutRef} className="about" id="about">
            <div className="about-content">
                
                <img ref={headlineRef} src="../essets/imano1.JPG" alt="About Me" className="about-image" />
                <div className="text-content">
                    <h2 ref={headlineRef} className="about-title">
                        ABOUT ME
                    </h2>
                    <p ref={headlineRef} >
                        Hey there! I'm Ima and I'm enthusiastic about coding and design. I've recently graduated from the Northcoders
                        bootcamp where I've gained skills in Fullstack Software Development. I have additionally learnt the basics of Python in CodeNation where I've received a certificate aswell.<br></br>
                        <br></br>
                        My educational background in Architectural Design Technology sets me apart, providing a unique blend of creative problem-solving and technical skills.
                        It has equipped me with tools in software like AutoCAD and Revit, showing my versatility.<br></br>
                        <br></br>
                        Since I've graduated I've been building my own coding projects as I like to learn new things daily,
                        which makes me motivated by a proven ability to improve my work and commitment by time in the work environment.
                        
                    </p>
                </div>
                
            </div>
        </section>
    );
};

