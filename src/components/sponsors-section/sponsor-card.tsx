import React from "react";
import Image from "next/image";
import { Sponsor } from "models/sponsor";
import styles from "./sponsors.module.css";

interface SponsorCardProps extends Sponsor {
  isStaff?: boolean;
}

const SponsorCard: React.FC<SponsorCardProps> = (sponsor) => {
  return (
    <div className={styles.SponsorCard}>
      <a href={sponsor.url} target="_blank" rel="noreferrer">
        <div className={styles.SponsorCardBody}>
          <Image
            unoptimized
            src={sponsor.logo}
            width={200}
            height={100}
            className={styles.SponsorCardBodyImage}
            alt={sponsor.name}
            loading="lazy"
          ></Image>
        </div>
      </a>
    </div>
  );
};

export default SponsorCard;
