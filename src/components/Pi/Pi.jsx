import React from 'react'


function Pi(props) {

  const onDescriptionChangeEvent = (e) => {
    return props.setItemText(props.id, e.target.value);
  };

  return (
    <div>
      <h4>{props.prenom} {props.nom}</h4>
      <p> {props.totem} a fourni la somme de {props.admin === true ? <input onChange={onDescriptionChangeEvent} type="text" placeholder={props.timing} /> : props.timing}h de travail.</p>
    </div>
  )
}

export default Pi;
