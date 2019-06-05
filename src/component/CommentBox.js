import React, { Component } from 'react'


export default class CommentBox extends Component {

  constructor( props ){
    super(props);
    this.state={
      comment:''
    }
  }

  handleTextArea( event ){
    console.log(this)
    this.setState({comment:event.target.value})
  }
  render() {
    return (
      <div>
        <h1>Add Comment</h1>
          <form >
            <textarea onChange={this.handleTextArea.bind(this)} value={this.state.comment}/><br></br>
            <button type='submit' style={{backgroundColor:"blue",padding:10,color:'white'}} value='submit'>submit</button>
          </form>
      </div>
    )
  }
}
