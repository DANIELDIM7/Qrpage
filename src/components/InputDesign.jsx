import React, { useContext } from "react";
import QrPage from "../pages/QrPage";
import styled from "styled-components";
import { Context } from "../Context";
import { Link } from "react-router-dom";

const InputContainer = styled.div`
  width: ${(props) =>{
    if(props.size === 'sm'){
    return '100%'
    } else if (props.size ==='md'){
      return '100%'
    } else {
      return '600px'
    }
  }}
   
   ;
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
  width: ${(props) =>{
    if(props.size === 'sm'){
    return '100px'
    } else if(props.size ==='md'){
      return '100px'
    } else {
      return '600px'
    }
  }}
   
   ;
  
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
  &:hover{background-color: #9090f1; cursor: pointer;}
`;

const InputDesign = () => {
  // Aquí se usa el context para traer los datos del usestate

  const contextDatos = useContext(Context);

  const handleChange = (e) => {
    contextDatos.actualizarValor(e.target.value);
  };

  return (
    <InputContainer>
      <InputPrimary placeholder="Enter an Url" onChange={handleChange} />
      <Link to={'/Qrpage'}>
        <ButtonDesign>QRCode</ButtonDesign>
      </Link>
    </InputContainer>
  );
};

export default InputDesign;
