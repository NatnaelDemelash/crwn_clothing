import SignInForm from "../../components/sign-in-form/SignIn";
import SignUpForm from "../../components/sign-up-form/SignUpForm";

import styles from "./Authentication.module.scss";

const Authentication = () => {
  return (
    <div className={styles.auth}>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
