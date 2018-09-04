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

    // bindings
    this.refreshQuote = this.refreshQuote.bind(this);
    this.CopyToClipboard = this.CopyToClipboard.bind(this);
  }

  refreshQuote() {
    this.props.quoteActions.fetchQuote();
  }

  CopyToClipboard() {
    this.props.quoteActions.copyQuote(true);
  }

  componentDidMount() {
   this.props.quoteActions.fetchQuote();
  }

  render(){
    let {quote,author,title} = (this.props || {}).quote;
    let copied = this.props.copyquote;

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
            <Button basic size='big' color='grey' onClick={this.refreshQuote} title="Refresh quote">
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
          <StatusMessage visible={copied}/>
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
  const copyquote = quote.copyquote || false;
  
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
