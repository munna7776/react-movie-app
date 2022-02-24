import { combineReducers } from "redux";
import 
{   ADD_MOVIES, 
    ADD_TO_FAVOURITE_MOVIES, 
    REMOVE_FROM_FAVOURITE_MOVIES,
    SHOW_FAVOURITE_MOVIES,
    ADD_MOVIE_TO_LIST,

} from "../actions";

const initialMovieState = {
    listOfMovies : [],
    favouriteMovies : [],
    showfavourites : false,
}

export function movies(state=initialMovieState,action) {
    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                listOfMovies : action.movies
            };
            
        case ADD_TO_FAVOURITE_MOVIES :
            return {
                ...state,
                favouriteMovies : [action.movie,...state.favouriteMovies]
            };

        case REMOVE_FROM_FAVOURITE_MOVIES :
            const filteredMovies = state.favouriteMovies.filter((movie)=>{
                return movie.Title !== action.movie.Title;
            })

            return {
                ...state,
                favouriteMovies : [...filteredMovies]
            }
        
        case SHOW_FAVOURITE_MOVIES : 
            return {
                ...state,
                showfavourites : action.boolean
            }
        
        case ADD_MOVIE_TO_LIST :
            return {
                ...state,
                listOfMovies :[action.movie , ...state.listOfMovies]
            }

        default:
            return state;
    }
}

const initialSearchState = {
    result : {}
}
 
export function search(state = initialSearchState, action) {
    switch (action.type) {
        
        default:
            return state;
    }
}


const initialRootState = {
    movies : initialMovieState,
    search : initialSearchState
}

// export default function rootReducer(state = initialRootState, action) {
//     return {
//         movies : movies(state.movies,action),
//         search : search(state.search,action)
//     }
// }

export default combineReducers({
    movies,
    search
});