/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Col, Row } from "reactstrap";
import { Speaker } from "models/speaker";
import _speakers from "../../hooks/useSpeakers";
import styles from "./schedule.module.css";

const speakers: Array<Speaker> = _speakers;

interface ScheduleCardProps extends Speaker {
  lgValue: number;
  room?: string;
  speakers?: {
    topic?: string;
    speaker_id?: number;
    start: string;
    end: string;
  }[];
}

const pathHtml = (name: string, path: string, pathStyle: string) => {
  return (
    <div className={`${styles.path_div} ${pathStyle}`}>
      {/*<Image
            unoptimized
            className={styles.card_path_icon}
            src={path}
            height="15px"
            width="15px"
        />*/}
      <span>{name}</span>
    </div>
  );
};

const renderPath = (path?: string) => {
  switch (path) {
    case "1":
      return pathHtml(
        "Trilha: Folia de Reis",
        `/${path}.png`,
        styles.path_1_color
      );
    case "2":
      return pathHtml(
        "Trilha: Dança Catira",
        `/${path}.png`,
        styles.path_2_color
      );
    case "3":
      return pathHtml(
        "Trilha: Moda de Viola",
        `/${path}.png`,
        styles.path_3_color
      );
    case "4":
      return pathHtml(
        "Trilha: O Violeiro",
        `/${path}.png`,
        styles.path_4_color
      );
    case "5":
      return pathHtml(
        "Trilha: Sertanejo Raiz",
        `/${path}.png`,
        styles.path_5_color
      );
    default:
      return pathHtml(
        "Trilha: Rasqueado",
        `/${path}.png`,
        styles.path_default_color
      );
  }
};

const ScheduleCard: React.FC<ScheduleCardProps> = (props) => {
  const getPillColor = (tech: string) => {
    switch (tech) {
      case "Carreira":
        return "primary";
      case "Machine Learning":
        return "secondary";
      case "Web":
        return "danger";
      case "UI/UX":
        return "info";
      case "Infra/Devops":
        return "warning";
      default:
        return "success";
    }
  };

  const getBoderColor = (tech: string) => {
    switch (tech) {
      case "1":
        return "var(--green)";
      case "2":
        return "var(--blue)";
      case "3":
        return "var(--yellow)";
      case "4":
        return "var(--red)";
      case "5":
        return "var(--gray)";
      default:
        return "var(--white)";
    }
  };

  return (
    <>
      {props.speakers && (
        <Col xxl={props.lgValue} sm={12} className={styles.card_text}>
          <Row className={styles.card_content}>
            <div className={styles.path_wrapper}>
              {props.room && renderPath(props.room)}
            </div>

            {props.speakers.map((spk, index) => {
              const speak = speakers.find((obj) => obj.id === spk.speaker_id);
              return (
                <div key={index}>
                  <Row className={styles.card_title}>
                    <div>
                      {speak ? (
                        <span className={styles.margin_right_15}>
                          {speak.title}
                        </span>
                      ) : (
                        <span className={styles.margin_right_15}></span>
                      )}
                    </div>
                  </Row>
                  <Row className={styles.card_time}>
                    <div className={styles.duration}>
                      <span>{spk.start}</span>
                      <span className={`${styles.timeSeparator}`}>-</span>
                      <span className={styles.opacity60}>{spk.end}</span>
                    </div>
                  </Row>

                  {speak ? (
                    <p style={{ marginTop: "5px", fontSize: "16px" }}>
                      {speak.topic}
                    </p>
                  ) : (
                    <></>
                  )}
                  {speak && speak.photo && (
                    <Row className={styles.display_inline_block}>
                      <div className={styles.div_wrapper}>
                        <img
                          className={styles.card_image}
                          src={`${speak.photo}`}
                          alt={`Foto ${speak.name}`}
                          height="40px"
                          width="40px"
                        />
                        <div className={styles.card_speaker_info_content}>
                          <p>{speak.name}</p>

                          {speak.community && (
                            <p className={styles.gde}>{speak.community}</p>
                          )}
                          <p
                            className={styles.card_speaker_tech}
                          >{`${speak.tech}`}</p>
                        </div>
                      </div>
                    </Row>
                  )}
                  {props.speakers && props.speakers.length > 1 && index == 0 ? (
                    <hr style={{ width: "100%", margin: "10px 0px" }}></hr>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
          </Row>
        </Col>
      )}
      {!props.speakers && (
        <Col xxl={props.lgValue} sm={12} className={styles.card_text}>
          <Row className={styles.card_content}>
            <div className={styles.path_wrapper}>
              {props.path && renderPath(props.path)}
            </div>
            <Row className={styles.card_title}>
              <div>
                <span className={styles.margin_right_15}>{props.topic}</span>
              </div>
            </Row>
            {props.photo && (
              <Row className={styles.display_inline_block}>
                <div className={styles.div_wrapper}>
                  <img
                    className={styles.card_image}
                    src={`/speakers/${props.photo}`}
                    alt={`Foto ${props.name}`}
                    height="40px"
                    width="40px"
                  />
                  <div className={styles.card_speaker_info_content}>
                    <h5>{props.name}</h5>

                    {props.community && (
                      <p className={styles.gde}>{props.community}</p>
                    )}
                    <p
                      className={styles.font_size_14}
                    >{`${props.companyTitle}`}</p>
                  </div>
                </div>
              </Row>
            )}
          </Row>
        </Col>
      )}
    </>
  );
};

export default ScheduleCard;
