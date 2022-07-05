import { useDispatch, useSelector } from "react-redux";
// import postAction from "./redux/actions/postAction"
import { useEffect, useState } from "react";
import "./App.css";
import Post from "./components/Post/Post";
import { postAction } from "./redux/actions/postAction";

function App() {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.postList);
  const { loading, posts, error } = postList;

  useEffect(() => {
    dispatch(postAction());
  }, [dispatch]);

  return (
    <div className="App">
      <h1 className="title"
        
      >
        Social Buddy
      </h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className="posts">
          {posts.map((post) => (
            <Post post={post} key={post.id} />
            // <h1>{post.title}</h1>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
