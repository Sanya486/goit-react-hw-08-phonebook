import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import Contact from 'components/Contact/Contact';

const Contacts = () => {
  const dispatch = useDispatch();
  const contactsRedux = useSelector(selectContacts);
  const filterRedux = useSelector(selectFilter);
  const contacts = filterRedux === '' ? contactsRedux : onActiveFilter();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function onActiveFilter() {
    return contactsRedux.filter(contact =>
      contact.name.toLowerCase().includes(filterRedux)
    );
  }

  return (
    <>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </>
  );
};

export default Contacts;
