//idk this was used in an example, they did a few things like all at the same time and it confused me. this is like a reducer
//and action creator all in one.
//Idk i think this is like you know how we did the Fizzbuzz thing in the bootcamp... and then some smart ass out there can do it in one line
//this is like that, some smart ass did a redux thing in one line and idk its magic or something.


import { createStore as reduxCreateStore } from " redux"


const reducer = (state, action) => {
    if (actoin.type === `INCREMENT`) {
        return Object.assign({}, state, {
            count: state.count +1,
        })
    }
    return state
}

const initialState = { count: 0 }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore