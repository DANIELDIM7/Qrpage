import React from "react";
import styled from "styled-components";
import fondo from "../img/bg-illustration.png";
import InputDesign from "./InputDesign";
import logo from "../img/logo-qr-generator.svg";

const ContainerFirst = styled.div`
  height: 100vh;
  padding: 50px;
  background-color: #111629;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position-x: right;
`;

const ImgStyled = styled.img`
  width: 200px;
`;

const ContainerInput = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:20px;
  transform: scaleX();
`;

const Container = () => {
  return (
    <>
      <ContainerFirst
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundRepeat: "no-repeat",
          
        }}
      >
        <ContainerInput>
          <ImgStyled src={logo} />
          <InputDesign />
        </ContainerInput>
      </ContainerFirst>
    </>
  );
};

export default Container;
