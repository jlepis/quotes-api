import React, { Component} from "react";
import {
  Container,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'

import './about.css';

class About extends Component{
  render(){
    return(
      <div className="mainContainer">

     <Container text>
       <Header as='h1'>Random Quote Generator</Header>
       <p className="leadIn">Funny glib quotes from pop culture. Check. A full stack solution built with the latest buzzwords. Check. Completely over-engineered fun. Check. </p>

      <Segment className="segment" vertical>
      <Grid container stackable>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3'>
              API
            </Header>
            <p>
              Through a <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer">Rails5</a> API only app, we serve up the sharpest quotes around. With <a href="https://activeadmin.info/" target="_blank" rel="noopener noreferrer">Active Admin</a> bolted on, we're able to swiftly add quotes to satisfy even the most demanding visitor.
            </p>
            <p>Since we don't like bugs, we're using <a href="http://rspec.info/">RSpec</a>. And since we don't like code smell, we're using <a href="https://github.com/rubocop-hq/rubocop" target="_blank" rel="noopener noreferrer">rubocop</a>, <a href="https://github.com/presidentbeef/brakeman" target="_blank" rel="noopener noreferrer">brakeman</a> and <a href="https://github.com/colszowka/simplecov" target="_blank" rel="noopener noreferrer">simplecov</a>.</p>
            <Header as='h3'>
              Front End
            </Header>
            <p>
              Yes thats right, you thought this was the stuff of magic, but it's just <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> with a bit of <a href="https://redux.js.org/">Redux</a> sprinkled in for fun and to help manage application state.
              You can copy a quote to your clipboard or share it with a friend. What more could you ask for?
            </p>
            <p>We're using <a href="https://react.semantic-ui.com/" target="_blank" rel="noopener noreferrer">Semantic UI React</a> and we're mobile friendly. It's the bees knees.</p>
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
