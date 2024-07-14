import React from 'react';
import {useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikYupPage = () => {

  const { handleChange, values, handleSubmit, errors, touched, handleBlur, getFieldProps } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },

    onSubmit: values => {
      console.log(values);
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Debe tener 15 caracteres')
        .required('Requerido'),
      lastName: Yup.string()
        .max(15, 'Debe tener 15 caracteres')
        .required('Requerido'),
      email: Yup.string()
        .email('El email no tiene un formato valido')
        .required('Requerido')

    })
  });

  return (
    <div>
      <h1>Formik Yup Tutorial</h1>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName"> Name</label>
        <input type="text" {...getFieldProps('firstName') } />
        {touched.firstName && errors.firstName ? <span>{errors.firstName}</span> : null}

        <label htmlFor="lastName"> Last Name </label>
        <input type="text" {...getFieldProps('lastName') } />
        {touched.lastName && errors.lastName ? <span>{errors.lastName}</span> : null}

        <label htmlFor="email"> Email Address </label>
        <input type="email" {...getFieldProps('email') } />
        {touched.email && errors.email ? <span>{errors.email}</span> : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikYupPage;
