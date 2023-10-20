import React from "react";
import styled from "styled-components";
import fondo from "../img/bg-illustration.png";
import Logo from "../img/logo-qr-generator.svg";
import FondoQr from "../img/blur-bg.svg";

// Estilos

const ContainerFirst = styled.div`
  width: 100%;
  height: 100vh;
  padding: 50px;
  background-color: #111629;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position-x: right;
  display: flex;
  flex-direction: column;
`;

// Estilos logo
const ContainerLogo = styled.header`
  width: 100%;
  background-color: #111629;
  padding: 50px 0 0 50px;
`;

const ImgLogo = styled.img``;

const ContainerQr1 = styled.div`
  width: 400px;
  height: 400px;
  background-color: #1e2c517d;
  border-radius: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerQr2 = styled.div`
  width: 310px;
  height: 310px;
  background-color: #fff;
  border-radius: 25px;
`;

// Container Buttons

const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content:center;
  gap: 40px;
`;

const Button = styled.button`
  width: 200px;
  height: 70px;
  border-radius: 20px;
  border: none;
  background-color: #3762E4;
  color: #ffff;
  

`;

const QrPage = () => {
  return (
    <>
      <ContainerLogo>
        <ImgLogo src={Logo} />
      </ContainerLogo>
      <ContainerFirst
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundRepeat: "no-repeat",
          // backgroundPositionX: ',
        }}
      >
        <ContainerQr1>
          <ContainerQr2></ContainerQr2>
        </ContainerQr1>
        <ContainerButtons>
          <Button>Download</Button>
          <Button>Share</Button>
        </ContainerButtons>
      </ContainerFirst>
    </>
  );
};

export default QrPage;
