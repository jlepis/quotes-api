import React, { Component } from 'react';
import { List } from 'semantic-ui-react'

class QuoteItem extends Component {

  render() {
    return (
       <List.Item className="quoteItem">
        <List.Description>
          <blockquote>{this.props.quote.quote}</blockquote>
        </List.Description>
        <div className="source">{this.props.quote.author}</div>
        <div className="source title">{this.props.quote.title}</div>
       </List.Item>
    )
  }
}
export default QuoteItem;
