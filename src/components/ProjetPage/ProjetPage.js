import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Title from '../Title/Title'

function ProjetPage() {
    // Ici, faire un peu à la one.
    var banque = 90+500+15+500+20+50+25-584.1
    var prct = banque/15000*100 + "%"
    console.log(prct)
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="text-center col-12 mt-4 ">
                    <Title>Nos objectifs et projets</Title>
                </div>
            </div>
            <div class="row">
                <div class="text-center col-12">
                    <Link class="mr-2 btn btn-outline-dark" to="/">Vos heures</Link>
                    <Link class="mr-2 btn btn-outline-dark" to="oldJobs">Nos travaux passés</Link>
                    <Link class="mr-2 btn btn-outline-dark" to="futureJobs">Nos travaux futurs</Link>
                    <Link class="btn btn-outline-dark" to="admin">Admin</Link>
                </div>
            </div>
            <hr /><br />
            <div>
                <h4><u>Travaux constants</u></h4>
                <ul>
                    <li>
                        Vente de jus de pomme (531 litres de jus de pomme récolté).<br/>
                        Il y a 10 litres de vendus. Soit 25€ actuellement de récolté.
                    </li>
                    <li>Organisation de bar pi's (faut trouver un endroit).</li>
                    <li>Vente de massepain.</li>
                    <li>Vente de chaussettes.</li>
                </ul><br />
                <h4><u>Notre destination et projet</u></h4>
                <p>A définir</p><br />
                <h4><u>Le budget</u></h4>
                <p>On a pour le moment réuni la somme de {banque}€.</p>
                <p>L'objectif est d'atteindre au moins 15 000€.</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:prct}}></div>
                </div>
            </div>
        </div>
    )
}

export default ProjetPage;
