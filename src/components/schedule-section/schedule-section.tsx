import React from "react";
import { Col, Container, Row } from "reactstrap";
import ScheduleCard from "./schedule-card";
import ScheduleTime from "./schedule-time";
import { Speaker } from "models/speaker";
import { Schedule } from "models/schedule";
import _speakers from "../../hooks/useSpeakers";
import _schedule from "../../hooks/useSchedule";
import styles from "./schedule.module.css";

interface SpeakersSectionProps {
  speakers: Array<Speaker>;
  schedule: Array<Schedule>;
}

const ScheduleSection: React.FC<SpeakersSectionProps> = ({}) => {
  const speakers: Array<Speaker> = _speakers;
  const schedule: Array<Schedule> = _schedule;

  return (
    <>
      {speakers.length && (
        <Container id="schedule">
          <div>
            <h1 className={styles.Title}>Agenda</h1>
          </div>
          {schedule.map((schedule, index) => {
            return (
              <Row key={`schedule-${index}`} className={styles.row_content}>
                <ScheduleTime
                  initialTime={schedule.start}
                  endTime={schedule.end}
                />
                <Col xxl={11} sm={12}>
                  <Row className={styles.height100p}>
                    {schedule.speeches?.map((speech, index) => {
                      const speaker = speakers.find(
                        (speakerObj) => speakerObj.id === speech.speaker_id
                      );
                      if (speech?.topic) {
                        return (
                          <ScheduleCard
                            key={`speech-${schedule.start}-${schedule.end}-${index}`}
                            lgValue={13 / schedule.speeches.length}
                            {...speaker}
                            topic={speech.topic}
                            speakers={speech.speakers}
                            room={speech.room}
                          />
                        );
                      } else {
                        return (
                          <ScheduleCard
                            key={`speech-${schedule.start}-${schedule.end}-${index}`}
                            lgValue={12 / schedule.speeches.length}
                            {...speaker}
                          />
                        );
                      }
                    })}
                  </Row>
                </Col>
              </Row>
            );
          })}
        </Container>
      )}
    </>
  );
};

export default ScheduleSection;
