import { useState } from "react";
import styles from "./Navigation.module.scss";

type Props = {
  imgSrc: string;
  nav: string[];
  refObj: React.RefObject<HTMLDivElement>[];
};

const Navigation: React.FC<Props> = ({ imgSrc, nav, refObj }) => {
  const initialArray = Array.from({ length: nav.length }).fill(
    false
  ) as boolean[];
  const [isHover, setIsHover] = useState<boolean[]>(initialArray);

  const handleMouseEnter = (idx: number) => {
    setIsHover((prev) =>
      prev?.map((p, i) => {
        if (i === idx) return true;
        else return p;
      })
    );
  };

  const handleMouseLeave = (idx: number) => {
    setIsHover((prev) =>
      prev?.map((p, i) => {
        if (i === idx) return false;
        else return p;
      })
    );
  };

  return (
    <nav className={styles["nav"]}>
      {nav.map((n, idx) => (
        <div
          key={n}
          className={styles["ring-container"]}
          style={{
            width: `${13 + (nav.length - 1) * 3}vw`,
            height: `${13 + (nav.length - 1) * 3}vw`,
          }}
        >
          <div
            key={`${n}-ring`}
            className={
              isHover[idx]
                ? `${styles["ring"]} ${styles["active"]}`
                : `${styles["ring"]}`
            }
            style={{
              width: `${13 + idx * 3}vw`,
              height: ` ${13 + idx * 3}vw`,
              zIndex: (nav.length - idx) * 2,
            }}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
            onClick={() =>
              refObj[idx].current?.scrollIntoView({ behavior: "smooth" })
            }
          ></div>
          <span
            key={`${n}-nav-link`}
            className={
              isHover[idx]
                ? `${styles["nav-links"]} ${styles["hover"]}`
                : `${styles["nav-links"]}`
            }
            style={{
              zIndex: (nav.length - idx) * 2 - 1,
              top: `${5 + nav.length * 1.5 - 2.2 * idx}vw`,
              transform: "translateY(-50%)",
              left: `${nav.length * 1.5 + 5 + Math.sqrt((6.5 + 1.5 * idx) ** 2 - (2.2 * idx) ** 2) - 0.2 * nav.length}vw`,
              paddingLeft: `${0.2 * nav.length + 0.5}vw`,
              paddingRight: `${0.5}vw`,
            }}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
          >
            {n}
          </span>
        </div>
      ))}
      <div className={styles["container"]}>
        <img src={imgSrc} alt={imgSrc} />
      </div>
    </nav>
  );
};

export default Navigation;
