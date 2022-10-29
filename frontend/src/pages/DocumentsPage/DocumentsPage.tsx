import React, { useEffect, useState } from "react";
import styles from "./DocumentsPage.module.scss";
import classnames from "classnames/bind";
import Content from "../../components/Content/Content";
import { useParams } from "react-router-dom";
import { DocCategoryName, DocumentCategories } from "../../API/enum";
import BackApi, { Documents } from "../../API/BackApi";
import Pagination from "../../components/Pagination/Pagaination";
import DocumetnItems from "../../components/DocumentItems/DocumentItems";
import { useLoadContext } from "../../context/LoaderContext";

const cx = classnames.bind(styles);

const countDisplayElements = 5;

const DocumentsPage: React.FC = () => {
  const LoadContext = useLoadContext();
  const [documents, setDocuments] = useState<Documents[]>();
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);

  const category = useParams().category as keyof typeof DocumentCategories;
  const title = DocCategoryName[category];

  useEffect(() => {
    const fetchData = async () => {
      LoadContext.setLoad()
      const response = await BackApi.GetDocuments(
        DocumentCategories[category],
        countDisplayElements,
        page
      );
      setDocuments(response.documents);
      setTotalCount(response.totalCount);
      LoadContext.removeLoad()
    };
    fetchData();
  }, [category, page]);

  if (!(documents && !LoadContext.isLoad)) {
    return null;
  }

  return (
    <Content>
      <div className={cx(styles.documents)}>
        <h2>{title}</h2>
        <DocumetnItems documents={documents} />
        <Pagination
          activaPage={page}
          countDisplayElements={countDisplayElements}
          totalCount={totalCount}
          setPage={setPage}
        />
      </div>
    </Content>
  );
};
export default DocumentsPage;
