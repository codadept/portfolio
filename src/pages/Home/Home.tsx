import { useState, useRef, useEffect } from "react";
import {
  Footer,
  Navigation,
  About,
  Experience,
  Project,
} from "../../components";
import styles from "./Home.module.scss";

const nameData = [
  { content: "P", hoverContent: "c" },
  { content: "r", hoverContent: "o" },
  { content: "a", hoverContent: "d" },
  { content: "t", hoverContent: "a" },
  { content: "i", hoverContent: "d" },
  { content: "k", hoverContent: "e" },
  { content: String.fromCharCode(0xa0), hoverContent: "p" },
  { content: "M", hoverContent: "t" },
  { content: ".", hoverContent: "." },
];

const Home: React.FC = () => {
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

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (event) => {
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
              {nameData.map((n, idx) => (
                <span
                  className={isFlipped[idx] ? styles["flip"] : ""}
                  data-content={n.content}
                  data-hover-content={n.hoverContent}
                  ref={(element) => (lettersRef.current[idx] = element!)}
                ></span>
              ))}
            </a>
          </h1>
          <h4>Software Engineer</h4>
        </div>
        <Footer />
      </section>
      <section className={styles["right"]}>
        <About />
        <Experience />
        <Project />
      </section>
    </div>
  );
};

export default Home;
