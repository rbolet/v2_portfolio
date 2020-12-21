import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div id="root">
      <div id="header"></div>
      <div class="page-container">
        <div class="before-fold">
          <div class="row">
            <div class="title-container">
              <div class="title">
                <p>
                  Rapha
                  <br />
                  Bolet
                </p>
                <p>
                  Developer<span id="title-cursor">_</span>
                </p>
              </div>
            </div>
            <div class="chatbot-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
