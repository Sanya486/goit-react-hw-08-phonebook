import React from 'react';
import { TextField } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { filter } from 'redux/store';



const Filter = () => {
  const dispatch = useDispatch();
  const filterRedux = useSelector(selectFilter);

  const onFilterChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(filter(value));
  };
  return (
    <div>
      <TextField
        sx={{ width: '300px' }}
        variant="outlined"
        id="outlined-basic"
        label="Find the contact"
        type="text"
        value={filterRedux}
        onChange={onFilterChange}
      />
    </div>
  );
};

export default Filter;
