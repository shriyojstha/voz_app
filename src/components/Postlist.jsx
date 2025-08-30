import Post from "./Post.jsx";
import Welcome from "./WelcomePage.jsx";
// import Loading from "./LoadingState.jsx";
import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postAction } from "../DataFiles/DataHandling.js";
import { useEffect } from "react";

const Postlist = () => {
  const state1 = useLoaderData();
  const dispatch = useDispatch();

  const state = useSelector((store) => store.POSTS);

  useEffect(() => {
    if (state.length > 0) return;
    dispatch(postAction.addPosts(state1));
  }, []);

  // const final_state = state;
  return (
    <>
      {state.length === 0 && <Welcome />}
      {state
        .filter((item) => item && item.id)
        .map((item) => (
          <Post key={item.id} item={item} />
        ))}
    </>
  );
};

export const PostLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default Postlist;
