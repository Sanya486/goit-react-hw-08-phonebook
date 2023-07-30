import React, { useMemo } from 'react';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { deleteContact as deleteContactRedux, editContact } from 'redux/operations';
import { RotatingLines } from 'react-loader-spinner';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  Box,
  Divider,
  Button,
  IconButton,
  Input,
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import ModeEditIcon from '@mui/icons-material/ModeEdit';


const Contact = ({ contact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState();
  const [number, setNumber] = useState();

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
    dispatch(editContact({ id: contact.id, name, number }))
    setIsEditing(false)
  }

  
  const deleteContact = id => {
    dispatch(deleteContactRedux(id));
  };

  const avatarUrl = useMemo(
    () => `https://robohash.org/${contact.name}.png`, [contact.name]);

  return (
    <>
      <ListItem
        sx={{
          display: { xs: 'block', md: 'flex' },
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <ListItemAvatar sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar alt={contact.name} src={avatarUrl} />
          </ListItemAvatar>
          {isEditing ? (
            <>
              <b>Name</b>
              <Input value={name} onChange={e => setName(e.target.value)} />
              <b>Number</b>
              <Input
                value={number}
                onChange={e => setNumber(e.target.value)}
              />{' '}
              <Button onClick={handlerAcceptEditing}>Ok</Button>
            </>
          ) : (
            <p>
              <b>Name</b>: {contact.name} <br />
              <b>Phone</b>: {contact.number}
            </p>
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
      </ListItem>
      <Divider />
    </>
  );
};

export default Contact;
