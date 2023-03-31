import React from "react";
import styled from "styled-components";
import AdminTable from "./AddminTable";
import Dashhead from "./Dashhead";
import Homes from "./Homes";
import SideBar from "./SideBar";

const AdminEnter = () => {
  return (
    <Container>
      <Dashhead />
      <SideBar />

      <AdminTable />
    </Container>
  );
};

export default AdminEnter;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #F5F7FA; */
  overflow: hidden;
`;
