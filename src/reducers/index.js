import { combineReducers } from 'redux';
import IotDataReducer from './iotDataReducer';

const rootReducer = combineReducers({
    iotData: IotDataReducer
});

export default rootReducer;
