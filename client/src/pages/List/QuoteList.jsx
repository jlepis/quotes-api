import React, { Component } from 'react';
import { List } from 'semantic-ui-react'
import QuoteItem from './QuoteItem';

export default class QuoteList extends Component {
  constructor(props) {
    super(props);

    this.getQuotes = this.getQuotes.bind(this);
  }
  getQuotes() {
    console.log(this.props.quotes);
    if(this.props.quotes && this.props.quotes.length > 0 ) {
      return this.props.quotes.map((quote) => {
        // let key = option[this.props.idField];
        // let props = Object.assign({key: `${this.props.idField}-${key}`}, {option});
        // return React.createElement(this.props.component, props);
        return <QuoteItem quote={quote} />
      });
    } else {
      return;
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
