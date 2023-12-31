import React, { useContext, useRef } from "react";
import styled from "styled-components";
import fondo from "../img/bg-illustration.png";
import Logo from "../img/logo-qr-generator.svg";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import html2canvas from "html2canvas";
import clipboardCopy from "clipboard-copy";

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
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Container Buttons

const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const Button = styled.button`
  width: 200px;
  height: 70px;
  border-radius: 20px;
  border: none;
  background-color: #3762e4;
  color: #ffff;
`;

const QrPage = () => {
  // Datos provenientes del context
  const ContextDatos = useContext(Context);
  // const ValueQr = Context;
  const { InputValue } = ContextDatos;

  // Ref para el contenedor del qr
  const qrContainerRef = useRef(null);

  // Función que genera la descarga del qr
  const handleDownload = () => {
    html2canvas(qrContainerRef.current).then((canvas) => {
      // Crea un enlace de descarga con la imagen generada
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "qr_code.png";
      // Simula un clic en el enlace para iniciar la descarga
      link.click();
    });
  };

  // Función que copia el contenido del QR al portapapeles
  const handleCopy = () => {
    clipboardCopy(InputValue);
    alert("QR code copied to clipboard!");
  };

  return (
    <>
      <ContainerLogo>
        <Link to={"/"}>
          <ImgLogo src={Logo} />
        </Link>
      </ContainerLogo>
      <ContainerFirst
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundRepeat: "no-repeat",
        }}
        ref={qrContainerRef}
      >
        <ContainerQr1>
          <ContainerQr2>
            <QRCode value={InputValue}></QRCode>
          </ContainerQr2>
        </ContainerQr1>
        <ContainerButtons>
          <Button onClick={handleDownload}>Download</Button>
          <Button onClick={handleCopy}>Share</Button>
        </ContainerButtons>
      </ContainerFirst>
    </>
  );
};

export default QrPage;
