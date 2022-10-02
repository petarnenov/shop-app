import { Outlet, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';
import { getUserStore } from '../../store/user/userSelector';
import { useSelector } from 'react-redux';

import './styles.scss';
import { signOutStart } from '../../store/user/userAction';

const Navigation = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(getUserStore);

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
                onClick={() => dispatch(signOutStart())}
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
