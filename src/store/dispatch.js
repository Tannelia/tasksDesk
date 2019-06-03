import { bindActionCreators } from 'redux';
import actions from './actions';

export default {
    mapStateToProps(state) {
        // console.log('mapStateToProps - state, который пришел в mapStateToProps: ', state);
        return {
            lastTaskId: state.lastTaskId, 
            allData: state.allData
        }
    },
    mapDispatchToProps(dispatch) {
        return {
            changeLastTaskId: bindActionCreators(actions.changeLastTaskId, dispatch),
            changeAllData: bindActionCreators(actions.changeAllData, dispatch)
        }
    }

}