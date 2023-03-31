import React from "react";
import styled from "styled-components";
import rstar from "../Assets/stars.svg";
import lstar from "../Assets/stars.svg";
import phone from "../Assets/phone.png";
import football from "../Assets/football.png";
import flower from "../Assets/flower.svg";
import { BsPerson } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { TbSquareKey } from "react-icons/tb";
import * as yup from "yup";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
// import { UseAppDispatch } from "../Global/Store";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { registerClient } from "../Global/reduxState";
import { RegisterUser } from "../api/User";
import { useDispatch } from "react-redux";
import { UseAppDispatch } from "../Global/Store";
import axios from "axios";

// const liveURL = "https://football-predict-api.onrender.com/api";
const liveURL = "http://localhost:3366/api";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = UseAppDispatch();

  const userSchema = yup
    .object({
      name: yup.string().required("please enter a name"),
      email: yup.string().required("please enter an email"),
      userName: yup.string().required("please enter a username"),
      phoneNumber: yup.string().required("please your phone number"),
      password: yup.string().required("please enter a password"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "passwords must match")
        .required("please confirm your password"),
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

  const Submit = handleSubmit(async (data: any) => {
    // console.log(data);
    const { name, userName, email, password, phoneNumber, confirmPassword } =
      data;
    await axios
      .post(`${liveURL}/create`, {
        name,
        userName,
        email,
        password,
        phoneNumber,
        confirmPassword,
      })
      .then((res) => res.data);

    reset();
  });
  return (
    <div>
      <Container>
        <Left>
          <img
            src={rstar}
            alt=""
            style={{ position: "absolute", left: "75%", top: "20%" }}
          />
          <img
            src={lstar}
            alt=""
            style={{
              position: "absolute",
              top: "20%",
              left: "35px",
              height: "360px",
            }}
          />
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <h4>MAVERICKS</h4>
          </NavLink>
          <H1>
            Let’s Get <br /> You Started
          </H1>
          <p>
            You’re a few steps away. Fill the required form and predict scores
            for certain matches 😎
          </p>
          <Img src={football} alt="" />
          <img
            src={flower}
            alt=""
            style={{ position: "absolute", bottom: "1%", left: "1px" }}
          />
        </Left>
        <Right onSubmit={Submit}>
          <h2>Create an Account</h2>
          <p>Let us know you 😎</p>
          <Box>
            <Inputs>
              <BsPerson
                style={{
                  marginLeft: "15px",
                  fontSize: "25px",
                  color: "silver",
                }}
              />
              <input {...register("name")} placeholder="Name" type="text" />
              <Erro>{errors?.name && errors?.name?.message}</Erro>
            </Inputs>
            <Inputs>
              <BsPerson
                style={{
                  marginLeft: "15px",
                  fontSize: "25px",
                  color: "silver",
                }}
              />
              <input
                {...register("userName")}
                placeholder="UserName"
                type="text"
              />
              <Erro>{errors?.userName && errors?.userName?.message}</Erro>
            </Inputs>
            <Inputs>
              <IoMailOutline
                style={{
                  marginLeft: "15px",
                  fontSize: "25px",
                  color: "silver",
                }}
              />
              <input
                {...register("email")}
                placeholder="E-mail address"
                type="email"
              />
              <Erro>{errors?.email && errors?.email?.message}</Erro>
            </Inputs>
            <Inputs>
              <BsTelephone
                style={{
                  marginLeft: "15px",
                  fontSize: "25px",
                  color: "silver",
                }}
              />
              <input
                {...register("phoneNumber")}
                placeholder="Phone-no"
                type="text"
              />
              <Erro>{errors?.phoneNumber && errors?.phoneNumber?.message}</Erro>
            </Inputs>
            <Inputs>
              <TbSquareKey
                style={{
                  marginLeft: "15px",
                  fontSize: "25px",
                  color: "silver",
                }}
              />
              <input
                {...register("password")}
                placeholder="Password"
                type="password"
              />
              <Erro>{errors?.password && errors?.password?.message}</Erro>
            </Inputs>
            <Inputs>
              <TbSquareKey
                style={{
                  marginLeft: "15px",
                  fontSize: "25px",
                  color: "silver",
                }}
              />
              <input
                {...register("confirmPassword")}
                placeholder="Confirm password"
                type="password"
              />
              <Erro>
                {/* {errors?.confirmPassword && errors?.confirmPassword?.message}s */}
              </Erro>
            </Inputs>
          </Box>
          <Div>
            Already have an account{" "}
            <Span to="/sign-in" style={{ color: "#8246F3" }}>
              Login here
            </Span>
          </Div>
          <Button type="submit">Create Account</Button>
        </Right>
      </Container>
    </div>
  );
};

export default Signup;

const Erro = styled.span`
  font-size: 10px;
  color: red;
`;

const H1 = styled.h1`
  color: white;
  font-size: 44px;
  text-align: center;
  margin-top: 50px;
  animation: typing 4s steps(20);
  white-space: nowrap;
  overflow: hidden;
  /* border-right: 3px solid black; */

  @media screen and (max-width: 960px) {
    font-size: 30px;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

const Button = styled.button`
  width: 170px;
  height: 48px;
  margin-left: 60px;
  border: 0;
  background-color: #8246f3;
  color: white;
  border-radius: 10px;
  margin-top: 31px;
  font-size: 16px;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    margin: 0;
    margin-top: 20px;
    width: 80%;
  }
