import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TheatersIcon from '@mui/icons-material/Theaters';
import { Button } from '@mui/material';
import { Outlet, Link } from "react-router-dom";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#181818',
      },
    },
  });




function NavBar({query,setQuery}) {


  return (
    <ThemeProvider theme={darkTheme}>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" enableColorOnDark>
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
           
          >
            <TheatersIcon fontSize='large'/>
          </IconButton>
        
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Movies
          </Typography>
          <Box sx={{ minWidth: 90 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          size='small'    
        >
          <MenuItem value={10}> <Link to="/" className='text-decoration-none text-light'>Now Playing</Link></MenuItem>
          <MenuItem value={20}><Link to="popular" className='text-decoration-none text-light'>Popular</Link></MenuItem>
          <MenuItem value={30}> <Link to="upcoming" className='text-decoration-none text-light'>upcoming</Link></MenuItem>
          <MenuItem value={40}> <Link to="toprated" className='text-decoration-none text-light'>Top rated</Link></MenuItem>
          <MenuItem value={50}>  <Link to="search" className='text-decoration-none text-light'>Search</Link></MenuItem>
        </Select>
      </FormControl>
    </Box>
         
            
           
            
           
       
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={query}
              onChange={(e)=>setQuery(e.target.value)}
              
            
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  )
}

export default NavBar
