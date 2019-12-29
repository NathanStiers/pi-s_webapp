import React from 'react'
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

  const pios = [
  { prenom: "Adèle", nom: "Brasseur", totem: "Dama", timing: "6" }, { prenom: "Alexandre", nom: "Thirion", totem: "Alaskan", timing: "12" },
  { prenom: "Aline", nom: "Laurent", totem: "Iomys", timing: "11" }, { prenom: "Amélie", nom: "Vandewijer", totem: "Tanuki", timing: "12" },
  { prenom: "Anoée", nom: "Beaufils", totem: "Herminéa", timing: "12" }, { prenom: "Brice", nom: "Tytgat", totem: "Axis", timing: "18" },
  { prenom: "Céline", nom: "Michels", totem: "Colféo", timing: "6" }, { prenom: "Charles", nom: "Montagne", totem: "Nagor", timing: "9,5" },
  { prenom: "Charlotte", nom: "Binamé", totem: "Sanderling", timing: "1" }, { prenom: "Ella", nom: "Dozin", totem: "Once", timing: "20" },
  { prenom: "Elodie", nom: "Giot", totem: "Ouandji", timing: "17" }, { prenom: "Eva", nom: "Borlée", totem: "Irbis", timing: "11" },
  { prenom: "Imad", nom: "El Amiri", totem: "/", timing: "10,5" }, { prenom: "Louise", nom: "Buxant", totem: "Chousingha", timing: "21" },
  { prenom: "Marion", nom: "Sulin", totem: "Fennec", timing: "6" }, { prenom: "Merlin", nom: "Maus", totem: "Akita", timing: "0" },
  { prenom: "Pierrick", nom: "Delstanches", totem: "Lemming", timing: "19" }, { prenom: "Rosaline", nom: "Van Doren", totem: "Scotia", timing: "1,5" },
  { prenom: "Sylvia", nom: "Houziaux", totem: "Yerli", timing: "18" }]

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
