import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Apps.module.css";

export default function AppCard(props) {
  const { img, appName, subTitle } = props;
  return (
    <div className={styles.appCard}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.appImage}
          src="/assets/gradebook.gif"
          layout="fill"
          objectFit="cover"
          objectPosition="50% top"
        />
        <div className={styles.imageCaption}>
          <h3>Gradebook</h3>
          <p>A simple tool to track student grades</p>
        </div>
      </div>
      <div className={styles.appCardContent}>
        <li>Full-stack: React.js | Node/Express | MySQL</li>
        <li>Fully mobile responsive using Bootstrap 4</li>
      </div>
      <div className={styles.appCardFooter}>
        <Link href="https://gradebook.slightlyskewedcreations.com">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </Link>
        <Link href="https://gradebook.slightlyskewedcreations.com">
          <FontAwesomeIcon icon={faExternalLinkAlt} size="3x" />
        </Link>
      </div>
    </div>
  );
}
