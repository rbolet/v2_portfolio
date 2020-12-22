import styles from "../../styles/Chatbot.module.css";
import ChatInput from "./ChatInput";
import MsgDisplay from "./MsgDisplay";

export default function Chatbot() {
  return (
    <div className={styles.border}>
      <div className={styles.container}>
        <MsgDisplay />
        <ChatInput />
      </div>
    </div>
  );
}
