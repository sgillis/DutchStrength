import { combineReducers } from 'redux';

const initialState = [
  { text: "" }
]

export default function rootReducer(state = initialState, action){
  switch (action.type) {
  default:
    return state
  }
}
