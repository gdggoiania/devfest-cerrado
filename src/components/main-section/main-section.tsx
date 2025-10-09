import React, { useEffect, useState } from "react";
import Marquee, {
  marqueeItems,
  marqueeItemsBr,
} from "components/marquee/marquee";
import styles from "./main.module.css";

const MainSection: React.FC = ({}) => {
  const [isFirstText, setIsFirstText] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFirstText((prev) => !prev);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <section>
        {/* <Marquee items={marqueeItems} /> */}
        <div className={styles.shining}>
          <h1 className={styles.shiningText}>
            {isFirstText ? "🚀DevFest Cerrado🚀" : "🚀DevFest Cerrado🚀"}
          </h1>
        </div>
      </section>
      <div id="about" className={styles.Container}>
        <div className={styles.TextContainer}>
          <h1 className={styles.Title}>O que é o DevFest Cerrado?</h1>
          <p className={styles.Description}>
            O DevFest é um evento de tecnologia, sem fins lucrativos, organizado
            pelas comunidades do Google Developers Groups (GDG) em todo o mundo,
            visando a troca de conhecimentos e o fomento tecnológico regional. O
            DevFest Cerrado é uma das edições brasileiras, organizado por
            pessoas voluntárias da comunidade do Google Developers Groups
            Goiânia (GDG Goiânia). Realizado desde 2014, é considerado uma das
            melhores conferências sobre tecnologias Google da América Latina. O
            evento também inclui palestras e atividades sobre uma ampla
            variedade de tópicos tecnológicos, abrangendo todos os níveis de
            conhecimento.
          </p>
        </div>
      </div>

      <section>
        {/* <Marquee items={marqueeItems} /> */}
        <div className={styles.shining}>
          <h1 className={styles.shiningText}>
            {isFirstText ? "🚀DevFest Cerrado🚀" : "🚀DevFest Cerrado🚀"}
          </h1>
        </div>
      </section>
    </main>
  );
};

export default MainSection;
