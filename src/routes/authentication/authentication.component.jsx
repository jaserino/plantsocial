import SignUpForm from "../../components/sign-up/sign-up.component";
import SignInForm from "../../components/sign-in/sign-in.component";

import image from "../../assets/plantsocial.png";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div>
      <div className="authentication-container">
        <div className="information">
          <p className="comp-title">plant social</p>
          <img className="info-image" src={image} />
        </div>
        <SignUpForm />
        <SignInForm />
      </div>
    </div>
  );
};

export default Authentication;
