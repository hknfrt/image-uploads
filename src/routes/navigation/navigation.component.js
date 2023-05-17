import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CardDropDown from "../../components/cart-dropdown/cart-dropdown.component";


import { ReactComponent as MyLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import {signOutUser} from '../../utils/firebase/firebase.utils'

import {NavigationContainer, LogoContainer,NavsLinks, NavsLink} from "./navigation.styles";

const Navigation = () => {
  const { currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext)
  

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <MyLogo className="logo" />
        </LogoContainer>
        <NavsLinks>
          <NavsLink to="/shop">
            SHOP
          </NavsLink>
          {currentUser ? (
            <NavsLink as='span'  onClick={signOutUser}>SIGN OUT</NavsLink>
          ) : (
            <NavsLink to="/auth">
              SING IN
            </NavsLink>
          )}
          <CartIcon/>
        </NavsLinks>
        {isCartOpen && <CardDropDown/>}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
