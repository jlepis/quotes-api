import React, { Component} from "react";
import {connect} from 'react-redux';
import { Message, Transition } from 'semantic-ui-react';
import {bindActionCreators} from 'redux';
import * as quoteActions from '../actions/quoteActions';

class StatusMessage extends Component {
   constructor () {
     super();
     this.handleDismiss = this.handleDismiss.bind(this);
   }

   handleDismiss = () => {
     this.setState({ copied: false })
     // fire dispatch
     this.props.quoteActions.copyQuote(false);
   }

   render() {
     let visible = this.props.visible;

     return visible
     ? <Transition visible={visible} animation='scale' duration={200}>
        <Message
           onDismiss={this.handleDismiss}
           header='Cool!!!'
           content='The quote has been copied to your clipboard.'
         />
      </Transition>
     : <Transition visible={visible} animation='scale' duration={500}>
        <Message
           onDismiss={this.handleDismiss}
           header='Cool!!!'
           content='The quote has been copied to your clipboard.'
         />
      </Transition>
   }
}

function mapStateToProps(state = {}, ownProps) {
  const quote = state.quote || {};
  const visible = quote.copyquote || false;

  return {
    quote,
    visible
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
)(StatusMessage);
