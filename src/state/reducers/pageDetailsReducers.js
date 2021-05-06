import { combineReducers } from "redux"

const initialState = {
  pageDetails: [{ Planet: "", Climate: "", Population: "", Terrain: "" }],
}

export const pageDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLANET_NAME":
      console.log("PLANET_NAME", action.pageDetails)
      return state.Planet
    case "PLANET_POPULATION":
      console.log("PLANET_POPULATOIN", action.pageDetails)
      return state.Population
    case "PLANET_CLIMATE":
      console.log("PLANET_CLIMATE", action.pageDetails)
      return state.Climate
    default:
      return state
  }
}

//maybe try a redux-selector?
// export const selectPageDetail = (state)
