import styles from "./RenderHTML.module.scss";
import classNames from "classnames/bind";
import React from "react";

const cx = classNames.bind(styles);

interface PageHTMLProps {
  pageHTML: string;
}

const RenderHTML: React.FC<PageHTMLProps> = ({ pageHTML }) => {
  return (
    <div className={cx(styles.pageHTML)}>
      <p dangerouslySetInnerHTML={{ __html: pageHTML }}></p>
    </div>
  );
};

export default RenderHTML;
