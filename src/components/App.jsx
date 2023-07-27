import { Container, Ul } from './App.styled';
import Title from './Title/Title';
import Form from './Form/Form';
import Contact from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { Toaster } from 'react-hot-toast';

const App = () => {
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
  );
};

export default App;
