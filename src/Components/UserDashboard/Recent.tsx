import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosFootball } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
// import { getAllClients } from "../api/staffEndpoints";
import { useQuery } from "@tanstack/react-query";
// import { getOneAdmin } from "../api/adminEndpoints";
// import { UseAppSelector } from "../Global/Store";
import { NavLink, useNavigate } from "react-router-dom";
import { viewAllMatches } from "../api/User";
import Swal from "sweetalert2";
import * as yup from "yup";
import { CreatePrediction } from "../api/User";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { UseAppDispatch, UseAppSelector } from "../Global/Store";
import { Predict } from "../Global/reduxState";
import axios from "axios";

// const liveURL = "https://football-predict-api.onrender.com/api";
const liveURL = "http//localhost:3366/api";

const Recent = () => {
  const user = UseAppSelector((state) => state.Client);
  console.log("i am user: ", user);
  const navigate = useNavigate();
  const dispatch = UseAppDispatch();
  const userSchema = yup
    .object({
      teamAScore: yup.string().required("please enter a name"),
      teamBScore: yup.string().required("please enter an email"),
      amount: yup.number().required("please enter a username"),
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

  // const posting = useMutation({
  //   mutationFn: CreatePrediction(user?._id, ID, data),
  //   mutaionKey: ["predict"],

  //   onSuccess: (myData: any) => {
  //     dispatch(Predict(myData.data));
  //     Swal.fire({
  //       title: "User registered sucessfully",
  //       html: "redirecting to login",
  //       timer: 1000,
  //       timerProgressBar: true,

  //       willClose: () => {
  //         navigate("/userdashboard");
  //       },
  //     });
  //   },
  //   onError: (error: any) => {
  //     // console.log("error", error);
  //     // handle error here
  //     Swal.fire({
  //       title: "registration failed",
  //       text: "Something went wrong! .....make sure you fill in the valid details",
  //       icon: "error",
  //     });
  //   },
  // });

  const Submit = handleSubmit(async (data, ID) => {
    // console.log(data);
    await axios
      .post(`${liveURL}/${user?._id}/${ID}/create-prediction`, data)
      .then((res) => res.data);
  });

  const [show, setShow] = useState(false);

  const Toggle = () => {
    setShow(!show);
  };
  const Toggle2 = () => {
    setShow(false);
  };
  const [allMatches, setAllMatches] = useState([]);
  // const allMatches = useQuery({
  //   queryKey: ["allmatches"],
  //   queryFn: viewAllMatches,
  // });
  // console.log("THIS IS ALL MATCHES ", allMatches?.data?.data);

  // const getMatches = async () => {
  //   await axios.get(`${liveURL}/match/view-match`).then((res) => {
  //     console.log("Reading Matches: ", res);
  //     // setAllMatches(res.)
  //   });
  // };

  useEffect(() => {
    const getMatches = async () => {
      await axios.get(`${liveURL}/match/view-match`).then((res) => {
        console.log("Reading Matches: ", res);
        // setAllMatches(res.)
      });
    };
    getMatches();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>View All Matches</Title>
        <div>SHow</div>
        <Table>
          <table>
            <tr>
              <th>Team A</th>
              <th>Team A</th>
              <th>Odds</th>
            </tr>
            {allMatches.map((el: any) => (
              <tr onClick={Toggle} key={el?._id}>
                <td> {el?.name}</td>
                <td>number</td>
                <td>code</td>
                <button
                  onClick={() => {
                    Toggle();
                  }}
                >
                  Predict
                </button>

                {show ? (
                  <Slidein>
                    <Wallets>
                      <Icon onClick={Toggle2}>
                        <MdOutlineCancel />
                      </Icon>
                      <Card2>
                        <Circle>
                          <IoIosFootball />
                        </Circle>

                        <Wallet>
                          <p>Predict Your game</p>
                          <h3></h3>
                        </Wallet>
                      </Card2>

                      <Tap>
                        <h3>Match Details: </h3>
                        <input type="text" placeholder="Team A :" />
                      </Tap>

                      <Tap2>
                        <input type="text" placeholder="Team B :" />
                      </Tap2>

                      <Tap2>
                        <input type="text" placeholder="Game Odds :" />
                      </Tap2>

                      <Tap2>
                        <input type="text" placeholder="Prize" />
                      </Tap2>

                      <Holder>
                        <NavLink
                          to="/payment"
                          style={{ textDecoration: "none" }}
                        >
                          <button>Play Game</button>
                        </NavLink>

                        <NavLink
                          to="/payout"
                          style={{ textDecoration: "none" }}
                        >
                          <button>Checkout</button>
                        </NavLink>
                      </Holder>
                    </Wallets>
                  </Slidein>
                ) : null}
              </tr>
            ))}
          </table>
        </Table>

        <BtnHold>
          <Button>View More</Button>
        </BtnHold>
        {show ? (
          <Slidein>
            <Wallets>
              <Icon onClick={Toggle2}>
                <MdOutlineCancel />
              </Icon>
              <Card2>
                <Circle>
                  <IoIosFootball />
                </Circle>

                <Wallet>
                  <p>Predict Your game</p>
                  <h3></h3>
                </Wallet>
              </Card2>

              <Tap>
                <h3>Match Details: </h3>
                <input type="text" placeholder="Team A :" />
              </Tap>

              <Tap2>
                <input type="text" placeholder="Team B :" />
              </Tap2>

              <Tap2>
                <input type="text" placeholder="Game Odds :" />
              </Tap2>

              <Tap2>
                <input type="text" placeholder="Prize" />
              </Tap2>

              <Holder>
                <NavLink to="/payment" style={{ textDecoration: "none" }}>
                  <button>Play Game</button>
                </NavLink>

                <NavLink to="/payout" style={{ textDecoration: "none" }}>
                  <button>Checkout</button>
                </NavLink>
              </Holder>
            </Wallets>
          </Slidein>
        ) : null}
      </Wrapper>
    </Container>
  );
};

export default Recent;
const Icon = styled.div`
  position: absolute;
  font-size: 25px;
  top: 15px;
  cursor: pointer;
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
const Wallets = styled.div`
  width: 330px;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Slidein = styled.div`
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
