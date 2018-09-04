import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as quoteActions from '../../actions/quoteActions';
import PropTypes from 'prop-types';
import React, { Component} from "react";
// import {hot} from "react-hot-loader";
import { Container, Button, Divider, Loader, Dimmer, Icon } from 'semantic-ui-react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import StatusMessage from '../../components/StatusMessage';

class HomePage extends Component{

  constructor () {
    super();
    // this.state = {
    //   quote: "",
    //   author: "",
    //   title: "",
    //   copied: false
    // };
    // bindings
    // this.getRandomQuote = this.getRandomQuote.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.CopyToClipboard = this.CopyToClipboard.bind(this);
  }

  // componentWillMount() { // HERE WE ARE TRIGGERING THE ACTION
  //   // loads it into state
  //    this.props.quoteActions.fetchQuote();
  //  }

  handleClick() {
    this.props.quoteActions.fetchQuote();
  }

  CopyToClipboard() {
    this.setState({copied: true});
  }

  componentDidMount() {
   this.props.quoteActions.fetchQuote();
   console.log("After getting quote");
   console.log(this.props);
  }

  // fetch (endpoint) {
  //   return window.fetch(endpoint)
  //     .then(response => response.json())
  //     .catch(error => console.log(error))
  // }
  //
  // getRandomQuote() {
  //   this.fetch('/random/quote')
  //     .then(data => {
  //       if(data.length) {
  //         const newState = Object.assign({}, this.state, {
  //           quote: data[0].quote,
  //           author: data[0].author,
  //           title: data[0].title,
  //           copied: false
  //         });
  //         this.setState(newState);
  //       }
  //     })
  // }

  render(){
    let {quote,author,title} = (this.props || {}).quote;

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
            <Button basic size='big' color='grey' onClick={this.handleClick} title="Refresh quote">
              <Icon name='refresh' size='large' fitted />
            </Button>
            <CopyToClipboard text={quote}
              onCopy={() => this.CopyToClipboard()}>
              <Button basic size='big' color='grey' title="Copy quote">
                <Icon name='copy' size='large' fitted />
              </Button>
            </CopyToClipboard>
            <Button basic size='big' color='grey' title="Email quote">
              <Icon name='share alternate' size='large' fitted />
            </Button>
          </Icon.Group>
          <StatusMessage />
        </div>
      </Container>
      : <Container text>
        <Dimmer active inverted>
          <Loader content='Loading' />
        </Dimmer>
      </Container>
  }
}

HomePage.propTypes = {
  quoteActions: PropTypes.object,
  quote: PropTypes.object
};

function mapStateToProps(state) {
  const quote = state.quote || {};
  return {
    quote: quote
  };
}

function mapDispatchToProps(dispatch) {
  return {
    quoteActions: bindActionCreators(quoteActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
