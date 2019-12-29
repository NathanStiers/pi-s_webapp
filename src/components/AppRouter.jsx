import React from "react"

import { HashRouter as Router, Route } from "react-router-dom"

import DashboardPage from "./DashboardPage/DashboardPage"
import OldJobsPage from "./OldJobsPage/OldJobsPage"
import FutureJobsPage from "./FutureJobsPage/FutureJobsPage"
import ProjetPage from "./ProjetPage/ProjetPage"
import AdminPage from "./AdminPage/AdminPage"


function AppRouter() {
  return (
    <Router>
      <Route exact path="/" component={DashboardPage} ></Route>
      <Route path="/oldJobs" component={OldJobsPage}></Route>
      <Route path="/futureJobs" component={FutureJobsPage}></Route>
      <Route path="/projet" component={ProjetPage}></Route>
      <Route path="/admin" component={AdminPage}></Route>
    </Router>
  )
}

export default AppRouter
