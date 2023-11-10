import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../Context";

const InputContainer = styled.div`
  width: 600px;
  height: 50px;
  border: 2px solid #3762e4;
  background-color: #030617;
  border-radius: 14px;
  padding-left: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const InputPrimary = styled.input`
  width: 400px;
  height: 30px;
  outline: none;
  border: none;
  background-color: transparent;
  color: #fff;
`;
const ButtonDesign = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 10px;
  background-color: #3762e4;
  border: none;
  color: white;
`;

const InputDesign = ({ onChange }) => {

  // Aquí se usa el context para traer los datos del usestate

  const contextDatos = useContext(Context);
  

  const handleChange = (e) => {
    contextDatos.actualizarValor(e.target.value);
  };

  return (
    <InputContainer>
      <InputPrimary placeholder="Enter an Url" onChange={handleChange} />
      <ButtonDesign>QRCode</ButtonDesign>
    </InputContainer>
  );
};

export default InputDesign;
