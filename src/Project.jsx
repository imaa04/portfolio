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
                breakpoint: { max: 3000, min: 1024 },
                items: 4
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
                imageSrc: '../essets/project-images/clusterbooks.png',
                name: 'Cluster Books',
                link: 'https://github.com/imaa04/fe-book-swap'
            },
            {
                id: 2,
                imageSrc: '../essets/project-images/ncnews.png',
                name: 'NC NEWS',
                link: 'https://github.com/imaa04/fe-nc-news'
            },
            {
                id: 3,
                imageSrc: '../essets/project-images/ticketmaster.png',
                name: 'Ticket Master',
                link: 'https://github.com/imaa04/fe-react-data-visualisation'
            },
            {
                id: 4,
                imageSrc: '../essets/project-images/blog.png',
                name: 'Blog',
                link: 'https://github.com/imaa04/fitness-blog'
            },
            {
                id: 5,
                imageSrc: '../essets/project-images/code.jpeg',
                name: 'Python Monster',
                link: 'https://github.com/imaa04/monster-game-python'
            },
        ]

        const project = projectData.map(item => (
            <ProjectCards
                name={item.name}
                url={item.imageSrc}
                link={item.link}
            />
        ))
    return (
        <>
            <section ref={projectRef} className="section-container projects" id="projects">
                <h2 ref={headlineRef} className="project-title">
                PROJECTS
            </h2>
            <Carousel className="carousel" responsive={responsive}>
                {project}
            </Carousel>
        </section>
        
        </>    
    );
};

export default Projects;
