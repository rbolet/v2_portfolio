import { useContext } from "react";
import { ChatbotContext } from "./Chatbot";
import Message from "./Message";
import styles from "../../styles/Chatbot.module.css";

export default function MsgDisplay() {
  const { messages } = useContext(ChatbotContext);
  const MessageElements = messages.map((message) => {
    const randomKey = (Date.now() * Math.floor(Math.random() * 99999999 + 1)).toString(15);
    return <Message text={message.text} isResponse={message.source === "bot"} key={randomKey} />;
  });
  return (
    <>
      <div className={styles.messageContainer}>{MessageElements}</div>
    </>
  );
}
