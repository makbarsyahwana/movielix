export const movieInitialState = {
    movieList: [],
    movieDetails: {},
    totalResults: 0,
    error: false,
    loading: true
}

export function movieReducer(state, action) {
    switch (action.type) {
        case "GET_MOVIE_REQUEST":
            return {
                ...state,
                loading: true
            }

        case "GET_MOVIE_SUCCESS":
            return {
                ...state,
                movieDetails: action.data,
                loading: false
            }

        case "GET_MOVIE_ERROR":
            return {
                ...state,
                loading: false,
                error: action.error
            }



        case "GET_MOVIE_LIST_REQUEST":
            return {
                ...state,
                loading: true
            }

        case "GET_MOVIE_LIST_SUCCESS":
            return {
                ...state,
                movieList: action.data.Search,
                totalResults: action.data.totalResults,
                loading: false
            };

        case "GET_MOVIE_LIST_ERROR":
            return {
                ...state,
                loading: false,
                error: action.error
            }
    
        default:
            return state;
    }
  };