import { useContext, useEffect, useState } from "react";
import { ChatbotContext } from "./Chatbot";
import Message from "./Message";
import styles from "../../styles/Chatbot.module.css";

export default function MsgDisplay() {
  const {
    userMessage,
    setUserMessage,
    botMessageStack,
    setBotMessageStack,
    setThinking,
  } = useContext(ChatbotContext);
  const [ChatElements, setChatElements] = useState([]);

  function createElement(response, source = "bot") {
    const randomKey = (Date.now() * Math.floor(Math.random() * 99999999 + 1)).toString(15);
    return (
      <Message
        text={typeof response === "string" ? response : response?.text}
        isResponse={source === "bot"}
        key={randomKey}
        link={response?.link ? response.link : null}
      />
    );
  }

  useEffect(() => {
    if (!userMessage) return;
    setChatElements([createElement(userMessage, "user"), ...ChatElements]);
    setUserMessage("");
  }, [userMessage]);

  useEffect(() => {
    if (!botMessageStack.length) return;
    setThinking(true);
    setTimeout(() => {
      for (let i = 0; i < botMessageStack.length; i++) {
        setTimeout(() => {
          setChatElements((prev) => [createElement(botMessageStack[i]), ...prev]);
        }, i * 500);
      }
      setThinking(false);
      setBotMessageStack([]);
    }, 1200);
  }, [botMessageStack]);

  return (
    <>
      <div className={styles.messageContainer}>{ChatElements}</div>
    </>
  );
}
