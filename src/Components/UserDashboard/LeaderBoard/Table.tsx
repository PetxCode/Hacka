import React, { useState } from "react";
import styled from "styled-components";
import img from "../Assets/person.png";

import { FaGoogleWallet } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";


import { NavLink } from "react-router-dom";
// import { UseAppSelector } from "../Global/Store";
import { useQuery } from "@tanstack/react-query";
import Cards from "../Cards";
import Recent from "../Recent";
import Latesttransact from "../Latesttransact";

// import { getOneAdmin } from "../api/adminEndpoints";

const Table = () => {
  const [show, setShow] = useState(false);

  const Toggle = () => {
    setShow(!show);
  };

  const Toggle2 = () => {
    setShow(false);
  };

  // const user = UseAppSelector((state) => state.Admin);
  // const getAdmin = useQuery({
  //   queryKey: ["singleAdmin"],
  //   queryFn: () => getOneAdmin(user?._id),
  // });
  // console.log("this is getadmin", getAdmin);

  return (
    <Container>
      <Wrapper>
       
      
        <Recent />

      </Wrapper>
    </Container>
  );
};

export default Table;







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
const Wrapper = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-top: 90px;
`;

const Container = styled.div`
  width: calc(100% - 19%);
  display: flex;
  justify-content: center;
  margin-left: 260px;
  overflow: hidden;
  height: 100vh;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-left: 0px;
  }
  /* background-color: red; */
`;
