import { Form, Formik } from "formik";
import * as Yup from 'yup';
import "../styles/styles.css";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'El nombre debe tener más de 2 caracteres')
            .max(15, 'El nombre debe ser menor de 15 caracteres')
            .required('Este campo es requerido'),
          email: Yup.string()
            .email('Revise el formato del correo')
            .required('Este campo es requerido'),
          password1: Yup.string()
            .min(6, 'Al menos debe tener 6 caracteres')
            .required('Este campo es requerido'),
          password2: Yup.string()
            .oneOf([Yup.ref('password1')], 'Las contraseñas deben ser iguales')
            .required('Este campo es requerido'),
        })}
      >
        {({ handleSubmit, handleReset }) => (
          <Form onSubmit={handleSubmit}>
            <MyTextInput label="Nombre" name="name" placeholder="Kevin" />
            <MyTextInput label="Email" name="email" placeholder="example@example.com" />
            <MyTextInput label="Password" name="password1" type="password" placeholder="******" />
            <MyTextInput label="Confirm Password" name="password2" type="password" placeholder="******" />
            <button type="submit">Create</button>
            <button type="submit" onClick={ handleReset }>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormikPage;
