import React from 'react';


import { useField } from 'formik';
import {  TextField } from '@mui/material';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';


export const MyTextField = ({ labelFormik, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label>
        {labelFormik}
        <TextField
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

export const MyEdittingTextField = ({ labelFormik, ...props }) => {
  const [field, meta] = useField(props);
  useEffect(() => {
    if (meta.touched && meta.error) toast.error(meta.error);
  },[meta.error, meta.touched])
    return (
      <>
        <label>
          {labelFormik}
          <TextField
            {...field}
            {...props}
          />
        </label>
      </>
    );
};