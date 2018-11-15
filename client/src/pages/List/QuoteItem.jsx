import React, { Component } from 'react';
import { List } from 'semantic-ui-react'

class QuoteItem extends Component {

  render() {
    return (
       <List.Item>
        <List.Header as='a'>{this.props.quote.author}</List.Header>
        <List.Description>
          {this.props.quote.quote}
        </List.Description>
       </List.Item>
    )
  }
}
export default QuoteItem;
