import React, { Component } from "react";
import { StyledNavbar, StyledUl, StyledLI, StyledNavLink } from "../Styles.jsx";
export default class Navbar extends Component {
  render() {
    return (
      <StyledNavbar>
        <h1>Logo</h1>
        <StyledUl>
          <StyledLI>
            <StyledNavLink href="#d">Item</StyledNavLink>
          </StyledLI>
          <StyledLI>
            <StyledNavLink href="#d">Item</StyledNavLink>
          </StyledLI>
          <StyledLI>
            <StyledNavLink href="#d">Item</StyledNavLink>
          </StyledLI>
          <StyledLI>
            <StyledNavLink href="#d">Item</StyledNavLink>
          </StyledLI>
        </StyledUl>
      </StyledNavbar>
    );
  }
}
