import React from "react";
// import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Grid, AppBar, TextField } from "@mui/material";
import RedditIcon from "@mui/icons-material/Reddit";
import Stack from "@mui/material/Stack";

import RedCard from "./HomePostCard";

const NavBar = () => {
  return (
    <>
      {/* <Grid container direction="column"> */}
      <Grid item container mt={1}>
        <Grid
          item
          xs={0}
          md={2}
          lg={1}
          sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'none',
              lg: 'block',
              xl: 'block',
            },
          }}>
          <p> head gut left </p>
        </Grid>
        <Grid item xs={12} md={10} xl={11}>
          <Grid container spacing={2}>
            <Grid item xs={2} md={1}>
              <RedditIcon color="secondary" fontSize="large" />
            </Grid>
            <Grid item xs={6} md={7}>
              <form>
                <TextField
                  id="outlined-basic"
                  label="Search"
                  variant="outlined"
                  fullWidth
                />
              </form>
            </Grid>
            <Grid item xs={4} md={4}>
              <Grid container justifyContent="center">
                <Stack direction="row" spacing={1}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Button variant="contained" color="secondary">
                    New Post
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid
          item
          xs={0}
          md={2}
          sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'none',
              lg: 'none',
              xl: 'none',
            },
          }}>
          <p> head gut right </p>
        </Grid> */}
      </Grid>
    </>
  );
};
export default NavBar;
