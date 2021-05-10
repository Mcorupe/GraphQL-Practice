//idk this was used in an example, they did a few things like all at the same time and it confused me. this is like a reducer
//and action creator all in one.
//Idk i think this is like you know how we did the Fizzbuzz thing in the bootcamp... and then some smart ass out there can do it in one line
//this is like that, some smart ass did a redux thing in one line and idk its magic or something.


import { createStore as reduxCreateStore } from "redux"

const orgState = { planet: { name: "", climate: "", population: "", terrain: "" } }

function reducer(state = orgState, action) {
    switch (action.type) {
        case "IDS_PROD":
            return {
                ...state,
                planet: { ...state.planet, name: "PROD", climate: "STRESSFUL", population: "DEAD", terrain: "UNSTABLE" },
                page: "IDS_PROD",
            }
        case "IDS_SYSTEST":
            return {
                ...state,
                planet: { ...state.planet, name: "INT", climate: "LIVEABLE", population: "DYING", terrain: "COLLAPSING" },
                page: "IDS_SYSTEST",
            }
        case "IDS_DEV":
            return {
                ...state,
                planet: { ...state.planet, name: "DEV", climate: "PEACEFUL", population: "ALIVE", terrain: "STABLE" },
                page: "IDS_DEV",
            }
        default:
            return state
    }
}

const createStore = () => reduxCreateStore(reducer, orgState)
export default createStore