import React, { Component} from "react";
import * as quoteActions from '../../actions/quoteActions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import QuoteList from './QuoteList';
import { Link } from 'react-router-dom'
import { Container,
           Segment,
           Sidebar,
              Menu,
            Button,
              Icon } from 'semantic-ui-react';

import {
  Header,
} from 'semantic-ui-react'

class QuoteListView extends Component{
  constructor () {
    super();

    // bindings
    this.getQuotes = this.getQuotes.bind(this);
  }

  // get quotes when List component loads (which is a page)
  componentDidMount() {
    this.props.quoteActions.fetchQuotes();
  }

  getQuotes() {
    this.props.quoteActions.fetchQuotes();
  }

  render(){
    return(
      <Container>
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
            <Menu.Item as={Link} to='/'>
              <Button basic size='big' color='grey' title="Home">
                <Icon name='home' size='large' fitted />
              </Button>
            </Menu.Item>
          </Sidebar>
          <Segment basic>
            <div className="container quotelist">
              <QuoteList quotes={this.props.quotes} />
            </div>
          </Segment>
          </Sidebar.Pushable>
        </div>
      </div>
      </Container>
    );
  }
}

QuoteListView.propTypes = {
  quoteActions: PropTypes.object,
  quotes: PropTypes.array
};

function mapStateToProps(state) {
  let quotes = state.quotes || [];

  return {
    quotes
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
)(QuoteListView);
