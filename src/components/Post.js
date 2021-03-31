import React from 'react';
import './Post.css'

export default ({ post }) => {
  return (
    <div className="card bg-second">
      <div className="card-body ">
      <h3 className="card-title">{post.title}</h3>

      </div>
    </div>
  )
}