import React, { Component } from 'react';
import {connect } from 'react-redux'


 class CommentBox extends Component {

  constructor( props ){
    super(props);
    this.state={
      comment:''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTextArea( event ){
    console.log(this)
    this.setState({comment:event.target.value})
  }

  handleSubmit( event ){
    event.preventDefault();
    this.setState({comment:''})
  }

  render() {
    return (
      <div>
        <h1>Add Comment</h1>
          <form onSubmit={this.handleSubmit}>
            <textarea onChange={this.handleTextArea.bind(this)} value={this.state.comment}/><br></br>
            <button type='submit' >submit</button>
          </form>
      </div>
    )
  }
}


export default connect(null,null)(CommentBox)