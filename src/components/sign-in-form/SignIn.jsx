import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firbase.utils";
import FormInput from "../form-input/FormInput";
import styles from "./SignIn.module.scss";

const defaultFormValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormValues);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetForm = () => {
    setFormFields(defaultFormValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const resonse = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(resonse);
      resetForm();
    } catch (err) {}
  };

  return (
    <div className={styles.signInFormContainer}>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
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

        <div className={styles.cta}>
          <button className={styles.btn} type="submit">
            Sign In
          </button>

          <button
            className={`${styles.btn} ${styles.google}`}
            type="submit"
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </button>
        </div>
        <h3>Don't have an account?</h3>
      </form>
    </div>
  );
};

export default SignInForm;
