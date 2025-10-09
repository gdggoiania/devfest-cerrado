/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Container, Row } from "reactstrap";
import BaseLayout from "../../layouts/base-layout";
import styles from "./certification.module.css";

const CertificationSection = () => {
  return (
    <Container id="certificate">
      <Row>
        <h1 className={styles.Title}>Certificado</h1>
        <script
          src="https://doity.com.br/js/box_inscricao.js"
          type="text/javascript"
        ></script>{" "}
        <iframe
          scrolling="0"
          id="iframe-inscricao"
          style={{ width: "100%", height: "500px", border: "none" }}
          src="https://doity.com.br/devfest-cerrado-2024/certificados?box=1"
        >
          {" "}
        </iframe>{" "}
        <p
          style={{
            textAlign: "center",
            color: "#666672",
            fontSize: "14px",
            fontFamily: "'Open Sans', Helvetica, Arial, sans-serif",
            fontWeight: "bolder",
          }}
        >
          {" "}
          Caso n&atilde;o encontre seu certificado{" "}
          <a target="_blank" href="https://doity.com.br/devfest-cerrado-2024">
            clique aqui{" "}
          </a>{" "}
        </p>
      </Row>
    </Container>
  );
};

CertificationSection.layout = BaseLayout;

export default CertificationSection;
