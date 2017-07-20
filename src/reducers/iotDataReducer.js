import { FETCH_DATA } from '../actions/index';

const dataSet2 = {
    title: 'Water Temperature',
    value: randomIotData(10, 120),
    units: 'F'
};

const dataSet3 = {
    title: 'Humidity',
    value: randomIotData(0, 100),
    units: '%'
};

const dataSet4 = {
    title: 'Color',
    value: 'RED'
};

const dataSet5 = {
    title: 'Knob Value',
    value: randomIotData(0, 100)
};
//REMOVE
function randomIotData(min, max) {
    return (Math.floor(Math.random() * (max - min)) + min).toString();
}
function getDataSet1(){
    return {
        title: 'Air Temperature',
        value: randomIotData(10, 120),
        units: 'F'
    };
}
//REMOVE

const initialState = [getDataSet1(), dataSet2, dataSet3, dataSet4, dataSet5];

export default function(state = initialState, action){
    //Redux intercepted promise, and now returns object with actual data
    //REMOVE
    // var updatedState = [getDataSet1(), state[1], state[2], state[3], state[4]];
    // var tempTemp = randomIotData(999,1200);
    // console.log(`${action.type}TEMPTEMP: ${tempTemp}`);
    // updatedState[0].value = tempTemp;
    //REMOVE
    switch (action.type) {
        case FETCH_DATA:
            console.log(action.payload.data);
            return action.payload.data;
            // return updatedState;
        default:
            return state;
    }
}
