import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackApi, { PageItem } from "../../API/BackApi";
import Content from "../../components/Content/Content";
import PageHTML from "../../components/RenderHTML/RenderHTML";
import { useLoadContext } from "../../context/LoaderContext";
import styles from "./UniversalPage.module.scss";

const cx = classNames.bind(styles);

const UniversalPage: React.FC = () => {
  const LoadContext = useLoadContext();
  const [page, setPage] = useState<PageItem>();
  const id = useParams().id;

  useEffect(() => {
    const fetchData = async () => {
      LoadContext.setLoad()
      await BackApi.GetPageById(id).then((response) => {
        setPage(response)
      }).finally(() => {
        LoadContext.removeLoad()
      });
    };
    fetchData();
  }, [id]);

  if (!(page && !LoadContext.isLoad)) {
    return null;
  }

  return (
    <Content>
      <PageHTML pageHTML={page.content} />
    </Content>
  );
};

export default UniversalPage;
