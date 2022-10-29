import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import BackApi, { Documents, PageItem } from "../../API/BackApi";
import { DocumentCategories, DocCategoryName } from "../../API/enum";
import Content from "../../components/Content/Content";
import RenderHTML from "../../components/RenderHTML/RenderHTML";
import styles from "./CivilService.module.scss";
import DocumetnItems from "../../components/DocumentItems/DocumentItems";
import Pagination from "../../components/Pagination/Pagaination";
import { useLoadContext } from "../../context/LoaderContext";

const cx = classNames.bind(styles);

const countDisplayElements = 5;

const CivilService: React.FC = () => {
  const LoadContext = useLoadContext();
  const [documents, setDocuments] = useState<Documents[]>();
  const [pageHTML, setPageHTML] = useState<PageItem>();

  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);

  const category = DocumentCategories["civil_service"];
  const title = DocCategoryName["civil_service"];

  useEffect(() => {
    const fetchData = async () => {
      LoadContext.setLoad()
      await Promise.all([
        BackApi.GetDocuments(category, countDisplayElements, page),
        BackApi.GetPageById(title),
      ]).then(([doc, p]) => {
        setDocuments(doc.documents);
        setTotalCount(doc.totalCount);
        setPageHTML(p);
      });
      LoadContext.removeLoad()
    };
    fetchData();
  }, [page]);

  if (!(documents && !LoadContext.isLoad)) {
    return null;
  }

  return (
    <Content>
      <div>
        {pageHTML && <RenderHTML pageHTML={pageHTML.content} />}
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

export default CivilService;
