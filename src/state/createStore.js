import { createStore as reduxCreateStore } from " redux"


const reducer = (state, actoin) => {
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