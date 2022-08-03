import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, Box, ListItemAvatar, ListItemButton, ListSubheader, Typography } from '@mui/material';
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';
import { getResentPost, reset, getAllCategory ,getFilterCategory,getAllPost} from "../features/posts/postSlice"
import { Link } from "react-router-dom"

const Feed = () => {
  const imgUrl = "https://cat-blog-api.herokuapp.com/images/"

  const dispatch = useDispatch()

  const { resentPost, category } = useSelector((state) => state.post)

  useEffect(() => {
    dispatch(getResentPost())
    dispatch(getAllCategory())
    dispatch(reset())
  }, [dispatch])

  const handler = (name) => {
    dispatch(getFilterCategory(name))
    dispatch(reset())
  }

  const handler2 = () => {
    dispatch(getAllPost())
    dispatch(reset())
  }
  return (
    <Box>

      <Box sx={{ display: { xs: "none", sm: "block", md: "block" } }}>

        <Typography textAlign="center" fontWeight="600"> Resend posts</Typography>

        <List sx={{ maxWidth: 360, bgcolor: 'background.paper' }}>
          {resentPost.map((x) => {
            return (
                <Link  key={x._id} style={{textDecoration : "none"}} to={`/${x._id}`}>
              <ListItem key={x._id}>
                  <ListItemButton>
                    <ListItemAvatar >
                      <Avatar

                        alt={x.title}
                        src={`${imgUrl}postImg/${x.image}`}
                      />
                    </ListItemAvatar>
                    <ListItemText sx={{color : "black"}} primary={x.title} secondary={new Date(x.createdAt).toISOString().split('T')[0]} />
                  </ListItemButton>
              </ListItem>
                </Link>
            )
          })}
        </List>

      </Box>

      <Box sx={{ display: { xs: "block", sm: "none", md: "none" } }}>
        <Typography marginBottom={2} textAlign="center" fontWeight="600"> Resend posts</Typography>

        <List >
          {resentPost.map((x) => {
            return (
              <Link  key={x._id} style={{textDecoration : "none"}}  to={`/${x._id}`}>
              <ListItem key={x._id}>
                  <ListItemButton>
                   <Avatar sx={{ maxWidth: 40, maxHeight: 40 }} alt={x.title} src={`${imgUrl}postImg/${x.image}`} />
                  </ListItemButton>
              </ListItem>
              </Link>
            )
          })}
        </List>


      </Box>

      <Box marginTop={2} >
        <Typography textAlign="center" fontWeight="600"> Category</Typography>

        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 400,
            '& ul': { padding: 0 },
          }}
          subheader={<li />}
        >
            <ListSubheader sx={{cursor :"pointer"}} onClick={handler2}>All Posts</ListSubheader>
          {category.map((item) => (

             <Link  key={item._id} style={{textDecoration : "none"}}  to={`/?category=${item.name}`}>
            <ListItem key={item._id}>
              <ListItemText onClick={() =>handler(item.name)} sx={{textDecoration : "none"}}>
                <Typography sx={{color : "black",textDecoration : "none"}} variant='body1'>{item.name}</Typography>
                <hr style={{textDecoration : "none"}} />
              </ListItemText>
            </ListItem>
             </Link>
          ))}
        </List>
      </Box>

    </Box>
  );
}

export default Feed;