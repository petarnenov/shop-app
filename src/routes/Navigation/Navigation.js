import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';
import UserContext from '../../components/context/UserContext';
import { signOutCurrentUser } from '../../utils/firebase/firebase';

import './styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo />
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
          <CartIcon />
        </div>
        <CartDropdown />
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
