/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Container } from "reactstrap";
import BaseLayout from "../layouts/base-layout";
import styles from "../styles/about.module.css";

interface AboutProps {}

const About = ({}: AboutProps) => {
  return (
    <div className={styles.pageDiv}>
      <Container fluid>
        <h1 className={styles.pageTitle}>O que é o DevFest Cerrado?</h1>
        <p className={styles.pageDescription}>
          O DevFest é um evento de tecnologia, sem fins lucrativos, organizado
          pelas comunidades do Google Developers Groups (GDG) em todo o mundo,
          visando a troca de conhecimentos e o fomento tecnológico regional. O
          DevFest Cerrado é uma das edições brasileiras, organizado por pessoas
          voluntárias da comunidade do Google Developers Groups Goiânia (GDG
          Goiânia). Realizado desde 2014, é considerado uma das melhores
          conferências sobre tecnologias Google da América Latina. O evento
          também inclui palestras e atividades sobre uma ampla variedade de
          tópicos tecnológicos, abrangendo todos os níveis de conhecimento.
        </p>

        <h2 className={styles.pageTitle}>
          O DevFest Cerrado é uma combinação do que há de melhor nos eventos dos
          GDGs
        </h2>
        <p className={styles.pageDescription}>
          Realizado anualmente desde 2014, o DevFest Cerrado é uma combinação do
          que há de melhor nos eventos dos GDGs. O objetivo é criar um ambiente
          dinâmico e estimulante, onde as pessoas participantes possam não
          apenas absorver conhecimento, mas também interagir com palestrantes,
          colegas de área e experts do setor.
        </p>

        <h2 className={styles.pageTitle}>
          O DevFest Cerrado é feito pela comunidade para a comunidade!{" "}
        </h2>
        <p className={styles.pageDescription}>
          Todo o trabalho realizado pelas pessoas integrantes da comunidade é
          realizado de forma voluntária, o que também se reflete na organização
          do DevFest. Isso significa que todo o valor arrecadado por meio de
          ingressos, patrocínios e parcerias é totalmente revertido para a
          realização do evento e todas as suas necessidades.{" "}
        </p>

        <h2 className={styles.pageTitle}>O que esperar da edição?</h2>
        <ul className={styles.pageDescription}>
          <li>Keynotes com palestrantes renomados no Brasil e exterior;</li>
          <li>Diversas palestras, divididas em trilhas simultâneas;</li>
          <li>Palestras com Google Experts e Googlers;</li>
          <li>Palestras com profissionais de comunidades de Goiás;</li>
          <li>
            Palestras com profissionais influenciadores de diversos outros
            estados;
          </li>
          <li>Conteúdos sobre diversos temas e tecnologias;</li>
          <li>Sorteio de brindes;</li>
          <li>
            Espaço Kids com oficinas de programação e brincadeiras para
            crianças;
          </li>
          <li>
            Café da manhã e coffee Break, respeitando as restrições alimentares
            de cada pessoa;
          </li>
          <li>Estandes de patrocinadores e grupos estudantis;</li>
          <li>
            Teremos uma sala preparada para pessoas com sensibilidade sensorial.
          </li>
        </ul>

        {/* <section>
          <Row className={styles.pageRow}></Row>
        </section>

        <section>
          <div className={styles.sliderContainer}>
            <div className={styles.slide}>
              <img src="/photos/iwd2023AllPeople.jpg" alt="" loading="lazy" />
            </div>
            <div className={styles.slide}>
              <img
                src="/photos/iwd2023StaffSpeakers.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className={styles.slide}>
              <img
                src="/photos/iwd2023StaffSpeakersFull.JPG"
                alt=""
                loading="lazy"
              />
            </div>
            <div className={styles.slide}>
              <img
                src="/photos/iwd2023StaffSpeakersFullBright.JPG"
                alt=""
                loading="lazy"
              />
            </div>
            <div className={styles.slide}>
              <img src="/photos/iwd2023Outside1.JPG" alt="" loading="lazy" />
            </div>
            <div className={styles.slide}>
              <img src="/photos/iwd2023Outside2.JPG" alt="" loading="lazy" />
            </div>
          </div>
        </section>

        <div className={styles.toastContainer}>
          <span>DevFest</span>
          <span className={styles.toastContent}></span>
        </div> */}
      </Container>
    </div>
  );
};

About.layout = BaseLayout;

export default About;
