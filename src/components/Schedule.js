import React, { Component } from 'react'
import {getPosts} from '../ajax/ajax'

class Schedule extends Component {
  constructor() {
    super()
    this.state = {
      post: []
    }
  }
  componentDidMount() {
    getPosts(92).then( post => {
      this.setState({
        post: {
          id: post.id,
          title: post.title.rendered,
          content: post.content.rendered
        }
      })
    })
  }
  render() {
    return (
      <section className="schedule">
        <div className="col container">
          <h2><i className="ion-ios-arrow-right"></i> {this.state.post.title}</h2>
        </div>
        <div className="row container container--wide" dangerouslySetInnerHTML={{__html: this.state.post.content}}></div>
      </section>
    );
  }
}

export default Schedule;
