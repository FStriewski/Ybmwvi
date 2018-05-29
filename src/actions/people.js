import * as request from 'superagent'

const baseUrl = 'https://swapi.co/api'


export const FETCH_ALL_PEOPLE = "FETCH_ALL_PEOPLE"



export const fetchAllPeople = () => (dispatch) => {
    request
        .get(`${baseUrl}/people/`)
        .then(response => dispatch({
            type: FETCH_ALL_PEOPLE,
            payload: response.body
        }))
        .catch(error => console.error(error))
}


