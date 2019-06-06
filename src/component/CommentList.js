import React, { Component } from 'react';
import { connect } from 'react-redux';

 class CommentList extends Component {

  renderComments =( comments )=>{
    const list = comments.map((x,i)=><li key={i}>{x}</li>)
    return list;
  }
    
    
  render() {
    return (
      <div>
          {/* <h1>Comment list component</h1> */}
          
          <ul>
            { this.renderComments( this.props.comments )}
          </ul>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    comments:state.comments
  }
}

export default connect( mapStateToProps , null)( CommentList)
