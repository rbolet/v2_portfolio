import { createContext, useState } from "react";
import styles from "../../styles/Chatbot.module.css";
import ChatInput from "./ChatInput";
import MsgDisplay from "./MsgDisplay";

export const ChatbotContext = createContext(null);

function ChatbotProvider({ children }) {
  const [messages, setMessages] = useState([]);

  function addMessage(newMessage) {
    setMessages([newMessage, ...messages]);
  }

  return (
    <ChatbotContext.Provider value={{ messages, addMessage }}>{children}</ChatbotContext.Provider>
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
