import React, { useState } from "react";
import styled from "styled-components";
import { IoIosSearch, IoIosNotificationsOutline } from "react-icons/io";
import { FiMenu, FiPower } from "react-icons/fi";
import { IoIosRocket, IoMdPerson } from "react-icons/io";
import SideBar from "./SideBar";

import { MdDashboard } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Swal from "sweetalert2";
import { UseAppSelector } from "../Global/Store";

const Dashhead = () => {
  const navigate = useNavigate();
const user = UseAppSelector((state)=> state.Client)
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show4, setShow4] = useState(false);

  const Toggle = () => {
    setShow(!show);
  };

  const Toggle2 = () => {
    setShow2(!show2);
  };

  const Toggle3 = () => {
    setShow2(!show);
  };

  const Toggle4 = () => {
    setShow4(!show4);
  };
  return (
    <Container>
      <Wrapper>
        <Left onClick={Toggle}>
          <FiMenu />
        </Left>
        <Mid>
          <Welcome>
            <h3>
              Welcome Back <span>{user?.userName} </span>
            </h3>
          </Welcome>
        </Mid>
        <Right>
          <Icons>
            <IoIosNotificationsOutline />
            <Circle>2</Circle>
          </Icons>
          <Up>
            <Profile></Profile>
          </Up>
        </Right>
      </Wrapper>
      {show ? (
        <Hold onClick={Toggle3}>
          <Box>
            <Top>
              <Img2 src="image" />{" "}
            </Top>
            <Home>
              <Icon2>
                <MdDashboard />
              </Icon2>
              <NavLink
                to="/userdashboard"
                style={({ isActive }) => {
                  return {
                    textDecoration: isActive ? "none" : "none",
                    color: isActive ? "#2AA7FF" : "#3e4956",
                  };
                }}
              >
                <Text1>Dashboard</Text1>
              </NavLink>
            </Home>

            <Home2>
              <Icon2>
                <IoMdPerson />
              </Icon2>
              <NavLink
                to="/useViewBoard"
                style={({ isActive }) => {
                  return {
                    textDecoration: isActive ? "none" : "none",
                    color: isActive ? "#2AA7FF" : "#3e4956",
                  };
                }}
              >
                <Text2>leaderboard</Text2>
              </NavLink>
            </Home2>

            <Home2>
              <Icon2>
                <IoMdPerson />
              </Icon2>
              <Text3 onClick={Toggle4}>Match</Text3>
            </Home2>
            {show4 ? (
              <Staffs>
                <NavLink to="/userMatch" style={{ textDecoration: "none" }}>
                  <p>start-match</p>
                </NavLink>
              </Staffs>
            ) : null}

            <Home2>
              <Icon2>
                <IoMdPerson />
              </Icon2>
              <NavLink
                to="/Prediction"
                style={({ isActive }) => {
                  return {
                    textDecoration: isActive ? "none" : "none",
                    color: isActive ? "#2AA7FF" : "#3e4956",
                  };
                }}
              >
                <Text3>Prediction</Text3>
              </NavLink>
            </Home2>

            <Power
              onClick={() => {
                const swalWithBootstrapButtons = Swal.mixin({
                  customClass: {
                    confirmButton: "btn btn-success",
                    cancelButton: "btn btn-danger",
                  },
                  buttonsStyling: false,
                });

                swalWithBootstrapButtons
                  .fire({
                    title: "Are you sure you want to logout?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Yes, logout!",
                    cancelButtonText: "No, cancel!",
                    reverseButtons: true,
                  })
                  .then((result) => {
                    if (result.isConfirmed) {
                      // dispatch(logoutAdmin());
                      navigate("/optionsignin");
                      swalWithBootstrapButtons.fire(
                        "logout successful!",
                        "logout successful.",
                        "success"
                        //   navigate("/optionsignin")
                      );
                    } else if (
                      /* Read more about handling dismissals below */
                      result.dismiss === Swal.DismissReason.cancel
                    ) {
                      navigate("/dashboard");
                      swalWithBootstrapButtons.fire(
                        "Cancelled",
                        "still on dashboard :)",
                        "error"
                      );
                    }
                  });
              }}
            >
              <Icon2>
                <FiPower />
              </Icon2>
              <Text>Logout</Text>
            </Power>
          </Box>
        </Hold>
      ) : null}
    </Container>
  );
};

