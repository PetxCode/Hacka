import React from 'react'
import styled from 'styled-components'
import Dashhead from '../Dashhead'
import SideBar from '../SideBar'
import Table from './Table'


const Dashboard = () => {
  return (
    <Container>
          <Dashhead />
      <SideBar />
  
  <Table />
    </Container>
  )
}

export default Dashboard
const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: #F5F7FA; */
    overflow: hidden;
`