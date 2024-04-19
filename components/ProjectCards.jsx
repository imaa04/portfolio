import React from 'react'

export default function ProjectCards(props) {
    return (
        <div className="card">
            <img className='project-image' src={props.url} />
            <h2>{props.name}</h2>
            <a href={props.link} target="_blank">
                <button>View on Github</button>
            </a>
            <ul className='project-skill'>
                <li>{props.skill1}</li>
                <li>{props.skill2}</li>
                <li>{props.skill3}</li>
                <li>{props.skill4}</li>
                <li>{props.skill5}</li>
                <li>{props.skill6}</li>
                <li>{props.skill7}</li>
            </ul>
        </div>
    )
}
