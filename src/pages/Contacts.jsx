import React from 'react';

import AddContactForm from 'components/Form/Form';
import Contact from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import { Toaster } from 'react-hot-toast';
import {Container } from '@mui/material';
import { DivSt } from './styles/Contacts.styled';


const Contacts = () => {
  return (
    <Container
      sx={{
        margin: '20px auto 0',

        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        border: ' 2px solid #1976d23c',
        borderRadius: '22px 22px 22px 22px',
        boxShadow: ' 10px 10px 24px -7px rgba(0,0,0,0.75)',
      }}
    >
      <AddContactForm />
      <Filter />

      <DivSt>
        <Contact />
      </DivSt>

      <Toaster />
    </Container>
  );
};

export default Contacts;
