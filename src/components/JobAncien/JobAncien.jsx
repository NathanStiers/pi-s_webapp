import React from 'react'


function JobAncien(props) {
    return (
        <div>
            <p><i>{props.date}</i></p>
            <p>{props.job}. Gain effectué : {props.gain}€</p>
        </div>
    )
}

export default JobAncien;
