import constants from '../constants';
import { initialState } from './initialState.js';

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case constants.ACTION_CHANGE_LAST_TASK_ID:
      return { ...state, lastTaskId: action.payload }
    case constants.ACTION_CHANGE_ALL_DATA:
      return { ...state, allData: action.payload }

    //
      
    default:
    // do nothing
  }
  return state;
};