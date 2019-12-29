import { SET_ALERT, REMOVE_ALERT } from './types';
import uuid from 'uuid';

// The setAlert action is being called
export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  // Assigning an id for the action
  const id = uuid.v4();
  dispatch({
    // Dispatching the action
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
