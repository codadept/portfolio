import { useEffect, useState } from "react";

import type { IFooter } from "../../global/interfaces";

import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  const [data, setData] = useState<IFooter.SocialLink[]>([]);

  const fetchData = async () => {
    const socialDataResponse = await fetch("/data/social.json");

    const socialDataJson = await socialDataResponse.json();

    setData(socialDataJson);
  };

  useEffect(() => {
    fetchData();
  });

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
