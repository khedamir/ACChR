import styles from "./Content.module.scss";
import classNames from "classnames/bind";
import React from "react";

const cx = classNames.bind(styles);

interface ContentProps {
  children?: React.ReactChild;
}

const Content: React.FC<ContentProps> = (props) => {
  return <div className={cx(styles.content)}>{props.children}</div>;
};

export default Content;
