import SignUpForm from "../../components/sign-up-form/SignUpForm";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firbase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <div>
        <h1>SignIn</h1>
        <button onClick={logGoogleUser}>SignIn with Google</button>
      </div>
      <SignUpForm />
    </>
  );
};

export default SignIn;
