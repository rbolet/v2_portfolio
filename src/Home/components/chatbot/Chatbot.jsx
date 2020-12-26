import { createContext, useState } from "react";
import styles from "../../styles/Chatbot.module.css";
import getBotResponse from "./botlogic";
import ChatInput from "./ChatInput";
import MsgDisplay from "./MsgDisplay";

export const ChatbotContext = createContext(null);

function ChatbotProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [thinking, setThinking] = useState(false);

  async function askBot(text) {
    addMessage({ text, source: "user" });
    setThinking(true);
    const botResponse = await getBotResponse(text);
    addMessage({ text: botResponse, source: "bot" });
    setThinking(false);
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
