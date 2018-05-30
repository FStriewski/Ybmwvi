import * as request from 'superagent'

const baseUrl = 'https://swapi.co/api'

export const FETCH_ALL_PLANETS = "FETCH_ALL_PLANETS"


// This is not the best approach but will do for now.
export const fetchAllPlanets = () => (dispatch) => {

    Promise.all([
        request.get(`${baseUrl}/planets/?page=1`),
        request.get(`${baseUrl}/planets/?page=2`),
        request.get(`${baseUrl}/planets/?page=3`),
        request.get(`${baseUrl}/planets/?page=4`),
        request.get(`${baseUrl}/planets/?page=5`),
    ])
        .then(response => {

            const flatPlanets = {}
            const result = [
                ...response[0].body.results,
                ...response[1].body.results,
                ...response[3].body.results,
                ...response[4].body.results,
                ...response[5].body.results
            ]

            result.map(i =>
                (!flatPlanets.hasOwnProperty(i.url))
                    ? flatPlanets[i.url] = i.name
                    : null
            )

            dispatch({
                type: FETCH_ALL_PLANETS,
                payload: flatPlanets
            })
        }
        )
        .catch(error => console.error(error))

}
