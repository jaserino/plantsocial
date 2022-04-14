import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Pslogo } from "../../assets/plantsocial.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Pslogo className="logo" />
        </Link>
        <div className="nav-links-container">
          {/*Link is similar to am anchor tag*/}
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
