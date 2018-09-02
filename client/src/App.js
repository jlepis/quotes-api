import React, { Component} from "react";
import {hot} from "react-hot-loader";
import { Container, Button, Divider, Loader, Dimmer } from 'semantic-ui-react'

import "./index.css";

class App extends Component{

  constructor () {
    super();
    this.state = {
      quote: "",
      author: "",
      title: ""
    };
    // bindings
    this.getRandomQuote = this.getRandomQuote.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.getRandomQuote();
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
    let {quote,author,title} = this.state;
    return quote
      ? <Container>
        <div className="App">
          <div className="container">
            <blockquote>{quote}</blockquote>
             <div className="source">{author}</div>
             <div className="source title">{title}</div>
          </div>
          <Divider />
          <Button basic size='big' color='gray' onClick={this.handleClick}>New Quote</Button>
        </div>
      </Container>
      : <Container text>
        <Dimmer active inverted>
          <Loader content='Loading' />
        </Dimmer>
      </Container>
  }
}

export default hot(module)(App);
