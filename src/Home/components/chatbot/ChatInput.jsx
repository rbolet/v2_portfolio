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
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </div>
  );
}

function Thinking() {
  return (
    <div className={styles.thinking}>
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </div>
  );
}
