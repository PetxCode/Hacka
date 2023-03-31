import React from "react";

import styled from "styled-components";

import { useQuery } from "@tanstack/react-query";
import { UseAppSelector } from "../Global/Store";
import { singleUser } from "../api/User";
const Latesttransact = () => {
  const user = UseAppSelector((state) => state.Client);
  const getUser = useQuery({
    queryKey: ["singleUser"],
    queryFn: () => singleUser(user?._id),
  });
console.log("this is get one user :" , getUser)
  return (
    <Container>
      <Wrapper>
        <Title>Your Predictions</Title>
        <Table>
          <table>
            <tr>
              <th>Teams</th>
              <th>Odds</th>
              <th>Prize</th>
            </tr>

            {
      getUser?.data?.data?.predict?.map((el:any)=>(
        <tr>
        <td>{el?.name} </td>
        <td>{el?.odds} </td>
        <td>1000</td>
      </tr>
      ))
     }
       
          </table>
        </Table>
        <BtnHold>
          <Button>View More</Button>
        </BtnHold>
      </Wrapper>
    </Container>
  );
};

export default Latesttransact;

const Container = styled.div`
  width: 93%;
  display: flex;
  height: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 30px;
  margin-top: 30px;
  flex-direction: column;
  background-color: #fff;
  @media screen and (max-width: 500px) {
    padding: 20px;
  }
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;
const Table = styled.div`
  overflow-x: auto;
  font-size: 14px;
  table {
    width: 100%;
  }
  table,
  th,
  td {
    border: 1px solid lightgray;
    border-collapse: collapse;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  th,
  td {
    padding: 15px 10px;
    text-align: left;
  }
  th {
    font-size: 13px;
    background-color: #0d71fa;
    color: #fff;
  }
`;

const BtnHold = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  height: 35px;
  width: 150px;
  margin-top: 15px;
  font-family: poppins;
  border: 1px solid #0d71fa;
  /* color: #6d6d6e; */
  color: #0d71fa;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 600;
  background-color: transparent;
  cursor: pointer;
  /* margin-right: 10px; */
  transition: all 350ms;
  :hover {
    transform: scale(0.98);
  }
  @media (max-width: 500px) {
    height: 40px;
    width: 100px;
    font-size: 12px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
