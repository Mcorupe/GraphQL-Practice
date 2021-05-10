import React, { useEffect, useReducer } from "react"
import { navigate } from "gatsby"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SideBar from "../components/SideBar"
import PageDetails from "../components/PageDetails"

import { usePageDetails } from "../components/PageDetailsHooks"

import { connect } from "react-redux"

const StarWars = (props) => {
  const { name, climate, population, terrain } = props;
  return (
    <Layout>
      <SEO title="datastreams" />
      <Grid container>
        <div>
          <SideBar />
        </div>
        <div>
          <h1>STARWARS</h1>
          <PageDetails
            name={name}
            climate={climate}
            population={population}
            terrain={terrain}
          />
        </div>
      </Grid>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    name: state.name, 
    climate: state.climate,
    population: state.population,
    terrain: state.terrain
  }
}
const mapDispatchToProps = dispatch => {
  return { dispatch }
}

const ConnectedStarWars = connect(mapStateToProps, mapDispatchToProps)(StarWars)

export default ConnectedStarWars