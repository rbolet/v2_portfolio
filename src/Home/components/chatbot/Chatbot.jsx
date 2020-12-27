import { createContext, useState, useEffect } from "react";
import styles from "../../styles/Chatbot.module.css";
import getBotResponse from "./botlogic";
import ChatInput from "./ChatInput";
import MsgDisplay from "./MsgDisplay";

export const ChatbotContext = createContext(null);

function ChatbotProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");
  const [thinking, setThinking] = useState(false);

  useEffect(() => {
    if (!question) return;
    setTimeout(() => {
      const botResponse = getBotResponse(question);
      addMessage({ text: botResponse, source: "bot" });
      setQuestion("");
      setThinking(false);
    }, 500);
  }, [question]);

  function askBot(text) {
    addMessage({ text, source: "user" });
    setThinking(true);
    setQuestion(text);
  }

  function addMessage(newMessage) {
    setMessages([newMessage, ...messages]);
  }

  return (
    <ChatbotContext.Provider value={{ messages, askBot, thinking }}>
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
