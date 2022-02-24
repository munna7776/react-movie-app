import { useState } from "react";
import { addMovieToList , handleMovieSearch } from "../actions";
import { plus } from "../icons";

const Navbar = (props)=>{
    const {results:movies , showSearchResult} = props.search;
    const [searchText , setSearchText] = useState('');
    const handleAddToMovies = (movie) => {
        props.dispatch(addMovieToList(movie))
        
    }
    const handleSearchClick = () => {
        props.dispatch(handleMovieSearch(searchText))
    }

    return (
        <div className="nav">
            <div className="search-container">
                <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
                <button id="search-btn" onClick={handleSearchClick}>Search</button>
                { showSearchResult && 
                        <div className="search-results" >
                            {movies.Search.map((movie , index)=>{
                                return (
                                        <div className="search-result" key={index} >
                                            <img src={movie.Poster} alt="search-image" />
                                            <div className="movie-info">
                                                <span>{movie.Title}</span>
                                                <img src={plus} alt="plus-icon" onClick={() => handleAddToMovies(movie)}  />
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                        
                        
                }
            </div>
        </div>
    );
}

export default Navbar;