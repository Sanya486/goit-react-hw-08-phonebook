import React, { useMemo } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact as deleteContactRedux, editContact } from 'redux/operations';
import { RotatingLines } from 'react-loader-spinner';
import {
  ListItemAvatar,
  Avatar,
  Box,
  IconButton,
  TextField,
  Typography
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import DoneIcon from '@mui/icons-material/Done';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { MotionDiv } from './Contact.style';
import { selectContacts } from 'redux/selectors';


const Contact = ({ contact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const contactsRedux = useSelector(selectContacts)
  

  const [isLoaderShow, setIsLoaderShow] = useState(false);
  const dispatch = useDispatch();
  const handleClickDelete = e => {
    e.target.disabled = true;
    setIsLoaderShow(true);
    deleteContact(contact.id);
  };
 const handleClickEdit = e => {
   e.target.disabled = true;
   setIsEditing(true);
   setName(contact.name);
   setNumber(contact.number);
  };
  const handlerAcceptEditing = () => {
    const isContactNotChanged = contactsRedux.some(item => item.name === name && item.number === number)
    if (isContactNotChanged) {
      setIsEditing(false);
      return
    }
      dispatch(editContact({ id: contact.id, name, number }));
    setIsEditing(false)
  }

  
  const deleteContact = id => {
    dispatch(deleteContactRedux(id));
  };

  const avatarUrl = useMemo(
    () => `https://robohash.org/${contact.name}.png`, [contact.name]);

  return (
    <>
      <MotionDiv
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      >
        <Box sx={{ display: 'flex' }}>
          <ListItemAvatar sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar alt={contact.name} src={avatarUrl} />
          </ListItemAvatar>
          {isEditing ? (
            <Box
              sx={{
                gap: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography>
                <b>Name</b>
              </Typography>
              <TextField
                sx={{ width: '100px' }}
                variant="outlined"
                id="outlined-basic"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <Typography>
                <b>Number</b>
              </Typography>
              <TextField
                sx={{ width: '100px' }}
                variant="outlined"
                id="outlined-basic"
                value={number}
                onChange={e => setNumber(e.target.value)}
              />
              <IconButton onClick={handlerAcceptEditing}>
                <DoneIcon sx={{color:'green'}} fontSize='large'/>
              </IconButton>
            </Box>
          ) : (
            <Typography>
              <b>Name</b>: {contact.name} <br />
              <b>Phone</b>: {contact.number}
            </Typography>
          )}
        </Box>

        {!isEditing && (
          <Box>
            <IconButton onClick={handleClickEdit}>
              <ModeEditIcon />
            </IconButton>
            <IconButton
              key={contact.id}
              variant="outlined"
              type="button"
              onClick={handleClickDelete}
            >
              {isLoaderShow ? (
                <RotatingLines
                  strokeColor="grey"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="15
                    "
                  visible={true}
                />
              ) : (
                <CancelIcon sx={{ color: 'red' }} />
              )}
            </IconButton>
          </Box>
        )}
      </MotionDiv>
    </>
  );
};

export default Contact;
