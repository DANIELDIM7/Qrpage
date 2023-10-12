import React from "react";
import styled from "styled-components";
import fondo from "../img/bg-illustration.svg";
import InputDesign from "./InputDesign";

const ContainerFirst = styled.div`
  background-color: #111629;
  transform: scaleX(-1);
  padding: 50px;
 
`;

const ImageBg = styled.img`
  margin: 20px;
`;

const Container = () => {
  return (
    <>
      <ContainerFirst>
        <ImageBg src={fondo}></ImageBg>
        <InputDesign/>
        
      </ContainerFirst>
    </>
  );
};

export default Container;
