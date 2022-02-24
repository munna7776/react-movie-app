import { data } from "../data";


const Navbar = ()=>{
    return (
        <div className="nav">
            <div className="search-container">
                <input type="text" />
                <button id="search-btn">Search</button>
                <div className="search-results">
                    <div className="search-result">
                        <img src={data[0].Poster} alt="search-image" />
                        <div className="movie-info">
                            <span>{data[0].Title}</span>
                            <button 
                                // onClick={() => this.handleAddToMovies(movie)}
                            >
                                Add to Movies
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;