import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box'
import { Avatar, Chip, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getSinglePost, reset } from "../features/posts/postSlice"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { red } from '@mui/material/colors';



const SinglePost = () => {
  const imgUrl = "https://cat-blog-api.herokuapp.com/images/"
  
  const dispatch = useDispatch()
  const path = useParams()
  
  const { post,isLoadind} = useSelector((state) => state.post)
  
 
// console.log(post)

  useEffect(() => {
    dispatch(getSinglePost(path.id))
    dispatch(reset())
  }, [dispatch, path])



  if (isLoadind) {
    return (
      <Box sx={{ display: "flex", height: "500px", alignItems: 'center', justifyContent: "center" }}>
        <CircularProgress sx={{ fontSize: 50 }} />
      </Box>
    );
  }
  return (

    <Box>

      <Box sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        width: "auto",
        height: { xs: 300, sm: 350, md: 400 },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${imgUrl}postImg/${post.image})`,
        mb: 4
      }} />

      <CssBaseline />
      <Container fixed>
        <Box>

          <Box display="flex" >
            <Box >
              <Typography sx={{ marginLeft: { md: 40 }, fontSize: { md: 35 } }} variant='h5' fontStyle={'revert-layer'} textAlign="center" fontWeight="600">{post.title}</Typography>
            </Box>
            <Box marginLeft="auto">
           <Chip label={post?.categories? post.categories[0] :  "category"} variant="outlined" />
            </Box>
          </Box>
          

          <Box display="flex" alignItems={"center"} justifyContent="center" marginTop={1}>
           
          
            <ListItemAvatar >
              <Avatar
                sx={{ bgcolor: red[500] }}
                alt={post.authorName}
                src={`${imgUrl}profileImg/${post.authorImage}`}
                >
              </Avatar>
            </ListItemAvatar>
            <ListItemText sx={{ color: "black" }} primary={post.authorName} />


            <Typography sx={{ fontSize: { xs: "1em", sm: "1.1em", md: "1.2em" } }} fontWeight={600} color={"rgb(199, 202, 33)"} marginLeft="auto">Created At : {post.createdAt?.split('T')[0]}</Typography>
          </Box>

          <Box marginTop={2} marginBottom={2}>
            <Typography fontWeight={600} fontFamily={"sans-serif"}>
              {post.description}
            </Typography>
          </Box>

        </Box>
      </Container>

    </Box>

  )
}


export default SinglePost