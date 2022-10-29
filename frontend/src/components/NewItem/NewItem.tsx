import classNames from "classnames";
import React from "react";
import { API_URL, PostItem } from "../../API/BackApi";
import styles from "./NewItem.module.scss";
import defaultImage from "../../assets/images/post.jpg"
import DateComponent from "../DateComponent/DateComponent";

const cx = classNames.bind(styles);

interface NewItemProps {
  post: PostItem;
}

const NewItem: React.FC<NewItemProps> = ({ post }) => {
  return (
    <div
      className={cx(styles.slideInner)}
      style={{
        backgroundImage: post.main_image_obj ? `url(${API_URL}${post.main_image_obj?.url})` : `url(${defaultImage})`,
      }}
    >
      <div className={cx(styles.newTitle)}>
        <h3>{post.title}</h3>
        <DateComponent date={post.public_date} />
      </div>
    </div>
  );
};

export default NewItem;
