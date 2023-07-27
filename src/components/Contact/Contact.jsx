import React from 'react';
import { useState } from 'react';
import { Button, Li } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact as deleteContactRedux } from 'redux/operations';
import { RotatingLines } from 'react-loader-spinner';

const Contact = ({ contact }) => {
  const [isLoaderShow, setIsLoaderShow] = useState(false);
  const dispatch = useDispatch();
  const handleClick = e => {
    e.target.disabled = true;
    setIsLoaderShow(true);
    deleteContact(contact.id);
  };
  const deleteContact = id => {
    dispatch(deleteContactRedux(id));
  };
  return (
    <Li>
      <p>
        {contact.name}: {contact.phone}
      </p>
      <Button key={contact.id} type="button" onClick={handleClick}>
        {isLoaderShow && (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
                      width="15
            "
            visible={true}
          />
        )}
        Delete
      </Button>
    </Li>
  );
};

export default Contact;
