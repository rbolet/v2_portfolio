import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { ChatbotContext } from "./Chatbot";
import styles from "../../styles/Chatbot.module.css";

export default function ChatInput() {
  const [thinking, setThinking] = useState(false);
  const { addMessage } = useContext(ChatbotContext);
  return (
    <div className={styles.inputContainer}>
      {thinking && <Thinking />}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addMessage({ text: "check the log", source: "bot" });
        }}
        className={styles.form}
      >
        <TextInput />
        <button className={styles.button} type="submit">
          <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: "1.25rem" }} />
        </button>
      </form>
    </div>
  );
}

function TextInput() {
  return <input className={styles.textInput} id="text-input" />;
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
