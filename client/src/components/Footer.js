import React, { Component} from "react";
import { Container, Menu } from 'semantic-ui-react';

class Footer extends Component {
  render() {
    return(
      <div>
        <Menu fixed='bottom' inverted>
          <Container>
            <Menu.Menu position="right">
              <Menu.Item as='a'>Home</Menu.Item>
              <Menu.Item as='a'>About</Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    )
  }
}

export default Footer;
