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
                    <li><img src="../essets/html1.png"/>HTML<br></br>
                            Experienced</li>
                    <li><img src="../essets/css1.png"/>CSS<br></br>
                            Experienced</li>
                    <li><img src="../essets/react.png"/>React<br></br>
                            Experienced</li>
                            
                    <li><img src="../essets/reactnative.png"/>React Native<br></br>
                            Intermediate</li>
                    <li><img src="../essets/tailwind.png" />TailwindCss<br></br>
                            Basic</li>
                        </ul>
                    </div>
            <div className="backend-container">
                <h3>Backend Development</h3>
                <ul>
                    <li><img src="../essets/nodejs.png"/>Node JS<br></br>
                        Experienced</li>
                    <li><img src="../essets/express.png"/>Express JS<br></br>
                        Experienced</li>
                    <li><img src="../essets/git.png"/>Git<br></br>
                        Experienced</li>
                        <p></p>
                    <li><img src="../essets/psql.png"/>PostgreSQL<br></br>
                        Intermediete</li>
                    <li><img src="../essets/mdb.png"/>MongoDB<br></br>
                        Basic</li>
                    <li><img src="../essets/python.png"/>Pyhton<br></br>
                        Basic</li>
                </ul>
            </div>
            </div>
        </section>
    );
};

