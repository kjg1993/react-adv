import React from 'react';
import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => {

  return (
    <div>
      <h1>Formik Components</h1>

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
            <label htmlFor="firstName"> Name</label>
            <Field name='firstName' type="text"/>
            <ErrorMessage name="firstName" component='span' />


            <label htmlFor="lastName"> Last Name </label>
            <Field name='lastName' type="text" />
            <ErrorMessage name="lastName" component='span' />

            <label htmlFor="email"> Email Address </label>
            <Field name='email' type="email" />
            <ErrorMessage name="email" component='span' />

            <label htmlFor="jobType">Job Type</label>
            <Field name='jobType' as="select">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT-Senior</option>
              <option value="it-junior">IT-Jr.</option>
            </Field>
            <ErrorMessage name="jobType" component='span' />

            <label>
              <Field name='terms' type="checkbox" />
              Terms and conditions
            </label>

            <ErrorMessage name="terms" component='span' />

            <button type="submit">Submit</button>
          </Form>
        )
        }

      </Formik>

    </div>
  );
};

export default FormikComponents;
