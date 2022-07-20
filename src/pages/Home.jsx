import { CssBaseline, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Feed from "../components/Feed";
import MainHead from "../components/MainHead";
import MainBlogPost from "../components/MainBlogPost";

const Home = () => {
    return (
        <Box marginBottom={2}>
            <Container maxWidth="lg" >
                <MainHead />
            </Container>
            <CssBaseline />
            <Container maxWidth="lg">
                <Grid container spacing={2}>

                    <Grid item xs={9}>
                        <MainBlogPost />
                    </Grid>

                    <Grid item xs={3}>
                        <Feed />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}

export default Home;