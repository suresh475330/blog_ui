import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { pink, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch ,useSelector} from "react-redux"
import {likePost, reset,  getAllPost} from  "../features/posts/postSlice"
import {useState} from "react"
import { RWebShare } from "react-web-share";

const BlogPost = ({post}) => {
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)

  const [like,setLike] = useState(post.likes)

  const imgUrl = "https://cat-blog-api.herokuapp.com/images/"

  const handleClick = (id) => {
    if(!user){
      return alert("Login to like post")
    }
    setLike((pre)=> pre + 1)
    dispatch(likePost(id))
    dispatch(getAllPost())
    dispatch(reset())
  }
  return (
    <Card sx={{ maxWidth: 375 }}>
      <CardHeader
        avatar={
          post.authorImage ? ( <Avatar sx={{ bgcolor: red[500] }} 
            src={`${imgUrl}profileImg/${post.authorImage}`}
            alt={post.authorName}>
            </Avatar> ) : (
               <Avatar  sx={{ bgcolor: red[500] }}>
                {post.authorName.charAt()}
               </Avatar>
            ) 
        }

        title={post.title}
        subheader={new Date(post.createdAt).toISOString().split('T')[0]}
      />
      <Link to={`/${post._id}`}>
      <CardMedia
        component="img"
        height="194"
        image={`${imgUrl}postImg/${post.image}`}
        alt="Post img"
        />
        </Link>
      <CardContent>
        <Typography  variant="body2" color="text.secondary">
         {post.description.slice(0, 30)}... Click To read more
        </Typography>
      </CardContent>
      <CardActions sx={{display : "flex" , alignItems : "center", justifyContent : "space-between"}}>

      <Badge  badgeContent={like} onClick={() => handleClick(post._id)} color="primary">
          <FavoriteIcon  sx={{ color: pink[500] }}/>
        </Badge>
        <RWebShare
        data={{
          text: post.title,
          url: `https://cat-mern-blog.netlify.app/${post._id}`,
          image : <img src={process.env.PUBLIC_URL+"images/logo.png"} />
        }}
        >
          <IconButton  aria-label="share">
          <ShareIcon  color="action"/>
        </IconButton>
        </RWebShare>
      </CardActions>
     
    </Card>
  );
}

export default BlogPost;
