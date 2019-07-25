import React from "react";
import { useCurrentPageState } from "../hooks";
import styled from "styled-components";
import CalendarIcon from "../content/LinkIcons/calendar.svg";
import DashIcon from "../content/LinkIcons/dash.svg";
import HelpIcon from "../content/LinkIcons/help.svg";
import SettingsIcon from "../content/LinkIcons/settings.svg";

const Navbar = styled.div`
  min-width: 94px;
  width: 5vw;
  min-height: 100vh;
  background-color: white;
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
  margin-bottom: 50px;
  background-repeat: no-repeat;
  background-position: center;
`;

const HomeLink = styled(LinkIcon)`
  background-image: url(${DashIcon});
`;
const Calendar = styled(LinkIcon)`
  background-image: url(${CalendarIcon});
`;
const Settings = styled(LinkIcon)`
  background-image: url(${SettingsIcon});
`;
const Help = styled(LinkIcon)`
  background-image: url(${HelpIcon});
`;

function Home() {
  const { onClickSetPageState, pageState } = useCurrentPageState({});
  return (
    <Navbar>
      <LinkIcons>
        <HomeLink onClick={onClickSetPageState} />
        <Calendar onClick={onClickSetPageState} />
        <Settings />
        <Help />
      </LinkIcons>
    </Navbar>
  );
}

export default Home;
