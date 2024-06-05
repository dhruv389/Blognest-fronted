import { Link } from "react-router-dom";
import React, { useEffect,useState } from "react";
import PostAuthor from "./PostAuthor";


import axios from "axios"



const PostItem = ({
  postID,
  category,
  title,
  description,
  authorID,
  thumbnill,
  createdAt,
}) => {
  



  const postTitle = title.length > 30 ? title.substr(0, 30) + "..." : title;
 
  const shortDescription =  description.length > 145 ? description.substr(0, 145) + "..." : description;
  return (
    <Link to={`/posts/${postID}`}>
    <article className="post">
      <div className="post_thumbnil">
        <img 
          src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${thumbnill}`}
          alt={"Thumbnail"}
        />
      </div>
      <div className="post_content">
        <Link to={`/posts/${postID}`}>
          <h3>{postTitle}</h3>
        </Link>
       
        {/* <p dangerouslySetInnerHTML={{__html : shortDescription}}/> */}
        <div className="post_footer">
          <PostAuthor authorID={authorID} createdAt={createdAt} />
          <Link to={`/posts/categories/${category}`} className="btn category">
            {category}
          </Link>
        </div>
      </div>
    </article>
    </Link>
  );
};

export default PostItem;
