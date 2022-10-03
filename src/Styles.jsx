import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 0.5rem 2rem;
  padding: 1rem;
  background: ${(props) => props.background};
  color: ${(props) => props.color};

  &:hover {
    background: lightblue;
    cursor: pointer;
    color: red;
  }
`;

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 3rem;
  background: #86e3ce;
`;

export const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  padding: 0 1rem;
`;

export const StyledNavLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
`;

export const StyledLI = styled.li`
  list-style: none;
  display: inline-block;
  position: relative;

  &:after {
    content: "";
    height: 3px;
    width: 0;
    background: #009688;
    position: absolute;
    left: 0;
    bottom: -5px;
    transition: 0.5s;
  }
  &:hover:after {
    width: 100%;
  }
`;

export const StyledBannerLeft = styled.div`
  width: 100%;
  background: #d0e6a5;
  text-align: center;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledBannerRight = styled.div`
  width: 100%;
`;

export const StyledImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const StyledButton = styled.button`
  padding: 8px 18px;
  border-radius: 20px;
  margin-bottom: 10px;
  outline: none;
  border: 1px solid #ffdd94;
  background: #8dff02d8;
  color: #fff;
  font-weight: 500;
  font-size: 16px;

  &:hover {
    background: #78eb56;
  }
`;

export const StyledCard = styled.div`
  width: 325px;
  background: #d0e6a5;
  border-radius: 20px;
  overflow: hidden;
  margin: 10px auto;
  text-align: center;
`;

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  background: black;
  color: #fff;
  font-size: 18px;
`;
