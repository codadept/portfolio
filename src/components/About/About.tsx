import { forwardRef, useState, useEffect } from "react";
import { Link } from "../../components";

import styles from "./About.module.scss";

const About: React.ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => {
  const [showFullContent, setShowFullContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const initialParagraph = (
    <p>
      As a Computer Science and Engineering graduate from the National Institute
      of Technology Silchar, my journey has been defined by a passion for
      exploring diverse fields of CS. From delving into Software Development,
      System Programming, to Operating Systems and Computer Networks, I've
      embraced a multidisciplinary approach to learning.{" "}
      {isMobile && !showFullContent && (
        <span onClick={toggleContent} className={styles["read-more"]}>
          Read more...
        </span>
      )}
    </p>
  );

  const expandedParagraphs = (
    <>
      <p>
        My focus on Software Development led me to delve into both Frontend and
        Backend technologies, resulting in tangible projects such as a Blogs
        Management System—a comprehensive CMS for managing online content.
        Actively engaging in technical clubs, hackathons, and college events,
        I've collaborated on impactful initiatives and projects that showcase my
        dedication to innovation and problem-solving.
      </p>
      <p>
        Notably, my role as a Core Team member at{" "}
        <Link to="https://github.com/gdsc-nits-org/">
          Google Developer Student Clubs NIT Silchar
        </Link>{" "}
        allowed me to contribute to projects like Grafiny (Notes Sharing
        Platform) and Guidance Grid (Mentorship Seeking Platform), also sharing
        my knowledge by giving Tech-Talks in our college. Additionally, leading
        the Website Development Team for college fests underscored my ability to
        deliver results in dynamic environments. One notatable contribution of
        mine is the Transaction System (TecnoCoins) I developed for our
        Technical Fest,{" "}
        <Link to="https://github.com/NIT-Silchar-Org/tecno-backend">
          Tecnoesis 2022
        </Link>
        , which allowed users to earn TecnoCoins from attending events and spend
        them in shop to avail prizes.
      </p>
      <p>
        Internship experiences at industry leaders like Amazon and Oracle
        provided invaluable exposure to large-scale software development
        processes, further enhancing my skills and understanding of industry
        practices.
      </p>
    </>
  );

  return (
    <article ref={ref} className={styles["about"]}>
      <h1>About</h1>
      {isMobile ? (
        <>
          {initialParagraph}
          {showFullContent && expandedParagraphs}
          {isMobile && showFullContent && (
            <span onClick={toggleContent} className={styles["read-less"]}>
              Read less...
            </span>
          )}
        </>
      ) : (
        <>
          {initialParagraph}
          {expandedParagraphs}
        </>
      )}
    </article>
  );
};

const ForwardedRefAbout = forwardRef(About);

export default ForwardedRefAbout;
