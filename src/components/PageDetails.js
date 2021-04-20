import React from "react"
import Typography from "@material-ui/core/Typography"
import { Paper } from "@material-ui/core"


const PageDetails = props => {
    return (
        <Paper
        elevation={6}
        variant="outlined"
        square
        style={{maxWidth: 960,
        padding: `4rem`,
    }}
    >
        <Typography>Planet: {props.name}</Typography>
        <Typography>Climate: {props.climate}</Typography>
        <Typography>Population: {props.population}</Typography>
        <Typography>Terrain: {props.terrain}</Typography>
    </Paper>
    )
}

export default PageDetails