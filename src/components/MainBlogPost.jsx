import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BlogPost from './BlogPost';
import { getAllPost, reset } from "../features/posts/postSlice"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';
import { Typography } from '@mui/material';

export default function MainBlogPost() {
  const dispatch = useDispatch()

  const { posts } = useSelector((state) => state.post)

  useEffect(() => {
    dispatch(getAllPost())
    dispatch(reset())

  }, [dispatch])

  // console.log(posts);
  return (
    <div>

      {posts === undefined ? (<Box sx={{ display: "flex", height: "500px", alignItems: 'center', justifyContent: "center" }}>
        <Typography variant='h5' fontWeight={600} color="GrayText" textAlign={"center"} mt={1} mb={1}>Opps.. no posts is there</Typography>
      </Box>) : 
      (<Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
           {posts.map((post,index) => (
              <Grid item xs={4} sm={4} md={4} key={index}>
              <BlogPost post={post} />
            </Grid>
           ))} 
          </Grid>
        </Box>
      )}
    </div>
  );
}
