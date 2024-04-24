import data from "../../assets/social.json";

import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles["footer"]}>
      {data.map((d) => (
        <span key={d.name} className={styles["icon-container"]}>
          <a
            href={d.link}
            className={styles["icon-link"]}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`/icons/${d.icon}`}
              alt={d.name}
              className={styles["icon"]}
            />
          </a>
        </span>
      ))}
    </footer>
  );
};

export default Footer;
