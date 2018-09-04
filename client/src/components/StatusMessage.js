import React, { Component} from "react";
import {connect} from 'react-redux';
import { Message } from 'semantic-ui-react';
// Transition

class StatusMessage extends Component {
   constructor () {
     super();
     // this.state = {
     //   copied: false
     // };
     this.handleDismiss = this.handleDismiss.bind(this);
   }

   componentDidMount() {
    console.log("StatusMessage did mount");
   }

   componentWillMount() {
    console.log("StatusMessage will mount");
   }

   handleDismiss = () => {
     this.setState({ copied: false })

     // setTimeout(() => {
     //   this.setState({ visible: false })
     // }, 2000)
   }
   componentWillReceiveProps(props) {
     console.log("props received");
     console.log(props);
   }

   render() {
     let visible = this.props.copyquote;
     console.log("StatusMessage:hello?");
     console.log(this.state);
     console.log(visible);
     return ( <Message
           header='Cool!!!'
           content='The quote has been copied to your clipboard.'
         />);
     // return visible
     // ? <Transition visible={visible} animation='scale' duration={200}>
     //    <Message
     //       onDismiss={this.handleDismiss}
     //       header='Cool!!!'
     //       content='The quote has been copied to your clipboard.'
     //     />
     //  </Transition>
     // : <Transition visible={visible} animation='scale' duration={500}>
     //    <Message
     //       onDismiss={this.handleDismiss}
     //       header='Cool!!!'
     //       content='The quote has been copied to your clipboard.'
     //     />
     //  </Transition>
   }
}

function mapStateToProps(state = {}, ownProps) {
  const quote = state.quote || {};
  const copyquote = (quote.copyquote || {}).copyquote || false;

  return {
    quote,
    copyquote
  };
}

export default connect(mapStateToProps)(StatusMessage);
