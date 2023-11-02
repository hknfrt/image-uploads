import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";

import { signOutStart } from "../../store/user/user.action";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">Home</LogoContainer>
        <NavLinks>
          <NavLink to="/upload-files">Upload Files</NavLink>
          <NavLink to="/file-details">File Details</NavLink>
          <NavLink to="/user-req">View User Req</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sing Out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
