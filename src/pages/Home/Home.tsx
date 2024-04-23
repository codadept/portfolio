import { useState, useRef, MouseEventHandler, useEffect } from "react";
import { Footer, Navigation } from "../../components";
import styles from "./Home.module.scss";

const Home = () => {
  const [letterCenter, setLetterCenter] = useState<{ X: number; Y: number }[]>(
    []
  );
  const [isFlipped, setIsFlipped] = useState<boolean[]>([]);
  const lettersRef = useRef<HTMLSpanElement[]>([]);

  const calculateLetterCenter = () => {
    lettersRef.current.forEach((ref) => {
      const span = ref;
      if (span) {
        const rect = span.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        setLetterCenter((prevLetterCenter) => [
          ...prevLetterCenter,
          {
            X: centerX,
            Y: centerY,
          },
        ]);
      }
    });
  };

  const distance = (X1: number, Y1: number, X2: number, Y2: number) =>
    Math.sqrt((X2 - X1) ** 2 + (Y2 - Y1) ** 2);

  const calculateLetterFlip = (X: number, Y: number) => {
    letterCenter.forEach((cen, idx) => {
      const dis = distance(X, Y, cen.X, cen.Y);

      if (dis <= 300) {
        setIsFlipped((prevFlip) => {
          const newFlip = [...prevFlip];
          newFlip[idx] = true;
          return newFlip;
        });
      } else {
        setIsFlipped((prevFlip) => {
          const newFlip = [...prevFlip];
          newFlip[idx] = false;
          return newFlip;
        });
      }
    });
  };

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    const mouseX = event.pageX;
    const mouseY = event.pageY;

    calculateLetterFlip(mouseX, mouseY);
  };

  useEffect(() => {
    if (letterCenter.length !== 9) {
      calculateLetterCenter();
    }
  }, [letterCenter]);

  return (
    <div className={styles["home"]} onMouseMove={handleMouseMove}>
      <section className={styles["left"]}>
        <Navigation
          imgSrc="/images/self.jpg"
          nav={["About", "Experience", "Projects"]}
        />
        <div className={styles["name"]}>
          <h1>
            <a
              href="https://drive.google.com/file/d/1WrmvAO-tI5SCtnPcArFYQw-LeiZRZAWv/view"
              target="_blank"
              rel="noreferrer"
            >
              <span
                className={isFlipped[0] ? styles["flip"] : ""}
                data-content="P"
                data-hover-content="c"
                ref={(element) => (lettersRef.current[0] = element!)}
              ></span>
              <span
                className={isFlipped[1] ? styles["flip"] : ""}
                data-content="r"
                data-hover-content="o"
                ref={(element) => (lettersRef.current[1] = element!)}
              ></span>
              <span
                className={isFlipped[2] ? styles["flip"] : ""}
                data-content="a"
                data-hover-content="d"
                ref={(element) => (lettersRef.current[2] = element!)}
              ></span>
              <span
                className={isFlipped[3] ? styles["flip"] : ""}
                data-content="t"
                data-hover-content="a"
                ref={(element) => (lettersRef.current[3] = element!)}
              ></span>
              <span
                className={isFlipped[4] ? styles["flip"] : ""}
                data-content="i"
                data-hover-content="d"
                ref={(element) => (lettersRef.current[4] = element!)}
              ></span>
              <span
                className={isFlipped[5] ? styles["flip"] : ""}
                data-content="k"
                data-hover-content="e"
                ref={(element) => (lettersRef.current[5] = element!)}
              ></span>
              <span
                className={isFlipped[6] ? styles["flip"] : ""}
                data-content="&nbsp;"
                data-hover-content="p"
                ref={(element) => (lettersRef.current[6] = element!)}
              ></span>
              <span
                className={isFlipped[7] ? styles["flip"] : ""}
                data-content="M"
                data-hover-content="t"
                ref={(element) => (lettersRef.current[7] = element!)}
              ></span>
              <span
                className={isFlipped[8] ? styles["flip"] : ""}
                data-content="."
                data-hover-content="."
                style={{ marginRight: 0 }}
                ref={(element) => (lettersRef.current[8] = element!)}
              ></span>
            </a>
          </h1>
          <h4>Software Engineer</h4>
        </div>
        <Footer />
      </section>
      <section className={styles["right"]}></section>
    </div>
  );
};

export default Home;
