import { useContext, useEffect, useState } from "react";
import { ChatbotContext } from "./Chatbot";
import Message from "./Message";
import styles from "../../styles/Chatbot.module.css";

export default function MsgDisplay() {
  const { userMessage, setUserMessage, botMessageStack, setBotMessageStack } = useContext(
    ChatbotContext,
  );
  const [ChatElements, setChatElements] = useState([]);

  function createElement(text, source = "bot") {
    const randomKey = (Date.now() * Math.floor(Math.random() * 99999999 + 1)).toString(15);
    return <Message text={text} isResponse={source === "bot"} key={randomKey} />;
  }

  useEffect(() => {
    console.log("Elements", ChatElements);
  }, [ChatElements]);

  useEffect(() => {
    if (!userMessage) return;
    setChatElements([createElement(userMessage, "user"), ...ChatElements]);
    setUserMessage("");
  }, [userMessage]);

  useEffect(() => {
    console.log("stack", botMessageStack);
    if (!botMessageStack.length) return;
    for (let i = 0; i < botMessageStack.length; i++) {
      console.log(botMessageStack[i]);
      if (typeof botMessageStack[i] === "string") {
        setTimeout(() => {
          setChatElements((prev) => [createElement(botMessageStack[i]), ...prev]);
        }, i * 500 + 1000);
      }
    }
  }, [botMessageStack]);

  // const MessageElements = messages.map((message) => {
  //   return <Message text={message.text} isResponse={message.source === "bot"} key={randomKey} />;
  // });
  return (
    <>
      <div className={styles.messageContainer}>{ChatElements}</div>
    </>
  );
}
