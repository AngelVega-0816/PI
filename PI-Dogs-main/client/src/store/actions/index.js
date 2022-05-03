import axios from "axios";
import types from "./../type_actions";

// variable que contiene la URL del host
let host = 'http://localhost:3001';

export function getDogs() {
    return function(dispatch) {
        return axios.get(`${host}/dogs`)
            .then(res => {
                return dispatch({
                    type: types.getDogs,
                    payload: res.data
                })
            })
    };
};

export function getTemperaments() {
    return async function(dispatch) {
        return axios.get(`${host}/temperament`)
            .then(res => {
                return dispatch({
                    type: types.getTemperaments,
                    payload: res.data
                })
            })
    };
};

export function getDetails (id) {
    return async function () {
        try {
            let response = await axios.get(`${host}/dogs/${id}`);
            return {
                type: types.getDetails,
                payload: response.data,
            };
        } catch {
            return alert('Dog not found. Try again');
        }
    }
}

export function getDogsName (payload) {
    return async function (dispatch) {
        return axios.get(`${host}/dogs?name=${payload}`)
            .then(res => {
                return dispatch({
                    type: types.getDogsName,
                    payload: res.data
                })
            })
    };
};

export function sortName (payload) {
    return {
        type: types.sortName,
        payload,
    };
};

export function sortWeight (payload) {
    return {
        type: types.sortWeight,
        payload,
    };
};

export function sortHeight (payload) {
    return {
        type: types.sortHeight,
        payload,
    };
};

export function filterDogsTemp (payload) {
    return {
        type: types.filterDogsTemp,
        payload,
    };
};

export function filterDogsCreated (payload) {
    return {
        type: types.filterDogsCreated,
        payload,
    };
};


export function postDog (payload) {
    return async function () {
        let response = axios.post(`${host}/dog`, payload);
        return response;
    };
};