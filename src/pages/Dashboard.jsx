import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from "react-redux"
import { Button, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { getFilterCreatedBy, deletePost, getAllPost, reset } from "../features/posts/postSlice"
import { useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom';
import {logout} from "../features/auth/authSlice"



const Dashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userimgUrl = "https://cat-blog-api.herokuapp.com/images/profileImg/"
  const postimgUrl = "https://cat-blog-api.herokuapp.com/images/postImg/"

  const { user } = useSelector((state) => state.auth)
  const { userPosts } = useSelector((state) => state.post)

  useEffect(() => {
    dispatch(getFilterCreatedBy(user.user._id))
    dispatch(reset())
  }, [dispatch, user])


  const handleDelete = (id) => {
    dispatch(deletePost(id))
    dispatch(getFilterCreatedBy(user.user._id))
    dispatch(reset())
  }

  const onLogout = () =>{
    dispatch(logout())
    dispatch(reset())
    navigate("/")
    dispatch(getAllPost())
  }


  
    return (
      <>
        <CssBaseline />
        <Container maxWidth="lg">


          <Typography mb={1} textAlign={"center"} variant='h3' fontSize={"2rem"} fontWeight={400} mt={2}>Welcome to Dashboard {user.user.name}</Typography>

          <Button type="submit" onClick={onLogout} variant="outlined" sx={{ mt: 3, mb: 2 }} > Logout </Button>

          <Box mt={4} mb={4} display="flex" alignItems={"center"} justifyContent="center">

            <Avatar
              alt="Remy Sharp"
              src={`${userimgUrl}${user.user.profilePic}`}
              sx={{ width: 200, height: 200 }}
            />
          </Box>
          <Box>
            <Typography mb={2} textAlign={"center"} variant='h5'>Your Posts</Typography>

            {
              userPosts.length === 0 ? (<Box sx={{ display: "flex", height: "500px", alignItems: 'center', justifyContent: "center" }}>
                <Typography variant='h5' fontWeight={600} color="GrayText" textAlign={"center"} mt={1} mb={1}>Opps.. no posts is there</Typography>
              </Box>) : (<Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {userPosts.map((post, index) => (
                    <Grid item xs={4} sm={4} md={4} key={index}>
                      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem component={Paper}>
                          <ListItemAvatar>
                            <Link to={`/${post._id}`}>
                              <Avatar
                                alt={post.title}
                                src={`${postimgUrl}${post.image}`}
                              >
                                <ImageIcon />
                              </Avatar>
                            </Link>
                          </ListItemAvatar>
                          <ListItemText primary={post.title} secondary={new Date(post.createdAt).toISOString().split('T')[0]} />
                          <Stack marginLeft="auto" direction="row" spacing={2}>
                            <Link to={`/editpost/${post._id}`}>
                              <Button variant="outlined" size="small" color="success" startIcon={<EditIcon fontSize="small" />} />
                            </Link>
                            <Button onClick={() => handleDelete(post._id)} variant="outlined" size="small" color="error" startIcon={<DeleteIcon fontSize="small" />} />
                          </Stack>

                        </ListItem>
                      </List>
                    </Grid>
                  ))}
                </Grid>
              </Box>)
            }


          </Box>
        </Container>
      </>
    );

 
}

export default Dashboard