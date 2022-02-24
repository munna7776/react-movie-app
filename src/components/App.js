import { Component} from "react";

import Navbar from "./Navbar";
import { data } from "../data";
import MovieCard from "./MovieCard";
import {addMovies , showFavouriteMovies} from '../actions'
class App extends Component {

    componentDidMount(){
        const {store} = this.props;
        store.subscribe(()=>{
          this.forceUpdate();
        })
        store.dispatch(addMovies(data))

    }
    changeTab = (val) => {
      return this.props.store.dispatch(showFavouriteMovies(val))
    }

    render() {
      const {movies , search} = this.props.store.getState();
      const {listOfMovies, favouriteMovies, showfavourites} = movies;
      const displayMovies = showfavourites ? favouriteMovies : listOfMovies;
      return (
        <div className="App">
          <Navbar dispatch = {this.props.store.dispatch} search = {search} />
          <div className="main">
            <div className="tabs">
              <div 
                className="tab" 
                onClick = {()=>this.changeTab(false)}
              >Movies</div>
              <div 
                className="tab" 
                onClick = {()=>this.changeTab(true)}
              >Favourites</div>
            </div>
            <div className="list">
              {
                displayMovies.map((movie,index)=>{
                  return <MovieCard 
                            key={index} 
                            movie={movie} 
                            favouriteMovies = {favouriteMovies}
                            dispatch = {this.props.store.dispatch} 
                          />
                })
              }
            </div>
            {
              displayMovies.length === 0 ? 
              <div className="no-movies">No Movies to display !</div> : null
            }
          </div>
        </div>
      );
    }
}

export default App;
