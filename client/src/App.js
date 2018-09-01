import React, { Component} from "react";
import axios from "axios";
import {hot} from "react-hot-loader";
import "./index.css";

class App extends Component{

  state = {
    quote: "hello world",
    author: "Cervantes",
    title: "Don Quixote"
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/random/quote",  { crossdomain: true })
      .then(response => {
        // create a new "State" object without mutating
        // the original State object.
        const newState = Object.assign({}, this.state, {
          quote: response.data[0].quote,
          author: response.data[0].author,
          title: response.data[0].title
        });
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render(){
    return(
      <div className="App">
        <div className="container">
          <blockquote>{this.state.quote}</blockquote>
           <div className="source">{this.state.author}</div>
           <div className="source title">{this.state.title}</div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
