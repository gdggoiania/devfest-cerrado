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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.0133719365413!2d-49.24020732485102!3d-16.676214284094716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef19144104a85%3A0x17df488ca2d42621!2sHUB%20Goi%C3%A1s%20-%20Centro%20de%20Excel%C3%AAncia%20em%20Empreendedorismo%20Inovador!5e0!3m2!1spt-BR!2sbr!4v1759885857114!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
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
