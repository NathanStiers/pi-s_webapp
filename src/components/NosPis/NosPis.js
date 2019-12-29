import React from 'react'
import Pi from "../Pi/Pi"


function NosPis({ eux }) {
  var pair = 'bg-white col-12 pt-2'
  var impair = 'bg-light col-12 pt-2'
  const array = eux.map((item, i) =>
    <div class={i % 2 === 0 ? pair : impair} >
      <Pi prenom={item.prenom} nom={item.nom} totem={item.totem} timing={item.timing}></Pi>
    </div>
  )
  return (
    <div class="row" name="ListePi">
      {array}
    </div>
  )
}

export default NosPis;
