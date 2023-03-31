import React, { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import styled from "styled-components";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { string } from "yup";

interface iProps {
  // Toggle?: () => void;
  // toggleShow?: () => void;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
  myID: string;
  id: string;
}

const url: string = "http://localhost:3366";

const OtherForm: React.FC<iProps> = ({ setShow, show, myID, id }) => {
  const navigate = useNavigate();
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [amount, setAmount] = useState(0);

  const Predict = async (ID: any) => {
    await axios.post(
      `http://localhost:3366/api/predict/${id}/${myID}/create-prediction`,
      {
        teamAScore,
        teamBScore,
        amount,
      },
    );

    setShow(false);
  };
  useEffect(() => {}, [id]);
  return (
    <Container>
      <Card>
        <Cont>
          <FirstHold>
            <Text>Start</Text>
            <Cancel
              onClick={() => {
                setShow(false);
              }}
            >
              <MdOutlineClose />
            </Cancel>
          </FirstHold>

          <span>Start</span>
          <br />
          <br />
          <Holden></Holden>
          <InpHold>
            <Title>Team A Score:</Title>
            <Input
              type="number"
              placeholder="Team A Score "
              value={teamAScore}
              onChange={(e: any) => {
                setTeamAScore!(e.target.value);
              }}
              required
            />
            <br />

            <>
              <Title>Team B Score:</Title>
              <Input
                placeholder={`Team A Score`}
                value={teamBScore}
                onChange={(e: any) => {
                  setTeamBScore!(e.target.value);
                }}
                required
              />
            </>

            <br />

            <>
              <Title>Bet Amount:</Title>
              <Input
                placeholder={`Bet Amount`}
                value={amount}
                onChange={(e: any) => {
                  setAmount!(e.target.value);
                }}
                required
              />
            </>

            <br />
          </InpHold>
          <ButtonHold>
            {amount !== 0 ? (
              <Button2
                onClick={() => {
                  Predict(myID);
                  console.log("props; ", myID);
                  console.log("id", id);
                }}
                style={{ backgroundColor: "#1da1f2", color: "white" }}
              >
                {show ? <>Loading...</> : <>Create Prediction</>}
              </Button2>
            ) : (
              <>
                {show ? (
                  <Button2>Loading...</Button2>
                ) : (
                  <Button2
                    style={{
                      cursor: "not-allowed",
                    }}
                  >
                    Proceed
                  </Button2>
                )}
              </>
            )}
          </ButtonHold>
        </Cont>
      </Card>
    </Container>
  );
};

export default OtherForm;

const Holden = styled.div`
  display: flex;
`;

const ButtonHold = styled.div`
  margin-top: 20px;
  /* background-color: red; */
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Button3 = styled.div`
  height: 40px;
  width: 120px;
  background-color: none;
  color: #1da1f2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-right: 10px;
  border: 1px solid #1da1f2;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    transform: scale(0.97);
  }
`;
const Button2 = styled.div`
  text-align: center;
  height: 40px;
  width: 150px;
  background-color: #dcdada;
  /* color: #1da1f2; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 13px;
  font-family: Poppins;
  text-transform: uppercase;
  line-height: 1.1;
  font-weight: 700;
  /* border: 1px solid #1da1f2; */
  cursor: pointer;
  transition: all 350ms;
  :hover {
    transform: scale(0.97);
  }
`;

const InpHold = styled.div`
  margin-top: 10px;
`;
const Title = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  height: 35px;
  width: 97%;
  background-color: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding-left: 10px;
  border: 1px solid #f4f4f4;
  transition: all 350ms;
  outline: none;
  ::placeholder {
    font-family: Poppins;
  }
`;

const Cancel = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #eeeeee;
  }
`;
const FirstHold = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid silver;
  margin-bottom: 5px;
`;
const Text = styled.div`
  font-weight: bold;
  text-transform: uppercase;
`;
const Cont = styled.div`
  width: 90%;
  height: 100%;
  margin-top: 10px;
  span {
    font-size: 13px;
  }
`;

const Card = styled.div`
  position: absolute;
  min-height: 300px;
  width: 500px;
  background-color: white;
  margin-top: 100px;
  border-radius: 5px;
  transition: all 350ms;
  display: flex;
  justify-content: center;
  z-index: 20;
  padding-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media screen and (max-width: 768px) {
    width: 97%;
  }
`;

const Container = styled.div`
  position: absolute;
  //   background-color: rgba(30, 145, 243, 0.3);
  height: 100%;
  width: 100%;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  z-index: 10;
  left: 0;
  //   top: -240px;
  //   padding-top: 100px;
`;
