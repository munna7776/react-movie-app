// action types

export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITE_MOVIES = 'ADD_TO_FAVOURITE_MOVIES';
export const REMOVE_FROM_FAVOURITE_MOVIES = 'REMOVE_FROM_FAVOURITE_MOVIES';
export const SHOW_FAVOURITE_MOVIES = 'SHOW_FAVOURITE_MOVIES';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST'
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT'





// action creator
export const addMovies = (movies)=>{
    return {
        type:ADD_MOVIES,
        movies                 // same as movies:movies
    }
}

export const addToFavouriteMovies = (movie)=>{
    return {
        type:ADD_TO_FAVOURITE_MOVIES,
        movie                
    }
}

export const removeFromFavouriteMovies = (movie)=>{
    return {
        type:REMOVE_FROM_FAVOURITE_MOVIES,
        movie                
    }
}

export const showFavouriteMovies = (boolean) => {
    return {
        type : SHOW_FAVOURITE_MOVIES,
        boolean
    }
}

export const addMovieToList = (movie) => {
    return {
        type : ADD_MOVIE_TO_LIST,
        movie
    }
}

export const addSearchResult = (movie) => {
    return {
        type : ADD_SEARCH_RESULT,
        movie
    }
}

export const handleMovieSearch = (movie) => {
    return (dispatch) => {
        const url = `http://www.omdbapi.com/?apikey=8dfb0443&s=${movie}`;
        fetch(url)
            .then(response=>response.json())
            .then(movie => {
                dispatch(addSearchResult(movie))
            })
    }
}