import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Apps.module.css";

export default function AppCard(props) {
  const { img, appName, subtitle, bulletPoints, gitHubRoute, sscRoute } = props;
  return (
    <div className={styles.appCard}>
      <div className={styles.imageWrapper}>
        {img ? (
          <Image
            className={styles.appImage}
            src={img}
            layout="fill"
            objectFit="cover"
            objectPosition="50% top"
          />
        ) : (
          <div style={{ height: "100%", width: "100%", backgroundColor: "black" }} />
        )}
        <div className={styles.imageCaption}>
          <h3>{appName}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className={styles.appCardContent}>
        {bulletPoints?.length && bulletPoints.map((string) => <li>{string}</li>)}
      </div>
      <div className={styles.appCardFooter}>
        {gitHubRoute && (
          <a href={`https://github.com/rbolet/${gitHubRoute}`} target="_blank">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
        )}
        {sscRoute && (
          <a href={`https://${sscRoute}.slightlyskewedcreations.com`} target="_blank">
            <FontAwesomeIcon icon={faExternalLinkAlt} size="3x" />
          </a>
        )}
      </div>
    </div>
  );
}
