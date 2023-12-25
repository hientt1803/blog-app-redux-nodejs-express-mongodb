import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";

import moment from "moment";

const Post = ({ post }) => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>A</Avatar>}
        title={post.author}
        subheader={moment(post.updateAt).format("HH:MM MMM Đ, YYYY")}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardMedia image={post.attachment} title="title" />
      <CardContent>
        <Typography variant="h5" color="textPrimary">
          {post.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <FavoriteIcon />
          <Typography color="textSecondary" component="span">
            {post.likeCount}
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
