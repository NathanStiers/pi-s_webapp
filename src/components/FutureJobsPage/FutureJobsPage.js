import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Title from '../Title/Title'
import Future from '../Future/Future'

function FutureJobsPage() {

    const futureWork = [
    { date: "A déterminer", job: "Organisation des 10km de Bierges", place: "Bierges", description: "Nous allons créer l'évènement des 10km de Bierges.\nAu programme, une course de 10 kilomètres dans Bierges. " },
    { date: "A déterminer", job: "Ramassage de feuilles", place: "Clos du champ d'Abeiche 31, Braine-l'Alleud", description: "Venir râteler toutes les feuilles présentes dans le jardin d'Aquila.\nCe travail sera fait en plusieurs sessions." },
    { date: "9 novembre 2019", job: "Vente de gâteaux d'après réunion", place: "Bierges", description: "Vente de nourriture et boissons en fin de réunion.\nOn s'adaptera aux changements climatiques en proposants des soupes, vin chaud,..." },
    { date: "7 décembre 2019", job: "Vente de gâteaux d'après réunion", place: "Bierges", description: "Vente de nourriture et boissons en fin de réunion.\nOn s'adaptera aux changements climatiques en proposants des soupes, vin chaud,..." },
    { date: "du 13 au 24 décembre 2019", job: "Emballage chez Planet Parfum", place: "Wavre", description: "Emballage de cadeaux en cette fin d'année." },
    { date: "26 janvier 2020", job: "Aide à la Sand Race", place: "Mont-St-Guibert", description: "Surveiller les passages sur les obstacles et accueillir les gens.\nIl s'agit d'une super course d'obstacle gonflable." },
    { date: "1er février 2020", job: "Vente de gâteaux d'après réunion", place: "Bierges", description: "Vente de nourriture et boissons en fin de réunion.\nOn s'adaptera aux changements climatiques en proposants des soupes, vin chaud,..." },
    { date: "15 février 2020", job: "Vente de gâteaux d'après réunion", place: "Bierges", description: "Vente de nourriture et boissons en fin de réunion.\nOn s'adaptera aux changements climatiques en proposants des soupes, vin chaud,..." },
    { date: "7 mars 2020", job: "Vente de gâteaux d'après réunion", place: "Bierges", description: "Vente de nourriture et boissons en fin de réunion.\nOn s'adaptera aux changements climatiques en proposants des soupes, vin chaud,..." },
    { date: "21 mars 2020", job: "Vente de gâteaux d'après réunion", place: "Bierges", description: "Vente de nourriture et boissons en fin de réunion.\nOn s'adaptera aux changements climatiques en proposants des soupes, vin chaud,..." },
    { date: "25 avril 2020", job: "Fête d'unité", place: "Bierges", description: "Préparation de la journée de passage en vue de vendre un max de truc durant la journée." },
    { date: "9 mai 2020", job: "Vente de gâteaux d'après réunion", place: "Bierges", description: "Vente de nourriture et boissons en fin de réunion.\nOn s'adaptera aux changements climatiques en proposants des soupes, vin chaud,..." },
    { date: "23 mai 2020", job: "Vente de gâteaux d'après réunion", place: "Bierges", description: "Vente de nourriture et boissons en fin de réunion.\nOn s'adaptera aux changements climatiques en proposants des soupes, vin chaud,..." },
    { date: "27 juin 2020", job: "Vente de gâteaux d'après réunion", place: "Bierges", description: "Vente de nourriture et boissons en fin de réunion.\nOn s'adaptera aux changements climatiques en proposants des soupes, vin chaud,..." }
    ]

    return (
        <div class="container-fluid">
            <div class="row">
                <div class="text-center col-12 mt-4 ">
                    <Title>Les travaux à venir</Title>
                </div>
            </div>
            <div class="row">
                <div class="text-center col-12">
                    <Link class="mr-2 btn btn-outline-dark" to="/">Vos heures</Link>
                    <Link class="mr-2 btn btn-outline-dark" to="oldJobs">Nos travaux passés</Link>
                    <Link class="mr-2 btn btn-outline-dark" to="projet">Nos projets</Link>
                    <Link class="btn btn-outline-dark" to="admin">Admin</Link>
                </div>
            </div>
            <hr />
            <Future job={futureWork}></Future>
        </div>
    )
}

export default FutureJobsPage;
