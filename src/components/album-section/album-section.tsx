/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { faCamera, faVideoCamera} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BaseLayout from "../../layouts/base-layout";
import styles from "./album.module.css";

const AlbumSection = () => {
  return (
    <Container id="album" className={styles.album_container}>
      <h1 className={styles.Title}>Álbum oficial</h1>
      <Row>
        <Col className={styles.album_col}>
          <h2 className={styles.album_h2}>Adicione vídeos e fotos do evento</h2>

          <p>
            Que tal reviver alguns momentos? O álbum oficial do evento está
            pronto e você pode contribuir
          </p>
          <p>
            Acesse o link abaixo pra fazer o upload de vídeos e fotos que você
            capturou durante o evento
          </p>

          <h2 className={styles.album_h2}>
            <a
              href="https://photos.app.goo.gl/atofmR77z9oVwAyz8"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faCamera} />
              Fotos
            </a>
          </h2>

          <h2 className={styles.album_h2}>
            <a
              href="https://drive.google.com/drive/folders/107Ip38WrJ53S_hCwgC6XCa_MqbOLTGh4?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faVideoCamera} />
              Vídeos
            </a>
          </h2>

          <p>
            Quando postar nas redes sociais, use a{" "}
            <span className={styles.album_span}> #devfestcerrado</span> e marque
            o{" "}
            <span className={styles.album_span}>
              <a href="https://www.instagram.com/devfestcerrado/">
                @devfestcerrado
              </a>
            </span>{" "}
            e o{" "}
            <span className={styles.album_span}>
              <a href="https://www.instagram.com/stories/gdggoiania/">
                @gdggoiania
              </a>
            </span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

AlbumSection.layout = BaseLayout;

export default AlbumSection;
