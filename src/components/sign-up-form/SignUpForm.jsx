import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firbase.utils";

import FormInput from "../form-input/FormInput";
import style from "./SignUpForm.module.scss";

const defaultFormValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormValues);
  const { fullName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetForm = () => {
    setFormFields(defaultFormValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Pasword does not match");
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { fullName });
      resetForm();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Email is already in use!");
      }
      console.log(err);
    }
  };

  return (
    <div className={style.signUpFormContainer}>
      <h3>Don't have an account?</h3>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Full Name"
          type="text"
          name="fullName"
          value={fullName}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit" className={style.btn}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
