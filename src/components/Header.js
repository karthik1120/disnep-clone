import React from "react";
import styled from "styled-components";
import { auth, provider } from "./Firebase";
import { useHistory } from "react-router-dom";
import { userName, userEmail, userPhoto } from "../features/user/userSelect";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSelect";

const Header = () => {
  const dispatch = useDispatch(useDispatch);
  const history = useHistory();
  const userSelectName = useSelector(userName);
  const userSelectPhoto = useSelector(userPhoto);
  const email = useSelector(userEmail);

  const handleAuth = () => {
    if (!userSelectName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUserInfo(result.user);
        })
        .catch((error) => {
          alert(error.message);
          console.log("----", error.message);
        });
    } else {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUserInfo = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  console.log("------userName", userName, userSelectName);
  return (
    <NavItem>
      <Logo>
        <img src="/Images/logo.svg" alt="logo" />
      </Logo>

      {!userSelectName ? (
        <Login onClick={handleAuth}>login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/">
              <img src="/Images/home-icon.svg" alt="homeIcon" />
              <span>HOME</span>
            </a>
            <a href="/">
              <img src="/Images/home-icon.svg" alt="homeIcon" />
              <span>SEARCH</span>
            </a>
            <a href="/">
              <img src="/Images/home-icon.svg" alt="homeIcon" />
              <span>WATCHLIST</span>
            </a>
            <a href="/">
              <img src="/Images/home-icon.svg" alt="homeIcon" />
              <span>ORIGINALS</span>
            </a>
            <a href="/">
              <img src="/Images/home-icon.svg" alt="homeIcon" />
              <span>MOVIES</span>
            </a>
            <a href="/">
              <img src="/Images/home-icon.svg" alt="homeIcon" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImage src={userSelectPhoto} alt={userSelectName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </NavItem>
  );
};

const NavItem = styled.nav`
  height: 70px;
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 15px;
  z-index: 3;
`;

const Logo = styled.a`
  width: 80px;
  display: inline-block;
  padding: 0;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: row nowrap;
  margin: 0;
  padding: 0;
  height: 100%;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      user-select: none;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.5px;
      line-height: 1.08;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        content: "";
        bottom: -6px;
        height: 2px;
        opacity: 0;
        position: absolute;
        right: 0px;
        left: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  /* @media (max-width: 768px) {
    display: none;
  } */
`;

const Login = styled.a`
  background-color: transparent;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border: 1px solid white;
  border-radius: 3px;
  font-size: 16px;
  transition: all 0.5s ease 0s;
  &:hover {
    color: #000;
    background-color: white;
  }
`;
const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
export default Header;
