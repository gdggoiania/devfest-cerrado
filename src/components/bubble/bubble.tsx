import React from "react";
import styles from "./bubble.module.css";

const Bubble = ({ text }: { text: string }) => {
  return (
    <div>
      <BubbleText text={text} />
    </div>
  );
};

const BubbleText = ({ text }: { text: string }) => {
  return (
    <h2 className={styles.h2}>
      {text.split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default Bubble;
