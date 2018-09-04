import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as quoteActions from '../../actions/quoteActions';
import PropTypes from 'prop-types';
import React, { Component} from "react";
// import {hot} from "react-hot-loader";
import { Container, Button, Divider, Loader, Dimmer, Icon } from 'semantic-ui-react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import StatusMessage from '../../components/StatusMessage';

import {NotificationContainer, NotificationManager} from 'react-notifications';

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
    this.handleClick = this.handleClick.bind(this);
    this.CopyToClipboard = this.CopyToClipboard.bind(this);
  }

  handleClick() {
    this.props.quoteActions.fetchQuote();
  }

  CopyToClipboard() {
    return this.props.quoteActions.copiedQuote();
  }

  componentDidMount() {
   this.props.quoteActions.fetchQuote();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render(){
    let {quote,author,title} = (this.props || {}).quote;
    let copied = (quote || {}).copyquote || false;

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
  quote: PropTypes.object,
  copyquote: PropTypes.string
};

function mapStateToProps(state) {
  const quote = state.quote || {};
  const copyquote = (quote.copyquote || {}).copyquote || false;
  console.log("index::copyquote")
  console.log(copyquote);
  return {
    quote,
    copyquote
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
