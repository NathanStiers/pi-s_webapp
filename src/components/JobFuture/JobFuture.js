import React from 'react'
import './JobFuture.css'


function JobFuture(props) {
    return (
        <div>
            <p><i>{props.date}</i></p>
            <h5>{props.job} à {props.place}</h5>
            <pre>{props.description}</pre>
        </div>
    )
}

export default JobFuture;
