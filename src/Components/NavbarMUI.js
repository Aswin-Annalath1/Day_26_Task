import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function NavbarMUI () {

    const navigate=useNavigate()
  return (
    <Box sx={{ display: 'flex',padding:0,marginBottom:10,}}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MovieFlix
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))} */}
            <Button sx={{ color: '#fff'}} onClick={()=>navigate('/')}>All</Button>
            <Button sx={{ color: '#fff' }} onClick={()=>navigate('/malayalam')}>Malayalam</Button>
            <Button sx={{ color: '#fff' }} onClick={()=>navigate('/tamil')}>Tamil</Button>
            <Button sx={{ color: '#fff' }} onClick={()=>navigate('/hindi')}>Hindi</Button>
            


          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavbarMUI;