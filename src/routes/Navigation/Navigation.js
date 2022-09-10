import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import UserContext from "../../components/context/UserContext";
import { signOutCurrentUser } from "../../utils/firebase/firebase";

import "./styles.scss";

const Navigation = ({ onMouseEnter, onMouseLeave }) => {
  const { currentUser } = useContext(UserContext);

  const iconProps = {
    onMouseEnter,
    onMouseLeave,
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo {...iconProps} />
        </Link>
        <div className="nav-links-container">
          {currentUser && (
            <>
              <Link className="nav-link" to="/shop">
                SHOP
              </Link>
              <Link
                className="nav-link"
                onClick={async () => {
                  await signOutCurrentUser();                 
                }}
                to="/"
              >
                SIGN OUT
              </Link>
            </>
          )}
          {!currentUser && (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
