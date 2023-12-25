import React from "react";
import { Typography } from "@mui/material";
// import useStyles from "./style";

const Header = () => {
  // const classes = useStyles();
  return (
    <Typography
      variant="h4"
      align="center"
      mb={10}
      style={{ background: "#0f1924", color: "#fff", padding: "5px 0" }}
    >
      BLOG APP REDUX AND NODEJS MONGODB
    </Typography>
  );
};

export default Header;
