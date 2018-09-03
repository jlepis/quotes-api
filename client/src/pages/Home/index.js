import React, { Component} from "react";
import {hot} from "react-hot-loader";
import { Container, Button, Divider, Loader, Dimmer, Icon } from 'semantic-ui-react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import "./index.css";



class HomePage extends Component{

  constructor () {
    super();
    this.state = {
      quote: "",
      author: "",
      title: "",
      copied: false
    };
    // bindings
    this.getRandomQuote = this.getRandomQuote.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.CopyToClipboard = this.CopyToClipboard.bind(this);
  }

  handleClick() {
    this.getRandomQuote();
  }

  CopyToClipboard() {
    this.setState({copied: true});
    // issue alert message?
    // console.log("Copied!");
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
          <Icon.Group size='big'>
            <Button basic size='big' color='gray' onClick={this.handleClick} title="Refresh quote">
              <Icon name='refresh' size='large' fitted />
            </Button>
            <CopyToClipboard text={this.state.quote}
              onCopy={() => this.CopyToClipboard()}>
              <Button basic size='big' color='gray' title="Copy quote">
                <Icon name='copy' size='large' fitted />
              </Button>
            </CopyToClipboard>

            <Button basic size='big' color='gray' title="Email quote">
              <Icon name='share alternate' size='large' fitted />
            </Button>
          </Icon.Group>
          <Message />
        </div>
      </Container>
      : <Container text>
        <Dimmer active inverted>
          <Loader content='Loading' />
        </Dimmer>
      </Container>
  }
}

export default HomePage;
