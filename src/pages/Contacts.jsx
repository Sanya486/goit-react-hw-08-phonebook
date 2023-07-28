import React from 'react'
import { Container, Ul } from 'components/App.styled';
import Title from 'components/Title/Title';
import Form from 'components/Form/Form';
import Contact from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import { Toaster } from 'react-hot-toast';

const Contacts = () => {
  return (
     <Container>
      <Title text="Phonebook"></Title>
      <Form />
      <Title text="Contacts"></Title>
      <Filter />
      <Ul>
        <Contact />
      </Ul>
      <Toaster/>
    </Container>
  )
}

export default Contacts
