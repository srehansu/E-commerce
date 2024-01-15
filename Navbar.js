import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  background-color: #333;
  padding: 17px 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  text-align: center; /* Center components in desktop mode */

  @media (max-width: 1024px) {
    padding: 17px 20px; /* Adjust padding for tablet */
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 769px) {
    justify-content: flex-start; /* Align items to the start for desktop mode */
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const MenuIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 20px;

  @media (min-width: 769px) {
    display: none;
  }
`;

const CloseButton = styled.div`
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;

  @media (min-width: 769px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 5.5rem;
  margin-left: 15%;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 4.4rem;
    right: ${({ showMenu }) => (showMenu ? '0' : '-100%')};
    width: 50%;
    background-color: #333;
    padding: 50px;
    z-index: 1;
    transition: right 0.3s ease-in-out;
  }

  @media (min-width: 769px) {
    align-items: center; /* Center items horizontally for desktop mode */
  }

  @media (max-width: 1024px) {
    margin-left: 14%; /* Adjust margin for tablet */
    gap: 3.5rem;
  margin-left: 11%;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  position: relative;
  transition: transform 0.2s ease-in-out;

  &:hover {
    color: #ff9900;
    transform: scale(1.2);
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ShoppingLogo = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-top: 1.5px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }

  @media (max-width: 768px) {
    margin-top: 1.5rem; /* Adjust margin for better spacing in mobile */
  }
`;

const ProfileLogoContainer = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
`;

const ProfileLogo = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 20px;
  color: white;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.5);
  }

  @media (max-width: 768px) {
    margin-top: 1.5rem; /* Adjust margin for better spacing in mobile */
  }
`;

const MobileProfileLogo = styled(ProfileLogo)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-top: -0.5rem; /* Adjust margin for better spacing in mobile */
    margin-left: 0%;
  }
`;

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo to="/">Your Logo</Logo>
        {!showMenu ? (
          <MenuIcon onClick={toggleMenu}>☰</MenuIcon>
        ) : (
          <CloseButton onClick={closeMenu}>✕</CloseButton>
        )}
      </LogoContainer>
      <NavLinks showMenu={showMenu}>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>
        <NavLink to="/FAQPage" onClick={closeMenu}>
          FAQ
        </NavLink>
        <NavLink to="/ContactUs" onClick={closeMenu}>
          Contact Us
        </NavLink>
        <NavLink to="/product" onClick={closeMenu}>
          Product
        </NavLink>
        <ShoppingLogo>🛒</ShoppingLogo>
        <MobileProfileLogo>👤</MobileProfileLogo>
      </NavLinks>
      <ProfileLogoContainer>
        <ProfileLogo>👤</ProfileLogo>
      </ProfileLogoContainer>
    </NavbarContainer>
  );
};

export default Navbar;
