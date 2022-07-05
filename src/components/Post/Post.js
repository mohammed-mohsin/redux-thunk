import React from "react";
import './Post.css'
const Post = ({ post }) => {
  const { id, title, body } = post;

  return (
    <>
      {
        <section className="post">
          <div className="container">
            <div className="box text">
            
              <div className="box-content">
                <div className="content">
                  <h3>{title}</h3>
                  <h5>{body}</h5>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      }
    </>
  );
};

export default Post;
