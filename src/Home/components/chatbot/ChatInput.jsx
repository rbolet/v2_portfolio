import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { ChatbotContext } from "./Chatbot";
import styles from "../../styles/Chatbot.module.css";

export default function ChatInput() {
  const [inputText, setInputText] = useState("");
  const { thinking, askBot } = useContext(ChatbotContext);

  function handleChange(text) {
    setInputText(text);
  }

  return (
    <div className={styles.inputContainer}>
      {thinking && <Thinking thinking={thinking} />}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!inputText) return;

          setInputText("");
          askBot(inputText);
        }}
        className={styles.form}
      >
        <TextInput handleChange={handleChange} inputText={inputText} />
        <button className={styles.button} type="submit">
          <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: "1.25rem" }} />
        </button>
      </form>
    </div>
  );
}

function TextInput({ handleChange, inputText }) {
  return (
    <input
      autoComplete={false}
      className={styles.textInput}
      id="text-input"
      value={inputText}
      onChange={(event) => {
        handleChange(event.target.value);
      }}
    />
  );
}

function Thinking({ thinking }) {
  return (
    <>
      <style jsx>{`
        .hide {
          visibility: hidden;
        }

        .show {
          visibility: visible;
        }

        .thinking {
          display: flex;
          position: absolute;
          top: -65px;
          left: 5px;
          z-index: 5;
          background-color: blue;
          width: fit-content;
          padding: 0.5rem 0.75rem;
          border-radius: 10px;
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
      <div className={`thinking ${thinking ? "show" : "hide"}`}>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </>
  );
}
