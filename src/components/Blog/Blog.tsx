import { forwardRef } from "react";
import BlogCard from "../BlogCard/BlogCard";

import blogs from "../../assets/blogs.json";

import styles from "./Blog.module.scss";

const Blog: React.ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => {
  return (
    <article ref={ref} className={styles["blog"]}>
      <h1>Blogs</h1>
      {blogs.map((b, idx) => (
        <BlogCard
          date={new Date(b.date)}
          imageSrc={b.imageSrc}
          link={b.link}
          title={b.title}
          key={idx}
        />
      ))}
    </article>
  );
};

const ForwardedRefBlog = forwardRef(Blog);

export default ForwardedRefBlog;
