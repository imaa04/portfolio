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
                    <h2 ref={headlineRef} >
                        SKILLS
                    </h2>
                    <div className="skills-table">
                    <div className="frontend-container">
                        <h3>Frontend Development</h3>
                        <ul>
                    <img src="../essets/html1.png"/><li>HTML<br></br>
                            Experienced</li>
                    <img src="../essets/css1.png"/><li>CSS<br></br>
                            Experienced</li>
                    <img src="../essets/react.png"/><li>React<br></br>
                            Experienced</li>
                            
                    <img src="../essets/reactnative.png"/><li>React Native<br></br>
                            Intermediate</li>
                    <img src="../essets/tailwind.png" /><li>TailwindCss<br></br>
                            Basic</li>
                        </ul>
                    </div>
            <div className="backend-container">
                <h3>Backend Development</h3>
                <ul>
                    <img src="../essets/nodejs.png"/><li>Node JS<br></br>
                        Experienced</li>
                        <img src="../essets/express.png"/><li>Express JS<br></br>
                        Experienced</li>
                    <img src="../essets/git.png"/><li>Git<br></br>
                        Experienced</li>
                    <img src="../essets/psql.png"/><li>PostgreSQL<br></br>
                        Intermediete</li>
                    <img src="../essets/mdb.png"/><li>MongoDB<br></br>
                        Basic</li>
                    <img src="../essets/python.png"/><li>Pyhton<br></br>
                        Basic</li>
                </ul>
            </div>
            </div>
        </section>
    );
};

