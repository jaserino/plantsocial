import SignUpForm from "../../components/sign-up/sign-up.component";
import SignInForm from "../../components/sign-in/sign-in.component";

import image from "../../assets/plantsocial.png";

import {
  AuthenticationContainer,
  Information,
  InfoImage,
} from "./authentication.styles.jsx";

const Authentication = () => {
  return (
    <div>
      <AuthenticationContainer>
        <div>
          <Information>plant social</Information>
          <InfoImage src={image} alt="logo of company" />
        </div>
        <SignUpForm />
        <SignInForm />
      </AuthenticationContainer>
    </div>
  );
};

export default Authentication;
