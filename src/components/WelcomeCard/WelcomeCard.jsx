import { Container, Typography, Box, Button, List } from '@mui/material';
import { ListButton, ListItemSt, ListText, Title } from './WelcomeCard.styled';
import { Link } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from 'redux/selectors';

const WelcomeCard = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUserName);
  return (
    <>
      {!isLoggedIn ? (
        <Container>
          <Box
            sx={{
              margin: '20px auto',
              maxWidthidth: '1200px',
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
            <Title variant="h4" align="center" color={'#1976d2'}>
              Hello! Welcome to ContactFlow
            </Title>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Box sx={{ height: { xs: '280px', md: '563px' } }}>
                <img
                  style={{
                    display: 'block',
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  src="https://media4.giphy.com/media/PRVDslxfTmwXkLinrk/giphy.gif?cid=ecf05e47afq9hkwusbxrj6nk2wnqqk7pytn9d5wpfassfhyw&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                  alt="robot"
                />
              </Box>

              <List
                sx={{
                  padding: 0,
                  margin: { xs: '0 auto' },
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <ListItemSt>
                  <ListText
                    component="p"
                    color={'#1976d2'}
                    textAlign={'justify'}
                  >
                    My name is Robo, and I like to introduce my home. I have
                    lived here from the very beginning. I even remember all
                    howls of my parents - developers of the ContactFlow, while
                    they were developing my home and me.
                  </ListText>
                </ListItemSt>
                <ListItemSt>
                  <ListText component="p" color={'#1976d2'}>
                    ContactFlow's primary purpose is to give people an
                    opportunity to store, add, delete, and edit contact
                    information.
                  </ListText>
                </ListItemSt>
                <ListItemSt>
                  <ListText
                    component="p"
                    color={'#1976d2'}
                    textAlign={'justify'}
                  >
                    I`m sure you are so busy person and I don`t want to waste
                    your time, so let`s rock 🤘
                  </ListText>
                </ListItemSt>
                <ListItemSt>
                  <ListText
                    component="p"
                    color={'#1976d2'}
                    textAlign={'justify'}
                  >
                    If you visit ContactFlow for the first time don`t hesitate
                    to{' '}
                    <Link to="/registration">
                      <ListButton variant="contained" component="span">
                        Sign UP
                      </ListButton>
                    </Link>
                  </ListText>
                </ListItemSt>
                <ListItemSt>
                  <ListText
                    component="p"
                    color={'#1976d2'}
                    textAlign={'justify'}
                  >
                    If we have met already click here{' '}
                    <Link to="/login">
                      <ListButton variant="contained" component="span">
                        Login
                      </ListButton>
                    </Link>
                  </ListText>
                </ListItemSt>
              </List>
            </Box>
          </Box>
        </Container>
      ) : (
        <Container>
          <Box
            sx={{
              margin: '20px auto',
              maxWidth: '700px',
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
            <Box sx={{ height: { xs: '280px', md: '563px' } }}>
              <img
                style={{
                  display: 'block',
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                }}
                src="https://media4.giphy.com/media/PRVDslxfTmwXkLinrk/giphy.gif?cid=ecf05e47afq9hkwusbxrj6nk2wnqqk7pytn9d5wpfassfhyw&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                alt="robot"
              />
            </Box>
            <Typography component="p" color={'#1976d2'} textAlign={'justify'}>
              <b>{user}</b> you have already logged in. Let`s check your
              contacts!
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

export default WelcomeCard;
