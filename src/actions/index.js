import axios from 'axios';
export const FETCH_DATA = 'FETCH_DATA';

export function fetchData(dataType) {
    // eslint-disable-next-line
    console.log(`DATATYPE: ${dataType}`);
    // const url = `http://407c508a.ngrok.io/${dataType}`;
    const url = `http://59dcef0f.ngrok.io/all`;
    const request = axios.get(url);
    return {
        type: FETCH_DATA,
        payload: request
    };
}
