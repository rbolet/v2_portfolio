import { useEffect } from "react";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const phrases = ["developer"];

export default function Title() {
  const [word, setWord] = useState(phrases[0]);
  const [print, setPrint] = useState("");

  useEffect(() => {
    let index = 0;
    while (index < word.length) {
      printWord(index).then(index++);
    }
  }, []);

  async function printWord(index) {
    return await setTimeout(() => {
      setPrint(`${print}${word[index]}`);
    }, 500);
  }

  return (
    <div className={styles.title}>
      <p>
        Rapha
        <br />
        Bolet
        <br />
        {print}
        <span className={styles.cursor}>_</span>
      </p>
    </div>
  );
}
