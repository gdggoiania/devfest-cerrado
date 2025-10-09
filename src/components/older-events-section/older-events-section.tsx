/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Col, Container, Row } from "reactstrap";

import styles from "./older-events.module.css";

const OlderEvenstsSection: React.FC = ({}) => {
  return (
    <>
      <Container id="about">
        <Row>
          <Col lg={6} sm={12}>
            <h1 className={styles.DescriptionTitle}>
              {" "}
              O DevFest Cerrado é uma combinação do que há de melhor nos eventos
              dos GDGs
            </h1>

            <p className={styles.Description}>
              O objetivo é criar um ambiente dinâmico e estimulante, onde as
              pessoas participantes possam não apenas absorver conhecimento, mas
              também interagir com palestrantes, colegas de área e experts do
              setor. Essa abordagem proporciona um aprendizado mais
              significativo e enriquecedor, ao mesmo tempo em que promove
              conexões valiosas e amplia as perspectivas.
            </p>
          </Col>
          <Col lg={6} sm={12}>
            <div className={styles.VideoContainer}>
              {" "}
              <img src="fotoEncontroDevfest2023.jpeg" alt="" width="635px" />
            </div>
          </Col>
        </Row>
      </Container>
      {/* <div className={styles.MarqueeOuter}>
        <div className={styles.MarqueeInner}>
          <div className={styles.ConstructItems}>
            <div className={styles.ConstructItem}>
              {" "}
              <img src="devfestCerradoHorizontal.png" alt="" width="635px" />
            </div>
            <div className={styles.ConstructItem}>
              {" "}
              <img src="devfestCerradoHorizontal.png" alt="" width="635px" />
            </div>
            <div className={styles.ConstructItem}>
              {" "}
              <img src="devfestCerradoHorizontal.png" alt="" width="635px" />
            </div>
            <div className={styles.ConstructItem}>
              {" "}
              <img src="devfestCerradoHorizontal.png" alt="" width="635px" />
            </div>
            <div className={styles.ConstructItem}>
              {" "}
              <img src="devfestCerradoHorizontal.png" alt="" width="635px" />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default OlderEvenstsSection;
