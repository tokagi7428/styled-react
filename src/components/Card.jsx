import React from "react";
import { StyledCard, StyledImg, StyledButton } from "../Styles.jsx";
function Card() {
  return (
    <StyledCard>
      <div className="header">
        <StyledImg
          src="https://cdn.pixabay.com/photo/2022/06/15/05/31/sparrow-7263192__340.jpg"
          alt=""
          className="imgCard"
        />
      </div>
      <div className="content">
        <h1>Header</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi soluta
          culpa ratione voluptas minima animi, et ullam beatae laudantium autem?
        </p>
      </div>
      <div className="footer">
        <StyledButton type="button">Read more</StyledButton>
      </div>
    </StyledCard>
  );
}

export default Card;
