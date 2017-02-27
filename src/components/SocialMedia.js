import React, { Component } from 'react'
import {getPosts} from '../ajax/ajax'

class SocialMedia extends Component {
  constructor() {
    super()
    this.state = {
      post: []
    }
  }
  componentDidMount() {
    getPosts(89).then( post => {
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
      <section className="row">
        <div className="col container">
          <h2>{this.state.post.title}</h2>
          <div dangerouslySetInnerHTML={{__html: this.state.post.content}}></div>
        </div>
      </section>
    );
  }
}

export default SocialMedia;
