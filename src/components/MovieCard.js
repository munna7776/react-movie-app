import React, { Component } from 'react';
import {ratingStar,bookmark,bookmarked} from '../icons';
import {addToFavouriteMovies, removeFromFavouriteMovies} from '../actions'



export default class MovieCard extends Component {

    handleAddToFavouriteMovies = () => {
        const {movie,dispatch} = this.props
        dispatch(addToFavouriteMovies(movie));
    }

    handleRemoveFavouriteMovies = () => {
        const {movie,dispatch} = this.props
        dispatch(removeFromFavouriteMovies(movie));
    }

    isMovieFavourite = ()=>{
        const {movie,favouriteMovies} = this.props;

        const index = favouriteMovies.indexOf(movie);
        if(index !== -1){
            // found the movie
            return true;
        }
        return false;
    }
    render() {
        const {movie} = this.props;
        return (
            <div className="movie-card">
                <div className="left">
                    <img src={movie.Poster} alt="movie-image" />
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}<img src={ratingStar} alt="" height={'20px'}  /></div>
                        <div className="favourite">
                            {
                                this.isMovieFavourite() ?
                                (<img src={bookmarked} alt="" height={'20px'} onClick={this.handleRemoveFavouriteMovies}/>):
                                (<img src={bookmark} alt="" height={'20px'} onClick={this.handleAddToFavouriteMovies}/>) 
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        )
  }
}
