import React from "react";
import { StyledFooter } from "../Styles.jsx";
import "../App.css";
function Footer() {
  return (
    <div className="footers">
      <StyledFooter>
        <ul>
          <li>Name Copany</li>
          <li>Tel.0-123-456-789</li>
          <li>lorem</li>
          <li>Lorem, ipsum.</li>
        </ul>
        <ul>
          <li>Address.</li>
          <li>District.</li>
          <li>Province.</li>
          <li>City</li>
        </ul>
        <ul>
          <li>item1</li>
          <li>item1</li>
          <li>item1</li>
          <li>item1</li>
        </ul>
      </StyledFooter>
      <p>Copyright 2022. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
