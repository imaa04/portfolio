import { useEffect, useRef } from "react";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import video from '../essets/bgvideo.mp4'
import Typewriter from 'typewriter-effect';
import About from "./About";
import Skills from "./Skills";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Project from "./Project";
gsap.registerPlugin(ScrollTrigger)
export default function NavBar() {

    const home = useRef(null);
    const about = useRef(null);
    const projects = useRef(null);
    const skills = useRef(null);
    const contact = useRef(null);
    const scrollToSection = (elementRef) => {
        const container = document.querySelector('.wrapper');
        const elementOffset = elementRef.current.offsetTop;

        container.scrollTo({
            top: elementOffset,
            behavior: 'smooth',
        });
    };

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
                }
            }
        )
    }, [])
    return (
        <>
            <div className="navbar">

                <div className="nav-elements">

                    <ul>
                        <li onClick={() => scrollToSection(home)} className="link">
                            HOME
                        </li>
                        <li onClick={() => scrollToSection(about)} className="link">
                            ABOUT
                        </li>
                        <li onClick={() => scrollToSection(projects)} className="link">
                            PROJECTS
                        </li>
                        <li onClick={() => scrollToSection(skills)} className="link">
                            SKILLS
                        </li>
                        <li onClick={() => scrollToSection(contact)} className="link">
                            CONTACT
                        </li>
                    </ul>
                </div>

            </div>


            <section ref={home} className="home" id="home">

                <video src={video} autoPlay loop muted />

                <div className="container">

                    <h1 ref={headlineRef} className="title">IMA KHAN </h1>
                    <h2 className="role">
                        <Typewriter
                            options={{
                                strings: ['FULLSTACK DEVELOPER'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/ima-khan-801b532a1/" target='_blank'>
                            <img src="./lnicon.png" alt="linkend icon" />
                        </a>
                        <a href="https://github.com/imaa04" target='_blank'>
                            <img src="./githubicon.png" alt="github icon" />
                        </a>
                        <a href="mailto:imakhan.04@gmail.com" target='_blank'>
                            <img src="./gmail.png" alt="gmail icon" />
                        </a>
                    </div>
                </div>

            </section>
            <About aboutRef={about} />
            <Project projectRef={projects} />
            <Skills skillsRef={skills} />
            {/* <section ref={skills} className="skills" id="skills">SKILLS</section> */}
            <section ref={contact} className="contact" id="contact">
                <div className="hire">
                    <p>WANT TO HIRE ME/ WORK TOGETHER?</p>
                </div>
                <div className="hi">
                    <h1>SAY HI!</h1>
                </div>
                <div className="email">
                    <p>IMAKHAN.04@GMAIL.COM</p>
                </div>

                <div className="contact-details">
                    <p>LinkedIn: Ima Khan <br />
                        Github: imaa04</p>
                </div>
            </section>


        </>
    )
}


