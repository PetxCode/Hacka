import React from "react";
import styled from "styled-components";
import pic from "../../Assets/abPhone.webp";

const AppWorks = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Head>
            <div>
              <H>Wondering How the App Works?</H>
              <P>Predict in few simple steps</P>
              <Picture src={pic} />
            </div>
          </Head>
        </Wrapper>
      </Container>
    </div>
  );
};

export default AppWorks;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 95%;
  margin-top: 120px;
  @media screen and (min-width: 1200px) {
    display: flex;
    gap: 60px;
  }
`;
const H = styled.div`
  font-size: 31px;
  font-weight: bold;
  color: #333333;
  text-transform: capitalize;
  @media screen and (min-width: 1000px) {
    font-size: 40px;
  }
`;
const P = styled.div`
  margin-top: 20px;
  font-weight: 400;
  font-size: 14px;
  @media screen and (min-width: 1000px) {
    font-size: 20px;
  }
`;
const Head = styled.div`
  color: #383838;
  @media screen and (min-width: 1200px) {
    width: 25%;
  }
`;
const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  display: none;
  margin-top: 40px;
  @media screen and (min-width: 1200px) {
    display: block;
  }
`;
const Picture2 = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  margin-top: 40px;
  @media screen and (min-width: 1200px) {
    display: none;
  }
  @media screen and (min-width: 1000px) {
    width: 40%;
  }
`;
const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  @media screen and (min-width: 1200px) {
    width: calc(75% - 40px);
  }
`;
