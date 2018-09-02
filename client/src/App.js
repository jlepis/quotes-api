import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./index.css";

class App extends Component{

  constructor () {
    super();
    this.state = {
      quote: "hello world",
      author: "Cervantes",
      title: "Don Quixote"
    };
    this.getRandomQuote = this.getRandomQuote.bind(this);
  }

  componentDidMount() {
    this.getRandomQuote();
  }

  fetch (endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getRandomQuote() {
    this.fetch('/random/quote')
      .then(data => {
        if(data.length) {
          const newState = Object.assign({}, this.state, {
            quote: data[0].quote,
            author: data[0].author,
            title: data[0].title
          });
          this.setState(newState);
        }
      })
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
