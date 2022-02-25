import { Component} from "react";
import { connect } from "react-redux";

import Navbar from "./Navbar";
import { data } from "../data";
import MovieCard from "./MovieCard";
import {addMovies , showFavouriteMovies} from '../actions';


class App extends Component {

    componentDidMount(){
        this.props.dispatch(addMovies(data))
    }
    changeTab = (val) => {
      return this.props.dispatch(showFavouriteMovies(val))
    }

    render() {
      const {movies , search} = this.props;
      const {listOfMovies, favouriteMovies, showfavourites} = movies;
      const displayMovies = showfavourites ? favouriteMovies : listOfMovies;

      return (
        <div className="App">
          <Navbar />
          <div className="main">
            <div className="tabs">
              <div 
                className={`tab ${showfavourites ? '' : 'active-tabs'}`} 
                onClick = {()=>this.changeTab(false)}
              >Movies</div>
              <div 
                className={`tab ${showfavourites ? 'active-tabs' : ''}`}
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
                            dispatch = {this.props.dispatch} 
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


// class AppWrapper extends Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {
//           (store) => {
//             return <App store={store} />
//           }
//         }
//       </StoreContext.Consumer>
//     );
//   }
// }

function mapStateToProps(state) {
  return {
    movies : state.movies,
    search : state.search
  }
}

const ConnectedComponentWrapper = connect(mapStateToProps)(App);

export default ConnectedComponentWrapper;
