import React from 'react';
import {  Formik, Form, } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

import { MyCheckbox, MyTextInput, MySelect } from '../components'


export const FormikAbstraction = () => {

  return (
    <div>
      <h1>Formik FormikAbstraction</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}

        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={
          Yup.object({
            firstName: Yup.string()
              .max(15, 'Debe tener 15 caracteres')
              .required('Requerido'),
            lastName: Yup.string()
              .max(15, 'Debe tener 15 caracteres')
              .required('Requerido'),
            email: Yup.string()
              .email('El email no tiene un formato valido')
              .required('Requerido'),
            jobType: Yup.string()
              .notOneOf(['it-junior'], 'Esta opcion no es permitida.')
              .required('Requerido'),
            terms: Yup.boolean()
              .oneOf([true], 'Debes aceptar los términos y condiciones')
              .required('Requerido')

          })
        }
      >
        {formik => (
          <Form>

            <MyTextInput
              label={'First Name'}
              name={'firstName'}
              placeholder='First Name'

            />

            <MyTextInput
              label={'Last Name'}
              name={'lastName'}
              placeholder='Last Name'

            />

            <MyTextInput
              label={'Email Address'}
              name={'email'}
              type='email'
              placeholder='Email'

            />
        
            <MySelect name='jobType' as="select" label={'Job Type'}>
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT-Senior</option>
              <option value="it-junior">IT-Jr.</option>
            </MySelect>


            <MyCheckbox label={'Terms and Conditions'} name='terms' />

            <button type="submit">Submit</button>
          </Form>
        )
        }

      </Formik>

    </div>
  );
};

export default FormikAbstraction;
