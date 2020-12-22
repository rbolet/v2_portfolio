import styles from "../../styles/Chatbot.module.css";
import Message from "./Message";

export default function MsgDisplay() {
  return (
    <>
      <div className={styles.messageContainer}>
        <Message text="marco" />
        <Message isResponse text="polo" />
        <Message isResponse text="marco" />
        <Message text="po" />
        <Message text="lo" />
      </div>
    </>
  );
}
