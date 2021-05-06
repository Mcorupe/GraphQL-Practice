import { combineReducers } from "redux"
import { pageDetailsReducer } from "./pageDetailsReducers"

export const rootReducer = combineReducers({
  pageDetails: pageDetailsReducer,
})


