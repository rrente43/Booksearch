import {fromJS} from 'immutable'

export const SET_BOOKS = "SET_BOOKS";
export const SET_QUERY = "SET_QUERY";

export function setBooks (books){
    return{
        type: SET_BOOKS,
        payload: books
    }
}

export function setQuery (query){
    return{
        type: SET_QUERY,
        payload: query
    }
}
const ACTION_HANDLERS = {
    [SET_BOOKS]: (state, {payload:books}) => {
        return state.set("books", fromJS(books))
    },
    [SET_QUERY]: (state,{payload: query}) => {
        return.state.set("query", fromJS(query))
    }
}
const initialState = fromJS({})
EXPORT default(state = initialState, action )=>{
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}