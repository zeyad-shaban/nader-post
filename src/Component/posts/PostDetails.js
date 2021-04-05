import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../../data/posts';

function PostDetails(props) {
  let { id } = useParams();

  const post = posts.filter(post => post.id === Number(id))[0];

  console.log(post);
  return (
    <article className="container post-details">
      <div className="post-details-title">
        <h1>{post.title}</h1>
        <button className="btn btn-danger"> Delete </button>
      </div>
      <img
        src={post.image}
        alt="Failed"
        className="post-details-img"
      />
      <p className="post-details-body">
        {post.body}
      </p>
    </article>
  );
}

export default PostDetails;