`;

const Div = styled.div`
  display: flex;
  margin-left: 60px;
  margin-top: 20px;
  align-items: center;

  @media screen and (max-width: 960px) {
    margin: 0;
    font-size: 10px;
    margin-top: 10px;
    width: 80%;
  }

  p {
    @media screen and (max-width: 960px) {
      font-size: 10px;
    }
  }
`;
const Span = styled(Link)`
  text-decoration: none;
  margin-left: 5px;
`;
const Inputs = styled.div`
  background-color: #f9f4ff;
  border-radius: 10px;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    margin-left: 7px;

    ::placeholder {
      color: silver;
    }
  }
`;

const Box = styled.div`
  width: 650px;
  height: 240px;
  /* background-color: green; */
  margin-left: 60px;
  display: grid;
  grid-template-rows: repeat(2, 65px);
  grid-template-columns: repeat(2, 1fr);
  gap: 23px;
  margin-top: 43px;

  @media screen and (max-width: 960px) {
    width: 90%;
    height: 480px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 60px);
    margin: 0;
    margin-top: 20px;
  }
`;

const Img = styled.img`
  height: 230px;
  margin-top: 25px;
  transform: translate(-20%, -20%);
  transition: transform 0.3s ease-in-out;
  position: absolute;
  left: 35%;
  bottom: 1px;

  animation: bounce 1s infinite;
  height: 150px;
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-80px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 960px) {
    position: static;
    height: 210px;
    margin-top: 60px;
    margin-left: 120px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  @media screen and (max-width: 960px) {
    display: block;
  }
`;
const Left = styled.div`
  width: 40%;
  height: 100vh;
  background-color: #8246f3;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
  h4 {
    color: white;
    font-size: 21px;
    font-family: Inria serif;
    font-weight: 600;
    margin-top: 30px;
  }

  p {
    color: white;
    margin: 0;
    margin-top: 10px;
    text-align: center;
    width: 65%;
    font-size: 23px;

    @media screen and (max-width: 960px) {
      font-size: 18px;
    }
  }
`;
const Right = styled.form`
  h2 {
    margin-top: 60px;
    margin-left: 60px;
    font-size: 36px;

    @media screen and (max-width: 960px) {
      margin: 0;
      margin-top: 10px;
      font-size: 25px;
    }
  }

  p {
    margin-left: 60px;
    margin-top: 45px;
    font-size: 20px;
    font-family: 600;

    @media screen and (max-width: 960px) {
      margin: 0;
      margin-top: 10px;
      font-size: 25px;
      font-size: 18px;
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
