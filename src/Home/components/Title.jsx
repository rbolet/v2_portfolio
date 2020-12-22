import Typist from "react-typist";
import styles from "../styles/Home.module.css";

export default function Title() {
  return (
    <div className={styles.title}>
      <p>
        Rapha
        <br />
        Bolet
        <br />
        {`Javascript`}
        <br />
        <style jsx>{`
          .Typist .Cursor {
            display: inline-block;
          }
          .Typist .Cursor--blinking {
            opacity: 1;
            animation: blink 1s linear infinite;
          }

          @keyframes blink {
            0% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}</style>
        <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }} avgTypingDelay={120}>
          <span>Engineer</span>
          <Typist.Backspace count={8} delay={1500} />
          <span>Creator</span>
          <Typist.Backspace count={7} delay={1500} />
          <span>Builder</span>
          <Typist.Backspace count={7} delay={1500} />
          <span style={{ color: "yellow" }}>Developer</span>
          <span className={styles.cursor}>|</span>
        </Typist>
      </p>
    </div>
  );
}
