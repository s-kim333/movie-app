import React from "react";
import ProopTypes from "prop-types";
import axios from "axios";

class App extends React.Component {
  // state
  state = {
    isLoading : true,
    movies: []
  }
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
  // component life cycle
  componentDidMount(){
    // fetching movies with movie api
    this.getMovies();
  }
  componentDidUpdate(){

  }
  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading ... " : "Ready"}</div>;
  }
}

export default App;
