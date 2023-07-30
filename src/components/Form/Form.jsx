import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { Formik, Form, useField } from 'formik';
import { Button, Box, TextField } from '@mui/material';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';

const MyTextField = ({ labelFormik, ...props }) => {
  const [field, meta] = useField(props);
  console.log(meta);
  return (
    <>
      <label>
        {labelFormik}
        <TextField
          sx={{ width: '300px' }}
          variant="outlined"
          id="outlined-basic"
          {...field}
          {...props}
        />
      </label>
      {meta.touched && meta.error ? (
        <div
          className="error"
          style={{ fontSize: 'small', color: 'red', textAlign: 'center' }}
        >
          {meta.error}
        </div>
      ) : null}
    </>
  );
};

const SignupSchema = Yup.object().shape({
  name: Yup.string().matches(
    "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    {
      message: `Names has to start with an alphabetical character (Latin or Cyrillic) and can contain spaces, hyphens, or single quotes. Names must not have leading or trailing spaces.`,
    }
  ),
  number: Yup.string().matches('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$', {
    message:
      'Please write only phone numbers with optional international prefix, area code, and various separator characters.',
  }),
});

const AddContactForm = () => {
  const dispatch = useDispatch();
  const contactsRedux = useSelector(selectContacts);

  const addNewContact = (name, number) => {
    const isContactExist = contactsRedux.some(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    if (!isContactExist) {
      dispatch(addContact({ name, number }));
      return true
    } else {
      toast.error('Sorry, but this NAME has already exist!', {
        icon: '⚠️',
      });
      return false;
    }
  };

  const submitHandler = ({ name, number }, actions) => {
   const isContactAdded = addNewContact(name, number);
  return isContactAdded ? actions.resetForm() : null;
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validateOnChange={false}
      validationSchema={SignupSchema}
      onSubmit={submitHandler}
      ha
    >
      <Form>
        <Box
          sx={{
            margin: '0 auto',
            width: '500px',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            border: ' 2px solid #1976d23c',
            borderRadius: '22px 22px 22px 22px',
          }}
        >
          <MyTextField label="Email" name="name" type="text" />
          <MyTextField label="Password" name="number" type="text" />
          <Button
            sx={{ mt: '20px', mx: 'auto', display: 'block' }}
            variant="contained"
            type="submit"
          >
            Add Contact
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};

export default AddContactForm;
