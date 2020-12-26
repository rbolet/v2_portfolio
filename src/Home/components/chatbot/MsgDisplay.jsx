import { useContext } from "react";
import { ChatbotContext } from "./Chatbot";
import Message from "./Message";
import styles from "../../styles/Chatbot.module.css";

export default function MsgDisplay() {
  const { messages } = useContext(ChatbotContext);
  const MessageElements = messages.map((message) => {
    return <Message text={message.text} isResponse={message.source === "bot"} />;
  });
  return (
    <>
      <div className={styles.messageContainer}>{MessageElements}</div>
    </>
  );
}
