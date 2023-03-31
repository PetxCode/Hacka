import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { useQuery } from "@tanstack/react-query";
import { UseAppSelector } from "../Global/Store";
import { singleUser } from "../api/User";
import axios from "axios";

import * as yup from "yup";
import Swal from "sweetalert2";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IoIosFootball } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import OtherForm from "./PredictData";
import { Link } from "react-router-dom";

// const liveURL = "https://football-predict-api.onrender.com/api";
const liveURL = "http//localhost:3366/api";

const Latesttransact = () => {
  const user = UseAppSelector((state) => state.Client);
  const id = user?.data._id;

  const [allMatches, setAllMatches] = useState([]);
  const [show, setShow] = useState(false);

  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [amount, setAmount] = useState(0);
  const [myID, setMyId] = useState("");

  const Toggle = () => {
    setShow(!show);
  };

  const Toggle2 = () => {
    setShow(false);
  };

  const userSchema = yup
    .object({
      teamAScore: yup.string().required(),
      teamBScore: yup.string().required(),
      amount: yup.number().required(),
    })
    .required();
  type formData = yup.InferType<typeof userSchema>;

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<formData>({
    resolver: yupResolver(userSchema),
  });

  const Predict = async (ID: any) => {
    await axios.post(
      `http://localhost:3366/api/match/${id}/${myID}/create-prediction`,
      {
        teamAScore,
        teamBScore,
        amount,
      },
    );

    Toggle();
  };

  const getMatches = async () => {
    fetch(`http://localhost:3366/api/match/view-match`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setAllMatches(res.data);
      });
  };
  useEffect(() => {
    getMatches();
  }, []);
  return (
    <Container>
      {show ? (
        <OtherForm setShow={setShow} show={show} myID={myID} id={id} />
      ) : null}
      <Wrapper>
        <Title>View All Matches</Title>
        <Table>
          <table>
            <tr>
              <th>TeamsA</th>
              <th>TeamsB</th>
              <th>Odds</th>
              <th>Take Action</th>
            </tr>

            {allMatches?.map((el: any) => (
              <tr>
                <td>{el?.teamA} </td>
                <td>{el?.teamB} </td>
                <td>{el.Odds}</td>
                {/* <Link to={`/Prediction/${el._id}`}> */}
                <button
                  onClick={() => {
                    // Predict(el._id)
                    Toggle();
                    setMyId(el._id);
                  }}
                >
                  Predict Now
                </button>
                {/* </Link> */}
              </tr>
            ))}
          </table>
        </Table>
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

const Holder = styled.div`
  display: flex;
  button {
    width: 160%;
    height: 50px;
    background-color: #3184f7;

    color: #fff;
    border-radius: 5px;
    border: none;
    outline: none;
    margin-top: 60px;
    cursor: pointer;
    margin-right: 10px;
  }
`;
const Icon = styled.div`
  position: absolute;
  font-size: 25px;
  top: 15px;
  cursor: pointer;
`;
const Input = styled.input`
  height: 40px;
  padding-left: 15px;
  border-radius: 7px;
  outline-color: #39a081;
  outline-width: 3px;
  margin-top: 3px;
  border: 1px solid gray;
`;
const Tap2 = styled.div`
  h3 {
    margin: 0;
    font-size: 19px;
    font-weight: 500;
  }
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  input {
    margin: 0;
    font-size: 13px;
    font-weight: 500;
    padding: 15px;
    outline: none;
    border-radius: 5px;
    border: none;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  strong {
    font-size: 16px;
    margin-left: 15px;
  }
`;
const Tap = styled.div`
  h3 {
    margin: 0;
    font-size: 19px;
    font-weight: 500;
    margin-bottom: 40px;
  }
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  input {
    margin: 0;
    font-size: 13px;
    font-weight: 500;
    padding: 15px;
    outline: none;
    border-radius: 5px;
    border: none;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  strong {
    font-size: 16px;
    margin-left: 15px;
  }
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  /* background-color: #3184f7; */
  background-color: #4f71a1;
  color: #fff;
  font-size: 30px;
`;
const Card2 = styled.div`
  width: 300px;
  height: 150px;
  margin-top: 30px;
  background-color: #0d71fa;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 15px;
`;
const Wallet = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18px;
  margin-top: 15px;
  p {
    color: #fff;
    margin: 0;
  }
  h3 {
    color: #fff;
    margin-top: 5px;
    font-size: 23px;
  }
`;
const Wallets = styled.div`
  width: 330px;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Slidein = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 12345;
  position: fixed;
  justify-content: flex-end;
  animation: slide-in 0.5s ease-out;

  @keyframes slide-in {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;
const Img = styled.img`
  height: 45px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;
const P = styled.div`
  p {
    color: #718096;
    font-family: Karla, sans-serif;
    font-size: 0.875rem;
    margin: 0;
  }
  margin-top: 7px;
`;
const Bold = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const Left = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
