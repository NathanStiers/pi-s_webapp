import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import Title from '../Title/Title'
import HoursForm from './Forms/Hours/Hours.container'

// Ajout à faire
// Rendre plus joli avec Bootstrap
// NoSql -> créer API pour ça
// Barre de chargement objectif argent
// Page d'admin
// Ajout de contact
// Page de rappel d'event peut être cool aussi
// Attendre le logo pour l'ajouter

function AdminPage() {

  //Flemme de faire un vrai Hash et de toute façon pas sûr que les scouts sachent hack ça :p
  var mdp = "a"
  mdp = prompt("Veuillez indiquer le mot de passe : ")
  var m = 1187 //Hash de vérif du code
  var c = 0
  if(mdp===null){
    mdp = "Fail"
  }
  for (var i = 0; i < mdp.length; i++) {
    c += mdp.charCodeAt(i)
  }
  if (m !== c) {
    {window.open('https://www.youtube.com/watch?v=V4MF2s6MLxY')}
    return (<Redirect to='/' />)
  }
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="text-center col-12 mt-4 ">
          <Title>Admin</Title>
        </div>
      </div>
      <div class="row">
        <div class="text-center col-12">
          <Link class="mr-2 btn btn-outline-dark" to="/">Leurs heures</Link>
          <Link class="mr-2 btn btn-outline-dark" to="oldJobs">Nos travaux passés</Link>
          <Link class="mr-2 btn btn-outline-dark" to="futureJobs">Nos travaux futurs</Link>
          <Link class="btn btn-outline-dark" to="projet">Nos projets</Link>
        </div>
      </div>
      <hr />
      <HoursForm/>
      
    </div>
  )
}

export default AdminPage;
