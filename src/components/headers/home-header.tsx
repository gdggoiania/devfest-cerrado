/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import configValues from "helpers/config";
import { changeTimeZone, calcDateDistance } from "helpers/date";
import styles from "./home-header.module.css";

const DATE_DISTANCE_LABELS: Record<string, string> = {
  days: "Dias",
  hours: "Horas",
  minutes: "Minutos",
  seconds: "Segundos",
};

const HomeHeader: React.FC = ({}) => {
  const { width, height, isMobile, isTablet, isDesktop } =
    useWindowDimensions();

  useEffect(() => {}, [width, height, isMobile, isTablet, isDesktop]);

  const [_dateDistance, _setDateDistance] = useState({
    distance: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  } as Record<string, number>);

  useEffect(() => {
    const _interval = setInterval(function () {
      const _result = calcDateDistance(
        changeTimeZone(configValues.eventDate, "America/Sao_Paulo")
      );

      if (_result.distance < 0) {
        clearInterval(_interval);
        return;
      }

      _setDateDistance(_result);
    }, 1000);

    return () => {
      clearInterval(_interval);
    };
  }, []);

  return (
    <header>
      <section className={styles.HeaderContainer}>
        <picture>
          <source media="(min-width: 1024px)" srcSet="/capa-email-4.png" />
          <source
            media="(max-width: 768px)"
            srcSet="/headerDevfest2024msite.png"
          />
          {/* <source media="(max-width: 480px)" srcSet="/capa-email-4.png" /> */}
          <img src="/capa-email-4.png" alt="" loading="lazy" />
        </picture>

        <div className={styles.RegisterContainer}>
          <a
            className={styles.RegisterButton}
            href={configValues.eventLinkRegistrationUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>&lt; INSCREVA-SE &gt;</span>
          </a>
          <a
            className={styles.c4pButton}
            href="https://docs.google.com/forms/d/e/1FAIpQLSe4QDYFc-DkrkODgwJ2TUvy1nivD743_Vh6rnVE2P8Nxf1jYQ/viewform"
            target="_blank"
            rel="noreferrer"
          >
            <span>&lt; CALL 4 PAPERS &gt;</span>
          </a>
        </div>
      </section>

      <section className={styles.Counter}>
        <ul className={styles.CounterList}>
          {Object.keys(DATE_DISTANCE_LABELS).map((key) => (
            <li className={styles.CounterListItem} key={key}>
              <span className={styles.CounterListItem__time}>
                {_dateDistance[key]}
              </span>
              {DATE_DISTANCE_LABELS[key]}
            </li>
          ))}
        </ul>
      </section>
    </header>
  );
};

export default HomeHeader;
