import React from "react";
import Pi from "../../../Pi/Pi";
import {Button} from "react-bootstrap";

function Hours({
  pis,
  pi,
  setExistingItemText,
  updateItem
}) {
  return (
    <div>
      {pis.map((item) => {
        const { _id } = item;
        var onSaveEvent = (e) => updateItem(_id);
        return (
          <div key={_id}>
            <hr/>
            <Pi id={_id} nom={item.name} prenom={item.surname} timing={item.hours} totem={item.totem} admin={true} setItemText={setExistingItemText}/>
            <Button onClick={onSaveEvent}>Save {item.totem}</Button>
            <br/><br/>
            <hr/>
          </div>
        );
      })}
      <br/><br/>
    </div>
  );
}

export default Hours;
