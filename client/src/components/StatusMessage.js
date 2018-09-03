import React, { Component} from "react";
import { Message } from 'semantic-ui-react';

class StatusMessage extends Component {
   constructor () {
     super();
     // this.state = {
     //   copied: false
     // };
     this.handleDismiss = this.handleDismiss.bind(this);
   }

   handleDismiss = () => {
     console.log("dismiss!!!");
     this.setState({ copied: false })
     console.log(this.props);
   }

   render() {
     let visible = (this.props || {}).copied || false;
     return visible
     ? <Message
         onDismiss={this.handleDismiss}
         header='Cool!'
         content='The quote has been copied to your clipboard.'
       />
     : ""
   }
}

export default StatusMessage;
// export default hot(module)(App);
