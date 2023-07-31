import { Formik, Form, useField } from 'formik';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from 'redux/operations';
import { selectAuthError } from 'redux/selectors';

 const MyTextField = ({ labelFormik, ...props }) => {
   const [field, meta] = useField(props);
   return (
     <>
       <label>
         {labelFormik}
         <TextField {...field} {...props} />
       </label>
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </>
   );
 };

const LoginForm = () => {
  const dispatch = useDispatch()
  const handleSubmit = (values) => {
    dispatch(fetchLogin(values));
  }

  const isError = useSelector(selectAuthError)
  return (
    <Container>
      <Typography
        sx={{ my: '30px' }}
        variant="h4"
        align="center"
        color="#1976d2"
      >
        Login
      </Typography>
      <Typography align="center" variant="p" display="block" mb="20px">
        New to Phonemania?{' '}
        <Link to="/registration">Register for a free account.</Link>
      </Typography>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Box
            sx={{
              margin: '0 auto',
              width: '400px',
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
              autoComplete
              sx={{ width: '300px' }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              type="email"
            />
            <MyTextField
              autoComplete
              sx={{ width: '300px' }}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name="password"
              type="password"
            />
            {isError && (
              <Typography color="red">
                The email address or password is incorrect.
              </Typography>
            )}
            <Button
              sx={{ mt: '20px', mx: 'auto', display: 'block' }}
              variant="contained"
              type="submit"
            >
              Login
            </Button>
          </Box>
        </Form>
      </Formik>
    </Container>
  );
};

export default LoginForm;
