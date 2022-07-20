import * as React from 'react';
import AvatarGroup from '@mui/material/AvatarGroup';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, Box, ListItemAvatar, ListItemButton, Typography } from '@mui/material';

const array = ["Music", "Games", "Education", "Car", "Bike", "Movies", "Songs"]


const Feed = () => {
  return (
    <Box>

      <Box  sx={{display : { xs : "none",sm : "block", md : "block"}}}>

        <Typography textAlign="center" fontWeight="600"> Resend posts</Typography>

        <List sx={{ maxWidth: 360, bgcolor: 'background.paper' }}>
          {[1, 2, 3, 4, 5].map((x) => {
            return (
          <ListItem >
                <ListItemButton>
                  <ListItemAvatar >
                    <Avatar
                      alt={`Avatar`}
                      src={`/photo.jpg`}
                    />
                  </ListItemAvatar>
                  <ListItemText   primary="Photos" secondary="Jan 9, 2014" />
                </ListItemButton>
            </ListItem>
              )
            })}
            </List>

      </Box>

      <Box  sx={{display : { xs : "block",sm : "none", md : "none"}}}>
      <Typography marginBottom={2} textAlign="center" fontWeight="600"> Resend posts</Typography>
  
      <AvatarGroup total={4} >
      {[1,2,3,4,5].map(( x) => {
        return(
          <Avatar sx={{maxWidth : 25,maxHeight : 25}} alt="Remy Sharp" src="/photo.jpg" />
        )
      })}
    </AvatarGroup>
  

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

          {array.map((item) => (
            <ListItem key={item}>
              <ListItemText>
                <Typography variant='body1'>{item}</Typography>
                <hr></hr>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>

    </Box>
  );
}

export default Feed;