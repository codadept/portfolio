import styles from "./BlogCard.module.scss";

type Props = {
  imageSrc: string;
  title: string;
  date: Date;
  link: string;
};

const BlogCard: React.FC<Props> = ({ link, imageSrc, title, date }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={styles["blog-card"]}
    >
      <div className={styles["left"]}>
        <img src={imageSrc} alt={title} />
      </div>
      <div className={styles["right"]}>
        <div className={styles["time"]}>{date.toLocaleDateString("en-GB")}</div>
        <div className={styles["title"]}>{title} &#8599;</div>
      </div>
    </a>
  );
};

export default BlogCard;
