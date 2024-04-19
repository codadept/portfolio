import React, { useState, useEffect } from "react";
import styles from "./CursorAnimation.module.scss";

const CursorAnimation: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateMousePosition);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      className={styles["cursor-animation"]}
      style={{ left: position.x, top: position.y }}
    >
      <div className={styles.circle}></div>
    </div>
  );
};

export default CursorAnimation;
