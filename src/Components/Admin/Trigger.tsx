import React from "react";
import styled from "styled-components";
import AdminTable from "./AddminTable";
import Dashhead from "./Dashhead";
import Homes from "./Homes";
import SideBar from "./SideBar";
import TriggerBest from "./TriggerBest";

const Trigger = () => {
  return (
    <Container>
      <Dashhead />
      <SideBar />
      <TriggerBest />{" "}
    </Container>
  );
};

export default Trigger;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #F5F7FA; */
  overflow: hidden;
`;
