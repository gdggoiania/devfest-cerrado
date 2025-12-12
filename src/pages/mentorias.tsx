import React from "react";
import { Col, Row, Container } from "reactstrap";
import _speakers from "../hooks/useSpeakers";
import BaseLayout from "../layouts/base-layout";
import SpeakerCard from "components/speakers-section/speaker-card";
import { Speaker } from "models/speaker";
import { getSpeakers } from "front-features/speakers";
import styles from "../components/speakers-section/speakers.module.css";

interface MentoriasPageProps {
  speakers: Array<Speaker>;
}

const MentoriasPage = ({}: MentoriasPageProps) => {
  const mentoriaIds = [23, 34, 35, 36, 37];
  const speakers: Array<Speaker> = _speakers.filter(speaker => 
    mentoriaIds.includes(speaker.id)
  );

  const constructSpeakerCol = (_speaker: Speaker) => {
    return (
      <Col
        lg="4"
        key={_speaker.id}
        className={`${styles.card_container} ${styles.pageCol}`}
      >
        <SpeakerCard {..._speaker} />
      </Col>
    );
  };

  return (
    <div className={styles.pageDiv}>
      <Container fluid>
        <h1 className={styles.pageTitle}>Mentorias</h1>
        <p className={styles.pageDescription}>
          As mentorias do DevFest Cerrado 2025 são uma oportunidade única de 
          aprendizado e desenvolvimento profissional. Conecte-se com profissionais 
          experientes que compartilharão conhecimentos valiosos sobre suas áreas 
          de atuação, oferecendo orientação personalizada para ajudar você a 
          avançar em sua carreira na tecnologia.
        </p>
        <p className={styles.pageDescription}>
          <strong>Informações importantes:</strong>
          <br />
          • Serão disponibilizados 20 slots por tema e horário
          <br />
          • As informações de pré-inscrição serão enviadas por email antes do evento
        </p>
        <div className={styles.call4Papers}>
          <button className={styles.call4PapersButton}>
            <a
              className={styles.call4PapersLink}
              href="https://fazai.bb.com.br/tot1"
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.call4PapersSpan}>
                Inscreva-se nas Mentorias
              </span>
            </a>
          </button>
        </div>
        <section>
          <Row className={styles.pageRow}>
            {speakers.map((speaker) => constructSpeakerCol(speaker))}
          </Row>
        </section>
      </Container>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const allSpeakers = await getSpeakers();
    const mentoriaIds = [23, 34, 35, 36];
    const filteredSpeakers = allSpeakers.filter(speaker => 
      speaker.id !== undefined && mentoriaIds.includes(speaker.id)
    );
    
    return {
      props: {
        speakers: filteredSpeakers,
      },
    };
  } catch (error) {
    console.error(error);
    return { props: { speakers: [] } };
  }
}

MentoriasPage.layout = BaseLayout;

export default MentoriasPage;
