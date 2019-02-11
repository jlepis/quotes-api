import React, { Component } from 'react';
import { List } from 'semantic-ui-react'
import QuoteItem from './QuoteItem';

export default class QuoteList extends Component {
  constructor(props) {
    super(props);

    this.getQuotes = this.getQuotes.bind(this);
  }
  getQuotes() {
    if(this.props.quotes && this.props.quotes.length > 0 ) {
      return this.props.quotes.map((quote) => {
        return <QuoteItem key={quote.id} quote={quote} />
      });
    } else {
      return [];
    }
  }

  render() {

      return (
      <div>
        <List>{ this.getQuotes() }</List>
      </div>
    )
  }
}
