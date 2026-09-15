import { Container, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import configValues from "helpers/config";
import styles from "./location.module.css";

const LocationSection: React.FC = () => {
  return (
    <Container>
      <div>
        <h1 className={styles.Title}>Local</h1>
        <Col>
          <h4 className={styles.Subtitle}>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              size="sm"
              color="var(--blue)"
            />
            {configValues.place}
          </h4>
          <p className={styles.Paragraph}>
            <FontAwesomeIcon icon={faCalendar} size="sm" color="var(--blue)" />
            {configValues.formattedDate}
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.5098929372034!2d-49.280183124021256!3d-16.701391445943887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef135ffc04bdd%3A0xae4b03d3886b2287!2sEspa%C3%A7o%20Equatore!5e0!3m2!1spt-BR!2sbr!4v1789481169433!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{border: 0}}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
      </div>
    </Container>
  );
};

export default LocationSection;
