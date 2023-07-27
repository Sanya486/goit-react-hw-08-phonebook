import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { filter } from 'redux/store';

import { Lable, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filterRedux = useSelector(selectFilter);

  const onFilterChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(filter(value));
  };
  return (
    <div>
      <Lable style={{ width: 200 }}>
        Find contacts by name
        <Input type="text" value={filterRedux} onChange={onFilterChange} />
      </Lable>
    </div>
  );
};

export default Filter;
