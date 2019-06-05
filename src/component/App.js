import React from 'react'
import CommentBox from './CommentBox';
import CommentList from './CommentList';

export default function App() {
  return (
    <div>
     <CommentBox />
     <CommentList />
    </div>
  )
}


// Note: for the absolute import we can use .env file to specify absolute path