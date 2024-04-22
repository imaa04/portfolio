import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ProjectCards from "../components/ProjectCards";



gsap.registerPlugin(ScrollTrigger)
const Projects = ({ projectRef }) => {
    const about = useRef();
    const headlineRef = useRef();
    const sliderContainerRef = useRef();
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
                    start: 'top 70%',
                    end: 'bottom 20%',
                    scrub: 1,
                    toggleActions: 'play none restart reverse',
                },
            }
        );
    }, []);
 
        const responsive = {
            superLargeDesktop: {
                breakpoint: { max: 4000, min: 1024 },
                items: 3,
                lidesToSlide: 2,
            },
            desktop: {
                breakpoint: { max: 1024, min: 800 },
                items: 3
            },
            tablet: {
                breakpoint: { max: 800, min: 464 },
                items: 2
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
            }
        };

        const projectData = [
            {
                id: 1,
                imageSrc: './project-images/pairsniper.png',
                name: 'Pair Sniper',
                link: 'https://github.com/imaa04',
                language1: 'React', 
                language2: 'Postgress',
                language3: 'Node',
                language4: 'Supabase',
                language5: 'MUI',
                language6: 'Tailwind',
                language7: 'Render',
            },
            {
                id: 2,
                imageSrc: './project-images/clusterbooks.png',
                name: 'Cluster Books',
                link: 'https://github.com/imaa04/fe-book-swap',
                language1: 'React Native',
                language2: 'MongoDB',
                language3: 'Node',
                language4: 'Expo',
                language5: 'WebSocket',
                language6: 'Tailwind',
                language7: 'Render',
            },
            {
                id: 3,
                imageSrc: './project-images/ncnews.png',
                name: 'NC NEWS',
                link: 'https://github.com/imaa04/fe-nc-news',
                language1: 'React',
                language2: 'Postgress',
                language3: 'Node',
                language4: 'Express',
                language5: 'ElephantPSQL',
                language6: 'CSS',
                language7: 'Render',
            },
            {
                id: 4,
                imageSrc: './project-images/ticketmaster.png',
                name: 'Ticket Master',
                link: 'https://github.com/imaa04/fe-react-data-visualisation',
                language1: 'React',
                language2: 'TicketMaster API',
                language3: 'CSS',
                language4: 'Render',
            },
            
        ]

        const project = projectData.map(item => (
            <ProjectCards
                name={item.name}
                url={item.imageSrc}
                link={item.link}
                skill1={item.language1}
                skill2={item.language2}
                skill3={item.language3}
                skill4={item.language4}
                skill5={item.language5}
                skill6={item.language6}
                skill7={item.language7}
            />
        ))
    return (
        <>
            <section ref={projectRef} className="section-container projects" id="projects">
                <h2 ref={headlineRef} className="project-title">
                PROJECTS
            </h2>
            <Carousel responsive={responsive}>
                {project}
            </Carousel>
        </section>
        
        </>    
    );
};

export default Projects;
