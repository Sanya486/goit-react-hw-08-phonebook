import { Formik, Form } from 'formik';
import { Typography, Button, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchSignup } from 'redux/operations';
import { MyTextField } from 'utils/MyTextField';

const SignupForm = () => {
  const dispatch = useDispatch() 
  const handleSubmit = (values) => {
    dispatch(fetchSignup(values));
  
  }
  return (
    <Container>
      <Typography
        sx={{ my: '30px' }}
        variant="h4"
        align="center"
        color="#1976d2"
      >
        Register to Phonemania
      </Typography>
      <Typography align="center" variant="p" display="block" mb="20px">
        Already have an account? <Link to="/login">Log in here</Link>
      </Typography>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Box
            sx={{
              margin: '0 auto',
              maxWidth: '400px',
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
            <MyTextField
              required
              id="outlined-basic"
              label="Name"
              variant="outlined"
              name="name"
              type="text"
            />
            <MyTextField
              required
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              type="email"
            />
            <MyTextField
              required
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name="password"
              type="password"
            />
            <Button
              sx={{ mt: '20px', mx: 'auto', display: 'block' }}
              variant="contained"
              type="submit"
            >
              Sign up
            </Button>
          </Box>
        </Form>
      </Formik>
    </Container>
  );
};

export default SignupForm;
