import React, { Component } from 'react'
import {getPosts} from '../ajax/ajax'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      post: []
    }
  }
  componentDidMount() {
    getPosts(85).then( post => {
      this.setState({
        post: {
          id: post.id,
          title: post.title.rendered,
          content: post.content.rendered
        }
      })
    })
  }
  scrollTo(){
    document.getElementById("rsvp").scrollIntoView();
  }
  render() {
    return (
      <header className="container">
        <h1>Skate Chicago 2017</h1><br />
        <h2>June 2 Friday to June 4 Sunday</h2>
        <div className="cta bounce" onClick={this.scrollTo}><i className="ion-ios-heart"></i> RSVP Now</div>
        <div dangerouslySetInnerHTML={{__html: this.state.post.content}}></div>
      </header>
    );
  }
}

export default Header;
