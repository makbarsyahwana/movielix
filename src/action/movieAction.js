import axios from "axios";
var apiKey = '3c5f63d0'

export const getMovieDetails = async (dispatch, data) => {

    dispatch({
        type: "GET_MOVIE_REQUEST"
    })

    return axios.get('http://www.omdbapi.com', {
        params: {
            apiKey,
            i: data.imdbID,
        }
    }).then((response) => {
        console.log(response)
        return dispatch({
            type: "GET_MOVIE_SUCCESS",
            data: response.data
        })
    }).catch((error) => {
        console.log(error)
        return dispatch({
            type: "GET_MOVIE_ERROR",
            error: error.message
        })
    })

}

export const getMovieList = async (dispatch, data) => {
    
    dispatch({
        type: "GET_MOVIE_LIST_REQUEST"
    })

    return axios.get('http://www.omdbapi.com', {
        params: {
            apiKey,
            s: data.s,
            page: data.page
        }
    }).then((response) => {
        console.log(response.data)
        if (response.status === 200) {
            return dispatch({
                type: "GET_MOVIE_LIST_SUCCESS",
                data: response.data
            })
        }
    }).catch((error) => {
        console.log(error)
        return dispatch({
            type: "GET_MOVIE_LIST_ERROR",
            error: error.message
        })
    })

}