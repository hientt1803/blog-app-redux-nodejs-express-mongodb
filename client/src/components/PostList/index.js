import { Grid } from "@mui/material";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../redux/actions";
import { postsState$ } from "../../redux/selector";
import Post from "./Post";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postsState$);

  useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
    console.log(dispatch(actions.getPosts.getPostsRequest()));
  }, [dispatch]);

  useEffect(() => {
    console.log("[postList - posts]", posts);
  }, [posts]);

  return (
    <Grid container spacing={2} alignItems="stretch">
      {posts?.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PostList;
