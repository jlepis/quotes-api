import React, { Component} from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'

class About extends Component{
  render(){
    return(
      <div>

     <Container text style={{ marginTop: '3em' }}>
       <Header as='h1'>Random Quote Generator</Header>
       <p style={{ fontSize: '1.25em' }}>Funny glib quotes from pop culture. Check. A full stack solution built with the latest buzzwords. Check. Completely over-engineered fun. Check. </p>

       <Segment style={{ padding: '2em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '1.35em' }}>
              API
            </Header>
            <p>
              Through a <a href="https://rubyonrails.org/" target="_blank">Rails5</a> API only app, we serve up the sharpest quotes around. With <a href="https://activeadmin.info/" target="_blank">Active Admin</a> bolted on, we're able to swiftly add quotes to satisfy even the most demanding visitor.
            </p>
            <Header as='h3' style={{ fontSize: '1.35em' }}>
              Front End
            </Header>
            <p>
              Yes thats right, you thought this was the stuff of magic, but it's just <a href="https://reactjs.org/" target="_blank">React</a> with a bit of <a href="https://redux.js.org/">Redux</a> sprinkled in for fun and to help manage application state.
              You can copy a quote to your clipboard or share it with a friend. What more could you ask for?
            </p>
            <p>We're using <a href="https://react.semantic-ui.com/" target="_blank">Semantic UI React</a> and we're mobile friendly. It's the bees knees.</p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='/images/white-image.png' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>


     </Container>


   </div>
    )
  }
}

export default About;
