import React, { useCallback } from "react";
import { Container, Fab } from "@mui/material";

import { useDispatch } from "react-redux";

// Component import
import Header from "../components/Header/index";
import PostList from "../components/PostList/index";

import AddIcon from "@mui/icons-material/Add";
import { showModal } from "../redux/actions";
import CreatePostModal from "../components/CreatePostModal";

const HomePage = () => {
  const dispatch = useDispatch();

  const openCreatePostModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <Header />
      <PostList />
      <CreatePostModal />
      <Fab
        color="primary"
        style={{ position: "fixed", bottom: 20, right: 20 }}
        onClick={openCreatePostModal}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
};

export default HomePage;
