import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Title from '../Title/Title'
import Anciens from '../Anciens/Anciens'

function OldJobsPage() {

    const oldWork = [
    { date: "21 septembre 2019", job: "Vente de gâteaux à la journée de passage", gain: "90" },
    { date: "28 septembre 2019", job: "Service au concours de pompiers", gain: "500" },
    { date: "5 octobre 2019", job: "Vente de gâteaux d'après réunion", gain: "15" },
    { date: "12 octobre 2019", job: "Aide à un mariage", gain: "500"},
    { date: "19 octobre 2019", job: "Vente de gâteaux d'après réunion", gain: "20" },
    { date: "29 octobre 2019", job: "Ramassage de branches chez Iomys", gain: "50" },
    { date: "2 novembre 2019", job: "Cueillette de pomme", gain: "25-584,10" } // Augmenter le total à chaque fois
    ]

    return (
        <div class="container-fluid">
            <div class="row">
                <div class="text-center col-12 mt-4 ">
                    <Title>Les travaux passés</Title>
                </div>
            </div>
            <div class="row">
                <div class="text-center col-12">
                    <Link class="mr-2 btn btn-outline-dark" to="/">Vos heures</Link>
                    <Link class="mr-2 btn btn-outline-dark" to="futureJobs">Nos travaux futurs</Link>
                    <Link class="mr-2 btn btn-outline-dark" to="projet">Nos projets</Link>
                    <Link class="btn btn-outline-dark" to="admin">Admin</Link>
                </div>
            </div>
            <hr />
            <Anciens job={oldWork}></Anciens>
        </div>
    )
}

export default OldJobsPage;
