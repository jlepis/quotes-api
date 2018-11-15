import React, { Component} from "react";
import * as quoteActions from '../../actions/quoteActions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import QuoteList from './QuoteList';

import {
  Container,
  Header,
  Segment
} from 'semantic-ui-react'

// const QuoteItem = ({quote}) => <li>{quote}</li>

class List extends Component{
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
    const quoteList = this.props.quotes;
    const showResults = "";
    if(quoteList && quoteList.length > 0 ){
      console.log(quoteList);
      quoteList.map(function(item){
        return <li>{item.quote}</li>;
      });
    }

    return(
      <div>
        <Header as='h1'>Quotes</Header>
        <QuoteList quotes={this.props.quotes} />
      </div>
    );
  }
}

List.propTypes = {
  quoteActions: PropTypes.object,
  quotes: PropTypes.array
};

function mapStateToProps(state) {
  // TODO - fix reducer so this reads state.quotes
  const quotes = state.quote || [];
  // console.log(quotes);
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
)(List);
