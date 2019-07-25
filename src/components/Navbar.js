import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Navbar = styled.div`
  min-width: 94px;
  width: 5vw;
  min-height: 100vh;
  box-shadow: 0px 0px 10px rgba(231, 231, 231, 0.65);
  border-radius: 0px 20px 20px 0px;
  align-items: center;
  display: flex;
`;

const LinkIcons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: space-between;
`;

const LinkIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: blue;
  margin-bottom: 50px;
`;
const HomeLink = styled(LinkIcon)``;
const Calendar = styled(LinkIcon)``;
const Settings = styled(LinkIcon)``;
const Help = styled(LinkIcon)``;

function Home() {
  return (
    <Navbar>
      <LinkIcons>
        <HomeLink />
        <Calendar />
        <Settings />
        <Help />
      </LinkIcons>
    </Navbar>
  );
}

export default Home;
