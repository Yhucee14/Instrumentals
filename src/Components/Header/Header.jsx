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
// import AdbIcon from '@mui/icons-material/Adb';
// import {AiOutlineMenu} from "react-icons/ai";

const pages = ['Home', 'Newly-Added', 'Genres', 'Contact Us'];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const Header = () => {
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
    <AppBar position="static">
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
                    href="https://www.google.com/maps/@9.0338725,8.677457,6zcv">
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
              sx={{ my: 2, color: 'white', display: 'block' }}
              component="a"
              href="https://www.google.com/maps/@9.0338725,8.677457,6zcv"
            >
              <a>Home</a>
            </Button>

            <Button id='Navbtn'
              sx={{ my: 2, color: 'white', display: 'block' }}
              component="a"
              href="https://www.google.com/maps/@9.0338725,8.677457,6zcv"
            >
              <a>Newly-Added</a>
            </Button>

            <Button id='Navbtn'
              sx={{ my: 2, color: 'white', display: 'block' }}
              component="a"
              href="https://www.google.com/maps/@9.0338725,8.677457,6zcv"
            >
              <a>Genres</a>
            </Button>

            <Button id='Navbtn'
              sx={{ my: 2, color: 'white', display: 'block' }}
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

            <Button id='left-Navbtn'
              sx={{ my: 2, color: 'white', display: 'block' }}
              component="a"
              href="https://www.google.com/maps/@9.0338725,8.677457,6zcv"
            >
              <a>Signup</a>
            </Button>
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header