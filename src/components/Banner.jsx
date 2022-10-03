import React from "react";
import "../App.css";
import { StyledImg, StyledBannerLeft, StyledBannerRight } from "../Styles.jsx";
function Banner() {
  return (
    <div style={{ display: "flex" }}>
      <StyledBannerLeft className="" style={{ flex: 1 }}>
        <h1>Natural</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem iure, cum inventore illo necessitatibus eum quas iusto?
          Atque, voluptatum eos?
        </p>
        <button className="btn-read">Read more</button>
      </StyledBannerLeft>
      <StyledBannerRight className="" style={{ flex: 1 }}>
        <StyledImg
          src="https://cdn.pixabay.com/photo/2022/08/01/06/08/irbene-7357426__340.jpg"
          alt="bannerImg"
          className="imgBanner"
        />
      </StyledBannerRight>
    </div>
  );
}

export default Banner;
