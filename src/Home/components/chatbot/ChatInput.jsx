import styles from "../../styles/Chatbot.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

export default function ChatInput() {
  return (
    <div className={styles.inputContainer}>
      <Thinking />
      <form className={styles.form}>
        <input className={styles.textInput} />
        <button className={styles.button}>
          <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: "1.25rem" }} />
        </button>
      </form>
    </div>
  );
}

function Thinking() {
  return (
    <>
      <style jsx>{`
        .thinking {
          display: flex;
          margin: 0 0.5rem;
        }

        .thinking span {
          animation: 1s blink infinite;
          vertical-align: middle;
          font-size: 2rem;
        }

        .thinking span:nth-child(2) {
          animation-delay: 250ms;
        }
        .thinking span:nth-child(3) {
          animation-delay: 500ms;
        }
        @keyframes blink {
          50% {
            color: transparent;
          }
        }
      `}</style>
      <div className="thinking">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </>
  );
}
