import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as quoteActions from '../../actions/quoteActions';
import PropTypes from 'prop-types';
import React, { Component} from "react";
import { Link } from 'react-router-dom'
// import {hot} from "react-hot-loader";
import { Container,
            Button,
            Loader,
            Dimmer,
              Icon,
           Sidebar,
              Menu,
             Segment } from 'semantic-ui-react';
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
        <div className="ui container">
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            icon='labeled'
            visible
            width='thin'
            direction="top"
          >
            <Menu.Item as='a'>
              <Button basic size='big' color='grey' onClick={this.refreshQuote} title="Refresh quote">
                <Icon name='refresh' size='large' fitted />
              </Button>
            </Menu.Item>
            <Menu.Item as='a'>
              <CopyToClipboard text={quote}
                onCopy={() => this.CopyToClipboard()}>
                <Button basic size='big' color='grey' title="Copy quote">
                  <Icon name='copy' size='large' fitted />
                </Button>
              </CopyToClipboard>
            </Menu.Item>
            <Menu.Item as={Link} to='/list'>
              <Button basic size='big' color='grey' title="List Quotes">
                <Icon name='list' size='large' fitted />
              </Button>
            </Menu.Item>
          </Sidebar>

            <Segment basic>
              <div className="container">
                <blockquote>{quote}</blockquote>
                 <div className="source">{author}</div>
                 <div className="source title">{title}</div>
              </div>
            </Segment>
            </Sidebar.Pushable>
          <StatusMessage visible={copied}/>
        </div>
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
  const copyquote = quote.copyquote || "";

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
