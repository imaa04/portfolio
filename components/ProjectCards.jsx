import React from 'react'

export default function ProjectCards(props) {
    return (
        <div className="card">
            <img className='project-image' src={props.url} />
            <h2>{props.name}</h2>
            <a href={props.link} target="_blank">
                <button>View on Github</button>
            </a>
        </div>
    )
}
