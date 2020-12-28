import { createContext, useState, useEffect } from "react";
import styles from "../../styles/Chatbot.module.css";
import getBotResponse from "./botlogic";
import ChatInput from "./ChatInput";
import MsgDisplay from "./MsgDisplay";

export const ChatbotContext = createContext(null);

function ChatbotProvider({ children }) {
  const [question, setQuestion] = useState("");
  const [thinking, setThinking] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [botMessageStack, setBotMessageStack] = useState([]);

  useEffect(() => {
    if (!question) return;
    const response = getBotResponse(question);
    setBotMessageStack(response);
  }, [question]);

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
