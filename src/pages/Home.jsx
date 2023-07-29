import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from 'redux/selectors';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
   const user = useSelector(selectUserName);
  return (
    <>
      {!isLoggedIn ? (
        <Container>
          <Box
            sx={{
              margin: '20px auto',
              width: '700px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              border: ' 2px solid #1976d23c',
              borderRadius: '22px 22px 22px 22px',
              boxShadow: ' 10px 10px 24px -7px rgba(0,0,0,0.75)',
            }}
          >
            <Typography variant="h4" align="center" color={'#1976d2'}>
              Hello! Welcome to PhoneMania =)
            </Typography>
            <img
              style={{ display: 'block', margin: '20px auto' }}
              src="https://media4.giphy.com/media/PRVDslxfTmwXkLinrk/giphy.gif?cid=ecf05e47afq9hkwusbxrj6nk2wnqqk7pytn9d5wpfassfhyw&ep=v1_gifs_search&rid=giphy.gif&ct=g"
              alt="robot"
            />
            <Box>
              <Typography component="p" color={'#1976d2'} textAlign={'justify'}>
                My name is Robo, and i like to introduce my home. I live here
                from the very begining. I even remember all howls of my parent -
                developers of the PhoneMania, while they were developing my home
                and me.
              </Typography>
              <Typography component="p" color={'#1976d2'}>
                PhoneMania's main purpose to give people opportunity to store,
                add, delete and edit contact information.
              </Typography>
              <Typography component="p" color={'#1976d2'} textAlign={'justify'}>
                I`m sure you are so busy person and I don`t want to waste your
                time, so let`s rock 🤘
              </Typography>
              <Typography component="p" color={'#1976d2'} textAlign={'justify'}>
                If you visite PhoneMania for the first time don`t hesitate to{' '}
                <Link to="/registration">
                  <Button variant="contained" component="span">
                    Sign UP
                  </Button>
                </Link>
              </Typography>
              <Typography component="p" color={'#1976d2'} textAlign={'justify'}>
                If we have met already click here{' '}
                <Link to="/login">
                  <Button variant="contained" component="span">
                    Login
                  </Button>
                </Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      ) : (
        <Container>
          <Box
            sx={{
              margin: '20px auto',
              width: '700px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              border: ' 2px solid #1976d23c',
              borderRadius: '22px 22px 22px 22px',
              boxShadow: ' 10px 10px 24px -7px rgba(0,0,0,0.75)',
            }}
          >
            <img
              style={{ display: 'block', margin: '20px auto' }}
              src="https://media4.giphy.com/media/PRVDslxfTmwXkLinrk/giphy.gif?cid=ecf05e47afq9hkwusbxrj6nk2wnqqk7pytn9d5wpfassfhyw&ep=v1_gifs_search&rid=giphy.gif&ct=g"
              alt="robot"
            />
            <Typography component="p" color={'#1976d2'} textAlign={'justify'}>
                <b>{user}</b> you have already logged in. Let`s check your contacts! 
            </Typography>
              <Link to="/contacts">
                <Button variant="contained" component="span">
                  Go to Contacts
                </Button>
              </Link>
          </Box>
        </Container>
      )}
    </>
  );
};

export default Home;
