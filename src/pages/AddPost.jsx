import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Alert, CircularProgress, FormControl, FormControlLabel, FormLabel, Radio, Typography } from '@mui/material';
import { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { addNewPost, reset, getAllPost } from "../features/posts/postSlice"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import RadioGroup from '@mui/material/RadioGroup';

const AddPost = () => {
    const category = ["programing", "gaming", "music", "educations", "others"]

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isError, isSucces, isLoadind,
        message } = useSelector((state) => state.post)



    const [Error, setError] = useState(false)
    const [file, setFile] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const logdata = {
            title: data.get("title"),
            description: data.get('description'),
            file: data.get('file'),
            categories : data.get("catgory")
        };

        if (!logdata.title || !logdata.description || !logdata.categories) {
            return setError(true)
        }

        // console.log(logdata);
        dispatch(addNewPost(logdata))
        dispatch(reset())

        if(isError) {
            alert(message)
          }
          if(isSucces){
            navigate("/")
            dispatch(getAllPost())
            dispatch(reset())
           }

    };

    const ErrorClass = () => {
        return (
            <>
                <Alert onClose={() => setError(false)} severity="error">This is an error alert — check it out Add Post form!</Alert>
            </>
        )
    }

    if (isLoadind) {
        return (
            <Box sx={{ display: "flex", height: "500px", alignItems: 'center', justifyContent: "center" }}>
                <CircularProgress sx={{ fontSize: 50 }} />
            </Box>
        );
    }
    return (
        <Box>
            {
                Error && ErrorClass()
            }
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography variant='h6' fontWeight={600} color="GrayText" textAlign={"center"} mt={1} mb={1}>Add a blog post to read every one</Typography>
                {file &&
                    <Box sx={{
                        width: "auto",
                        height: 350,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url(${URL.createObjectURL(file)})`,
                        mb: 4,
                        mt: 4,
                        borderRadius: 3
                    }} />
                }



                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                    <label htmlFor='file' style={{ display: "flex", alignItems: "center" }}>
                        <AddCircleOutlineIcon fontSize="large" /> <Typography>Add Image</Typography>
                    </label>
                    <input type="file" name="file"
                        id="file" style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.files[0])}
                    />


                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="title"
                        label="Enter Title"
                        name="title"
                        autoComplete="text"
                        autoFocus
                        sx={{ mt: 3, mb: 2 }}
                    />
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Category</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            {category.map((x) => {
                                return(
                                    <FormControlLabel  key={x} value={x} control={<Radio />} name="catgory" label={x} />
                                )
                            })}

                        </RadioGroup>
                    </FormControl>
                    <TextField
                        id="description"
                        label="Description"
                        name="description"
                        required
                        multiline
                        fullWidth
                        maxRows={4}
                        autoComplete="text"
                        sx={{ mt: 3, mb: 2 }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        ADD POST
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}

export default AddPost;