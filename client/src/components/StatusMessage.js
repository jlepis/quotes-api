import React, { Component} from "react";
import { Message, Transition } from 'semantic-ui-react';

class StatusMessage extends Component {
   constructor () {
     super();
     this.state = {
       copied: false
     };
     this.handleDismiss = this.handleDismiss.bind(this);
   }

   handleDismiss = () => {
     this.setState({ copied: false })

     setTimeout(() => {
       this.setState({ visible: false })
     }, 2000)
   }

   render() {
     let visible = this.state.copied || false;

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

export default StatusMessage;
// export default hot(module)(App);
