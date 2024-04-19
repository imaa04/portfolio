import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)
export default function Skills({ skillsRef }) {
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
        <section ref={skillsRef} className="skills" id="skills">
                    <h2 ref={headlineRef} className="skills-title">
                        SKILLS
                    </h2>
                    <div className="skills-table">
                    <div className="frontend-container">
                        <h3>Frontend Development</h3>
                        <ul>
                        <li><img src=" https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />HTML<br></br>
                            Experienced</li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />CSS<br></br>
                            Experienced</li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />React<br></br>
                            Experienced</li>
                            
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />React Native<br></br>
                            Intermediate</li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />TailwindCss<br></br>
                            Basic</li>
                        </ul>
                    </div>
            <div className="backend-container">
                <h3>Backend Development</h3>
                <ul>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />Node JS<br></br>
                        Experienced</li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />Express JS<br></br>
                        Experienced</li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />Git<br></br>
                        Experienced</li>
                        <p></p>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />PostgreSQL<br></br>
                        Intermediete</li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" />MongoDB<br></br>
                        Basic</li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" />Pyhton<br></br>
                        Basic</li>
                </ul>
            </div>
            </div>
        </section>
    );
};

