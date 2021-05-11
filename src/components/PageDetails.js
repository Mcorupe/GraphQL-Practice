import React from "react"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"
import { Paper } from "@material-ui/core"
import { connect } from "react-redux"

// also export this for easier testing down the rode
const PageDetails = props => {
    return (
        <Paper
            elevation={6}
            variant="outlined"
            square
            style={{
                maxWidth: 960,
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

const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}

PageDetails.propTypes = {
    name: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
}

export default PageDetails;