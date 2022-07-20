import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box'
import { Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const SinglePost = () => {

  const post = {
    title: 'Title of a longer featured blog post',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: '/photo.jpg',
    imageText: 'main image description',
  };
  return (
    <Box>
      <Box sx={{
        width: "auto",
        height: 350,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${post.image})`,
        mb: 4
      }} />

      <CssBaseline />
      <Container fixed>
        <Box>

          <Box display="flex" >
            <Box >
              <Typography sx={{marginLeft : {md : 40},fontSize : {md : 35}}} variant='h5' fontStyle={'revert-layer'} textAlign="center" fontWeight="600">This is the Blog Title</Typography>
            </Box>

            <Stack marginLeft="auto" direction="row" spacing={2} sx={{maxWidth : {xs : 150,sm : 200,md : 225}}}>
              <Button variant="outlined" color="success" endIcon={<EditIcon fontSize="small" />}>
              <Typography sx={{fontSize: {xs : 10,sm : 17,md : 19}}}>Edit</Typography> 
              </Button>
              <Button variant="outlined" color="error" startIcon={<DeleteIcon fontSize="small"/>}>
              <Typography sx={{fontSize: {xs : 10,sm : 17,md : 19}}}>Delete</Typography>
              </Button>
            </Stack>

          </Box>

          <Box display="flex" alignItems={"center"} marginTop={1}>
            <Typography sx={{fontSize : {xs : "1em",sm : "1.3em" ,md : "1.6em"}}}  fontWeight={600} color={"rgb(199, 202, 33)"}>Author : Suresh</Typography>
            <Typography sx={{fontSize : {xs : "1em",sm : "1.3em" ,md : "1.6em"}}}  fontWeight={600} color={"rgb(199, 202, 33)"} marginLeft="auto">Created At : 10/05/2003</Typography>
          </Box>

          <Box marginTop={1} marginBottom={2}>
            <Typography fontWeight={600} fontFamily={"sans-serif"}>
              <span style={{fontSize : "1.5em"}}>Lorem</span> ipsum dolor sit amet consectetur adipisicing elit.
               Impedit hic ut repellat quidem sit. Corrupti commodi vel 
               repellendus esse quasi labore atque doloremque ab 
               laudantium veniam quis quo molestiae maxime minima 
               explicabo consectetur suscipit rerum iste, eius
               sint praesentium dignissimos amet
               consequuntur! Perspiciatis eligendi atque voluptatibus! 
               Ea praesentium minima blanditiis, maiores repellendus 
               delectus reprehenderit magnam ab obcaecati, minus 
               suscipit, esse quia eaque iure quam illum. Non magnam 
               nulla mollitia. Ea at veritatis, tempora quod est minima
                dignissimos ducimus similique, eveniet blanditiis autem
                 eos tenetur ut earum recusandae! Ducimus dolorum veritatis aperiam obcaecati aliquam, neque consequatur, accusamus blanditiis officiis consequuntur at?
            </Typography>
          </Box>

        </Box>
      </Container>

    </Box>

  )
}

export default SinglePost