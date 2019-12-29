// A function that takes in a state
// and an action, action gets dispatched
// from an actions file
import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      // Adding an alert
      // State is immutable and it may already contain states
      // So we need to add our state to the already existing states
      // Hence the spread operator
      return [...state, payload];
    case REMOVE_ALERT:
      // Payload in this case will only be the id
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
