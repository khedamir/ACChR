import classNames from "classnames/bind";
import React from "react";
import { API_URL, Documents } from "../../API/BackApi";
import styles from "./DocumentItems.module.scss";
import { FileLogoPath } from "./utils";

const cx = classNames.bind(styles);

interface DocumentItemsProps {
  documents: Documents[];
}

const DocumetnItems: React.FC<DocumentItemsProps> = ({ documents }) => {
  return (
    <div>
      <ul className={cx(styles.documentItems)}>
        {documents.map((document) => (
          <li key={document.id}>
            <a download href={`${API_URL}${document.file_obj.url}`}>
              <img src={FileLogoPath[document.file_obj.type]} alt="" />
              <p>{document.title}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumetnItems;
