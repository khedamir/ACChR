import styles from "./PageComponent.module.scss";
import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import BackApi, { PageItem } from "../../API/BackApi";
import PageHTML from "../RenderHTML/RenderHTML";
import Content from "../Content/Content";

const cx = classNames.bind(styles);

interface PageProps {
  pageId: string;
}

const Page: React.FC<PageProps> = ({ pageId }) => {
  const [page, setPage] = useState<PageItem>();

  useEffect(() => {
    const fetchData = async () => {
      setPage(await BackApi.GetPageById(pageId));
    };
    fetchData();
  }, []);

  if (!page) {
    return <Content>Нет данных...</Content>;
  }

  return (
    <div className={cx(styles.page)}>
      <PageHTML pageHTML={page.content} />
    </div>
  );
};

export default Page;