export default Dashhead;
const Welcome = styled.div`
  width: 170px;
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
  span {
    color: #0d71fa;
  }
`;
const Mid = styled.div`
  display: flex;
  align-items: center;
`;
const Box = styled.div`
  display: flex;
  width: 40%;
  height: 100vh;
  flex-direction: column;
  background-color: #fff;
  padding-left: 25px;
  left: 0;
  transition: all 350ms ease-in;
  @media screen and (max-width: 1024px) {
    width: 24%;
  }
  @media screen and (max-width: 500px) {
    width: 39%;
  }
  @media screen and (max-width: 375px) {
    width: 46%;
  }
`;
const Power = styled.div`
  width: 100%;
  display: flex;
  margin-top: 100px;
`;
const Staffs = styled.div`
  width: 100%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  p {
    margin-left: 40px;
  }
`;
const Text3 = styled.div`
  font-size: 17px;
  font-family: U8, sans-serif;
  cursor: pointer;
  /* color: #fff; */
  align-items: center;
  display: flex;
  margin-left: 15px;
  width: 410px;
  height: 40px;
  /* margin-bottom: 10px; */
  /* background-color: green; */
`;
const Text2 = styled.div`
  font-size: 17px;
  font-family: U8, sans-serif;
  cursor: pointer;
  /* color: #fff; */
  align-items: center;
  display: flex;
  margin-left: 15px;
  width: 410px;
  height: 40px;
  /* margin-bottom: 10px; */
  /* background-color: green; */
`;
const Home2 = styled.div`
  width: 100%;
  display: flex;
  margin-top: 25px;
  align-items: center;
`;
const Text1 = styled.div`
  font-size: 17px;
  font-family: U8, sans-serif;
  cursor: pointer;
  /* color: #fff; */
  align-items: center;
  display: flex;
  margin-left: 15px;
  width: 210px;
  height: 40px;
  /* margin-bottom: 10px; */
  /* background-color: white; */
`;
const Icon2 = styled.div`
  color: #3e4956;
  font-size: 23px;
  cursor: pointer;
`;
const Home = styled.div`
  width: 100%;
  display: flex;
  margin-top: 70px;
  align-items: center;
`;
const Img2 = styled.img`
  height: 30px;
  @media screen and (max-width: 1024px) {
    height: 25px;
  }
`;
const Top = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
`;
const Text = styled.div`
  margin-left: 25px;
`;
const Up = styled.div`
  display: flex;
  align-items: center;
`;
const Hold = styled.div`
  width: 18%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.4);
  left: 0;
  right: 0;
  position: fixed;
  margin-top: 80px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  /* border-top-right-radius: 120px; */
  z-index: 2;
  overflow: hidden;
  animation: slides 0.5s ease-in-out;

  @keyframes slides {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Left = styled.div`
  font-size: 25px;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 1024px) {
    display: flex;
  }
  @media screen and (max-width: 500px) {
    margin-left: 30px;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Profile = styled.div`
  width: 48px;
  height: 48px;
  font-size: 20px;
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;
  display: flex;
  margin-right: 35px;
  border-radius: 50px;
  font-weight: bold;
  color: black;
  border: 1px solid black;
  /* background-color: red; */
`;
const Circle = styled.div`
  width: 17px;
  height: 17px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: absolute;
  font-size: 13px;
  top: 20px;
`;
const Icons = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  font-size: 27px;
  margin-right: 30px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const Right = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  width: 120px;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    width: 30px;
  }
`;
const Input = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
`;
const Icon = styled.div`
  width: 70px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
`;
const Inputhold = styled.div`
  width: 350px;
  height: 45px;
  border-radius: 50px;
  border: 1px solid #f1f1f1;
  display: flex;
  overflow: hidden;
`;
const Wrapper = styled.div`
  width: 76%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 30px;
  justify-content: space-between;
  position: relative;
  @media screen and (max-width: 1024px) {
    width: 93%;
    justify-content: space-between;
    display: flex;
  }
  @media screen and (max-width: 500px) {
    width: 93%;
    justify-content: space-between;
    display: flex;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  position: fixed;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  z-index: 1;
  background-color: #fff;
  justify-content: flex-end;
  /* position: relative; */
  @media screen and (max-width: 500px) {
    justify-content: center;
    display: flex;
  }
`;
