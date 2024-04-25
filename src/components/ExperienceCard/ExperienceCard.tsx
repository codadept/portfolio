import styles from "./ExperienceCard.module.scss";

type Props = {
  startDate: Date;
  endDate: Date | "present";
  position: string;
  company: string;
  keyPoints: string[];
  skills: string[];
  link: string;
};

const ExperienceCard: React.FC<Props> = ({
  company,
  endDate,
  keyPoints,
  position,
  skills,
  startDate,
  link,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={styles["experience-card"]}
    >
      <div className={styles["left"]}>
        <p
          className={styles["duration"]}
          title={
            (
              ((endDate === "present"
                ? new Date().getFullYear()
                : endDate.getFullYear()) -
                startDate.getFullYear()) *
                12 +
              ((endDate === "present"
                ? new Date().getMonth()
                : endDate.getMonth()) -
                startDate.getMonth())
            ).toString() + " Months"
          }
        >
          <span className={styles["start"]}>
            {startDate.toLocaleString("en-US", {
              month: "long",
              year: "numeric",
            })}{" "}
          </span>{" "}
          to{" "}
          <span className={styles["end"]}>
            {endDate === "present"
              ? "Present"
              : endDate.toLocaleString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
          </span>
        </p>
      </div>
      <div className={styles["right"]}>
        <p className={styles["experience"]}>
          {position} &middot; {company} &#8599;
        </p>
        <div className={styles["experience-desc"]}>
          <ul>
            {keyPoints.map((key, idx) => (
              <li key={idx}>{key}</li>
            ))}
          </ul>
        </div>
        <div className={styles["experience-skills"]}>
          {skills.map((skill, idx) => (
            <span key={idx}>{skill}</span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ExperienceCard;
