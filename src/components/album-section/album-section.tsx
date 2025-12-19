/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { faCamera, faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BaseLayout from "../../layouts/base-layout";
import styles from "./album.module.css";

const AlbumSection = () => {
  return (
    <Container id="album" className={styles.album_container}>
      <h1 className={styles.Title}>Álbum oficial</h1>
      <Row>
        <Col className={styles.album_col}>
          <p>
            Que tal reviver alguns momentos? O álbum oficial do evento está
            pronto e você pode contribuir
          </p>

          <h2 className={styles.album_h2}>
            <a
              href="https://photos.google.com/u/4/share/AF1QipMdDc5Q6XJ6RzxujZ7n-gVZgMRein-1PX9rqTR43iWIadm5aUrbC7qNuAqZH9MJxw?key=NFg1dE1CZ09Iay1kUTc2elZPVVp1cXh5TXhOUzJn"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faCamera} />
              Fotos
            </a>
          </h2>

          <p>
            Quando postar nas redes sociais, use as{" "}
            <span className={styles.album_span}> #devfestcerrado #dfc</span> e marque{" "}
            <span className={styles.album_span}>
              <a href="https://www.instagram.com/devfest_cerrado/">
                @devfest_cerrado
              </a>
            </span>{" "}
            <span className={styles.album_span}>
              <a href="https://www.instagram.com/gdg_goiania/">@gdg_goiania</a>
            </span>{" "}
            <span className={styles.album_span}>
              <a href="https://www.instagram.com/wtm_goiania/">@wtm_goiania</a>
            </span>
            <br />
            <span className={styles.album_span}>
              <a href="https://www.linkedin.com/company/gdggoiania">LinkedIn</a>
            </span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

AlbumSection.layout = BaseLayout;

export default AlbumSection;
