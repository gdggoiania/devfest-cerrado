import React from "react";
import styles from "./marquee.module.css";

export const marqueeItems = Array(20).fill("DevFest Cerrado");
export const marqueeItemsBr = Array(20).fill("DevFest Cerrado");

const Marquee = ({
  items,
  reverse,
}: {
  items: string[];
  reverse?: boolean;
}) => (
  <section>
    <div className={styles.marqueeOuter}>
      <div
        className={reverse ? styles.marqueeInnerReverse : styles.marqueeInner}
      >
        <div className={styles.constructItens}>
          {items.map((item, index) => (
            <div key={index} className={styles.constructItem}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Marquee;
