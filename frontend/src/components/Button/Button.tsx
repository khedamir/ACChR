import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import React from "react";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

interface ButtonProps {
  children?: React.ReactChild;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ link, children }) => {
  return (
    <p className={cx(styles.button)}>
      <Link to={link}>{children}</Link>
    </p>
  );
};

export default Button;
