import React, { Component} from "react";
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

class Footer extends Component {
  render() {
    return(
      <div>
        <Menu fixed='bottom' inverted>
          <Container>
            <Menu.Menu position="right">
              <Menu.Item as='a' >
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item as='a' >
                <Link to="/about">About</Link>
              </Menu.Item>
              <Menu.Item as='a' >
                <a href="http://jcl-resume.com/" target="_blank">Resumé</a>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    )
  }
}

export default Footer;
