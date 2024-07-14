import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";

import "../styles/styles.css";

export const RegisterPage = () => {
  const { formData, onChange, name, email, password1, password2, resetForm, isValidEmail } =
    useForm({
      name: "",
      email: "",
      password1: "",
      password2: "",
    });

  const onSubmit = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          className= { `${ name.trim().length <= 0 && 'has-error' }`}
        />
        { name.trim().length <= 0 && <span>Este campo es necesario</span> }

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          className= { `${ !isValidEmail( email )  && 'has-error'}` }
        />
         { !isValidEmail( email )  && <span>El email ingresado no es valido</span> }

        <input
          type="password"
          placeholder="Password1"
          name="password1"
          value={password1}
          onChange={onChange}
        />
         { password1.trim().length <= 0 && <span>Este campo es necesario</span> }
         { password1.trim().length < 6 &&  password1.trim().length > 0 && <span>La contraseña tiene que tener 6 caracteres </span> }

        <input
          type="password"
          placeholder="Repeat password"
          name="password2"
          value={password2}
          onChange={onChange}
        />
         { password2.trim().length <= 0 && <span>Este campo es necesario</span> }
         { password2.trim().length > 0 && password1 !== password2 && <span>las contraseñas deben ser iguales</span> }

        <button type="submit"> Create </button>

        <button type="button" onClick={ resetForm }> Reset Form </button>
      </form>
    </div>
  );
};

export default RegisterPage;
