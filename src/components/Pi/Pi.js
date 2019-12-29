import React from 'react'


function Pi(props) {
  return (
    <div>
      <h4>{props.prenom} {props.nom}</h4>
      <p> {props.totem} a fourni la somme de {props.timing}h de travail.</p>
    </div>
  )
}

export default Pi;
