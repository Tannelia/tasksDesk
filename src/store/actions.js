import constants from '../constants';

export default {


  changeLastTaskId(NewLastTaskId) {
    return {
      type: constants.ACTION_CHANGE_LAST_TASK_ID,
      payload: NewLastTaskId
    }
  },
  changeAllData(NewAllData) {
    return {
      type: constants.ACTION_CHANGE_ALL_DATA,
      payload: NewAllData
    }
  }
}
