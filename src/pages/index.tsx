import React, { useEffect } from "react";
import HomeHeader from "../components/headers/home-header";
import BaseLayout from "../layouts/base-layout";
import MainSection from "components/main-section/main-section";
import SpeakersSection from "../components/speakers-section/speakers-section";
import { Speaker } from "models/speaker";
import ScheduleSection from "components/schedule-section/schedule-section";
import { Schedule } from "models/schedule";
import SponsorsSection from "components/sponsors-section/sponsors-section";
import { SponsorLevel } from "models/sponsor-level";
import TicketsSection from "components/tickets-section/tickets-section";
import LocationSection from "components/location-section/location-section";
import CertificationSection from "components/certification-section/certification-section";
import AlbumSection from "components/album-section/album-section";
import styles from "../styles/about.module.css";

// https://alvarotrigo.com/blog/css-animations-scroll/
interface HomePageProps {
  speakers: Array<Speaker>;
  sponsors: { [key: string]: SponsorLevel };
  schedule: Array<Schedule>;
}

const Home = ({ speakers, sponsors, schedule }: HomePageProps) => {
  const sectionStyle = {
    paddingTop: "60px",
    background: "#f0f0f0",
  };

  const sectionTicketStyle = {
    paddingTop: "60px",
    background: "#f0f0f0",
    color: "#1e1e1e",
  };

  const reveal = () => {
    var reveals = document.querySelectorAll("section");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", reveal);
  });

  return (
    <>
      <div>
        <HomeHeader></HomeHeader>
        <section className={styles.element}>
          <MainSection />
        </section>
        {/* <section style={sectionStyle} className={styles.element}>
          <CertificationSection />
        </section> */}
        <section style={sectionStyle} className={styles.element}>
          <SpeakersSection speakers={speakers} />
        </section>
        {/* <section style={sectionStyle} className={styles.element}>
          <ScheduleSection speakers={speakers} schedule={schedule} />
        </section> */}
        {/* <section style={sectionStyle} className={styles.element}>
          <AlbumSection />
        </section> */}
        <section style={sectionTicketStyle}>
          <TicketsSection />
        </section>
        <section style={sectionStyle}>
          <LocationSection />
        </section>
        <section style={sectionStyle}>
          <SponsorsSection sponsors={sponsors} />
        </section>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  try {
    return {
      props: {
        speakers: "", // await getSpeakers(),
        sponsors: "", // await getSponsors(),
        schedule: "", // await getSchedule()
      },
    };
  } catch (error) {
    console.error(error);
    return { props: { speakers: [], sponsors: [] } };
  }
}

Home.layout = BaseLayout;

export default Home;
