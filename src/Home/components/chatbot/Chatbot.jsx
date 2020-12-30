import { createContext, useState, useEffect } from "react";
// import { Page } from "react-pdf";
// import { Document } from "react-pdf/dist/esm/entry.webpack";
import getBotResponse from "./botlogic";
import ChatInput from "./ChatInput";
import MsgDisplay from "./MsgDisplay";
import styles from "../../styles/Chatbot.module.css";
export const ChatbotContext = createContext(null);

function ChatbotProvider({ children }) {
  const [question, setQuestion] = useState("");
  const [thinking, setThinking] = useState(false);
  const [isNew, setIsNew] = useState(true);
  const [userMessage, setUserMessage] = useState("");
  const [botMessageStack, setBotMessageStack] = useState([]);

  useEffect(() => {
    if (!question) return;
    const response = getBotResponse(question);
    setBotMessageStack(response);
    setQuestion("");
  }, [question]);

  useEffect(() => {
    if (isNew) {
      setThinking(true);
      setTimeout(() => {
        setQuestion("intro");
      }, 1000);
      setIsNew(false);
    }
  }, [isNew]);

  function askBot(text) {
    setUserMessage(text);
    setQuestion(text);
  }

  return (
    <ChatbotContext.Provider
      value={{
        askBot,
        thinking,
        setThinking,
        userMessage,
        setUserMessage,
        botMessageStack,
        setBotMessageStack,
      }}
    >
      {children}
    </ChatbotContext.Provider>
  );
}

export default function Chatbot() {
  return (
    <ChatbotProvider>
      <div className={styles.border}>
        <div className={styles.container}>
          <MsgDisplay />
          <ChatInput />
        </div>
      </div>
    </ChatbotProvider>
  );
}
