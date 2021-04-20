import React, { useEffect, useReducer } from "react"
import { navigate } from "gatsby"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SideBar from "../components/SideBar"
import PageDetails from "../components/PageDetails"

import { usePageDetails } from "../components/PageDetailsHooks"
import { usePageDetails2 } from "../components/PageDetailsHooks2"

const StarWars = props => {
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
            name={usePageDetails().name}
            climate={usePageDetails().climate}
            population={usePageDetails().population}
            terrain={usePageDetails().terrain}
          />
          <PageDetails
            name={usePageDetails2().name}
            climate={usePageDetails2().climate}
            population={usePageDetails2().population}
            terrain={usePageDetails2().terrain}
          />
        </div>
      </Grid>
    </Layout>
  )
}

export default StarWars
