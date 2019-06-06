import React, { Component } from 'react';
import {connect } from 'react-redux';
import { saveComment } from './actions/index'


 class CommentBox extends Component {

  constructor( props ){
    super(props);
    this.state={
      comment:''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTextArea( event ){
    this.setState({comment:event.target.value})
  }

  handleSubmit( event ){
    event.preventDefault();
    this.setState({comment:''})
    this.props.saveComment(this.state.comment);
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

const mapDispatchToProps = dispatch=>{
  return {
    saveComment:( comment )=>dispatch(saveComment(comment))
  }
}
export default connect(null,mapDispatchToProps)(CommentBox)