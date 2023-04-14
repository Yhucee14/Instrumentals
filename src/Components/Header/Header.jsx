import React from 'react'
import './Header.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../Assets/richlogo.png';
import { Link } from 'react-router-dom';
import Body from '../Body/Body';

const pages = ['Home', 'Newly-Added', 'Genres', 'Contact Us'];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const Header = ({cartItems}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
       <AppBar position="static"
    sx={{
      background: "transparent",
    }}
    >
      <Container maxWidth="xl"
        id='container'>
        <Toolbar disableGutters
        >

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={logo} alt="logo" width={45} id='logoimg' />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"
                    component="a"
                    href="../">
                    {page}
                  </Typography>
                </MenuItem>
              ))}

            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end', }}>

            <Button id='Navbtn'
              sx={{  color: 'white', display: 'block', textAlign: 'center' }}
              component="a"
              href="https://www.google.com/maps/@9.0338725,8.677457,6zcv"
            >
              <a>Home</a>
            </Button>

            <Link to="/NewlyAdded" >
            <Button id='New'
              sx={{  color: 'white',  }}
            >
              Newly-Added 
            </Button>
            </Link>

            <Button id='Navbtn' className='dropdown'
              sx={{  color: 'white', display: 'inline-block' }}
              component="a"
              href="https://www.google.com/maps/@9.0338725,8.677457,6zcv"
            >
              <a>Genres</a>
              <div className='dropdown-content'>
                <a href='#'>Afrobeats</a>
                <a href='#'>Drill</a>
                <a href='#'>EDM</a>
                <a href='#'>Hiphop</a>
                <a href='#'>Soundkits</a>

              </div>
            </Button>

            <Button id='Navbtn'
              sx={{  color: 'white', display: 'block' }}
              component="a"
              href="https://www.google.com/maps/@9.0338725,8.677457,6zcv"
            >
              <a>Contact Us</a>
            </Button>

          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'end', } }}>

            <Button id='left-Navbtn'
              sx={{ my: 2, color: 'white', display: 'block' }}
              component="a"
              href="https://www.google.com/maps/@9.0338725,8.677457,6zcv"
            >
              <a>Login</a>
            </Button>

            <Link to="/Cart" >
            <Button id='right-Navbtn'
              sx={{ my: 2,  display: 'block', bgcolor: 'white', borderRadius: '15px', color: 'black', }}
              
            >
              <a>Cart</a> <span>{cartItems.length === 0 ? "" : cartItems.length}</span>
            </Button> 
           
            </Link>
          </Box>


        </Toolbar>
      </Container>
    </AppBar>

        
    </div>
   
  )
}

export default Header