import React from "react";
import "./App.css";
import styled from "styled-components";
const Title = styled.h1`
  font-size: 1.5em;
  color: red;
`;

const Container = styled.div`
  padding: 3px 2rem;
  background: lightblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`;

const NavMenu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`;
function App() {
  return (
    <div>
      <Container>
        <Title>red</Title>
        <NavMenu>
          <li>item1</li>
          <li>item1</li>
          <li>item1</li>
        </NavMenu>
      </Container>
    </div>
  );
}

export default App;
