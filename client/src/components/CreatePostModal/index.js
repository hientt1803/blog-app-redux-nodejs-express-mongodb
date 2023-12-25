import { Modal } from "@mui/material";
import React from "react";

import { useSelector } from "react-redux";
import { modalState$ } from "../../redux/selector";

const CreatePostModal = () => {
  const body = <p>This is body modal</p>;

  const { isShow } = useSelector(modalState$);

  return (
    <Modal
      open={isShow}
      onClose={false}
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
        width: 400,
        backgroundColor: "#fff",
        // boxShadow: theme.shadows[5],
        padding: "5px",
      }}
    >
      {body}
    </Modal>
  );
};

export default CreatePostModal;
