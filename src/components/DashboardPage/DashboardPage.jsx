import React, { useState, useEffect } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Title from '../Title/Title'
import NosPis from '../NosPis/NosPis'

// Ajout à faire
// Rendre plus joli avec Bootstrap
// NoSql -> créer API pour ça
// Ajout de contact
// Page de rappel d'event peut être cool aussi
// Attendre le logo pour l'ajouter

function DashboardPage() {

  const [pios, setPios] = useState([]);

  const fetchUsers = async () => {
    fetch('/api/users/listeUser')
      .then(response => response.json())
      .then(data => {
        console.log("here we go ? ", data)
        if (data.error)
          return alert("Error:" + data.error);
        setPios(data);
        console.log(pios)
      })
      .catch(err => console.error("[DashBoard] Error when fetching users:", err));
  };

  useEffect(() => {
    fetchUsers(pios)
  },[]
  );

  return (
    <div class="container-fluid">
      <div class="row">
        <div class="text-center col-12 mt-4 ">
          <Title>Quantité de Travail</Title>
        </div>
      </div>
      <div class="row">
        <div class="text-center col-12">
          <Link class="mr-2 btn btn-outline-dark" to="oldJobs">Nos travaux passés</Link>
          <Link class="mr-2 btn btn-outline-dark" to="futureJobs">Nos travaux futurs</Link>
          <Link class="mr-2 btn btn-outline-dark" to="projet">Nos projets</Link>
          <Link class="btn btn-outline-dark" to="admin">Admin</Link>
        </div>
      </div>
      <hr />
      <NosPis eux={pios}></NosPis>
    </div>
  )
}

export default DashboardPage;
