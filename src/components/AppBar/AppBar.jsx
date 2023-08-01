import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { NavLinkSt, LinkSt } from './AppBar.styled';

import { useDispatch, useSelector } from 'react-redux';
import { fetchLogout } from 'redux/operations';
import { selectIsLoggedIn, selectUserName } from 'redux/selectors';
import { Button } from '@mui/material';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUserName);

  const dispatch = useDispatch();

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
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
      <Container maxWidth="xl">
        <Toolbar
          sx={{ display: 'flex', justifyContent: 'space-between' }}
          disableGutters
        >
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '100px' }}>
            <LinkSt to="/">
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  gap: '10px',
                  alignItems: 'center',
                }}
              >
                <ContactPhoneIcon
                  sx={{ display: { xs: 'none', md: 'flex' } }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="p"
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  ContactFlow
                </Typography>
              </Box>
            </LinkSt>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <NavLinkSt to="/">
                <Button variant="contained" component="p">
                  Home
                </Button>
              </NavLinkSt>
              <NavLinkSt to="/contacts">
                <Button variant="contained" component="p">
                  Contacts
                </Button>
              </NavLinkSt>
            </Box>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
              <MenuItem key="home" onClick={handleCloseNavMenu}>
                <NavLinkSt style={{ color: '#1976d2' }} to="/">
                  <Button variant="outlined" component="span">
                    Home
                  </Button>
                </NavLinkSt>
              </MenuItem>
              <MenuItem key="Contacts" onClick={handleCloseNavMenu}>
                <NavLinkSt style={{ color: '#1976d2' }} to="/contacts">
                  <Button variant="outlined" component="span">
                    Contacts
                  </Button>
                </NavLinkSt>
              </MenuItem>
              {!isLoggedIn && (
                <MenuItem key="SignUp" onClick={handleCloseNavMenu}>
                  <NavLinkSt style={{ color: '#1976d2' }} to="/contacts">
                    <Button variant="outlined" component="span">
                      Sign up
                    </Button>
                  </NavLinkSt>
                </MenuItem>
              )}
              {!isLoggedIn && (
                <MenuItem key="LogIn" onClick={handleCloseNavMenu}>
                  <NavLinkSt style={{ color: '#1976d2' }} to="/contacts">
                    <Button variant="outlined" component="span">
                      Log in
                    </Button>
                  </NavLinkSt>
                </MenuItem>
              )}
            </Menu>
          </Box>
          {!isLoggedIn && (
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <ContactPhoneIcon
                sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
              />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },

                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                ContactFlow
              </Typography>
            </Box>
          )}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              gap: '10px',
            }}
          ></Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              gap: '10px',
            }}
          >
            {!isLoggedIn && (
              <>
                <NavLinkSt to="/registration">
                  <Button variant="contained" component="p">
                    Sign up
                  </Button>
                </NavLinkSt>
                <NavLinkSt to="/login">
                  <Button
                    sx={{ backgroundColor: 'white', color: '#1976d2' }}
                    variant="contained"
                    component="span"
                  >
                    Log in
                  </Button>
                </NavLinkSt>
              </>
            )}
          </Box>
          {isLoggedIn && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings" arrow onClick={handleOpenUserMenu}>
                <Box
                  sx={{
                    display: { xs: 'flex', md: 'flex' },
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  <Typography textAlign="center">Hello, {user}</Typography>
                  <IconButton sx={{ p: 0 }}>
                    <InsertEmoticonIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </Box>
              </Tooltip>
              <Menu
                sx={{ mt: '5px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  key="Logout"
                  onClick={() => {
                    handleCloseUserMenu();
                    dispatch(fetchLogout());
                  }}
                >
                  <Typography textAlign="center">
                    <Button variant="outlined" component="span">
                      Log out
                    </Button>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
