
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import { Avatar, Tooltip } from '@mui/material';
import { red } from '@mui/material/colors';



const Header = () => {

  const imgUrl = "https://cat-blog-api.herokuapp.com/images/profileImg/"

  const {user} = useSelector((state) => state.auth)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Box sx={{ flexGrow: 1 }} >
   
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}

            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link style={{textDecoration : "none",color : "#fff"}} to="/">
            Blog App
          </Link>
          </Typography>
         {
          user ? (
               <Tooltip title={user.user.name}>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt={user.user.name}  sx={{ bgcolor: red[500] }} src={`${imgUrl}${user.user.profilePic}`} />
            </IconButton>
          </Tooltip>) : (
            <div>
             <Button color="inherit"><Link style={{textDecoration : "none",color : "#fff"}} to="login">Login</Link></Button> 
             <Button color="inherit"><Link style={{textDecoration : "none",color : "#fff"}} to="register">Register</Link></Button> 
            </ div>
          )
         }
          
      
        </Toolbar>
      </AppBar>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       {user && <Link to="/dashboard" style={{textDecoration : "none" , color : "black"}}><MenuItem onClick={handleClose}>DashBoard</MenuItem></Link>} 
       {user && <Link to="addpost" style={{textDecoration : "none" , color : "black"}}><MenuItem onClick={handleClose}>Add Post</MenuItem></Link>}
       <Link to="/about" style={{textDecoration : "none" , color : "black"}}><MenuItem onClick={handleClose}>About</MenuItem></Link> 
      </Menu>
    </Box>
  );
}

export default Header;
