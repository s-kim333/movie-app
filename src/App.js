import React from "react";
import ProopTypes from "prop-types";

class App extends React.Component {
  // state
  state = {
    isLoading : true,
    movies: []
  }
  // component life cycle
  componentDidMount(){

  }
  componentDidUpdate(){

  }
  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading ... " : "Ready"}</div>;
  }
}

export default App;
