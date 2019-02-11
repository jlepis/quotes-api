import React, { Component} from "react";
import * as quoteActions from '../../actions/quoteActions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import QuoteList from './QuoteList';

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
      <div>
      <Header as='h1'>Quotes</Header>
        <QuoteList quotes={this.props.quotes} />
      </div>
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
