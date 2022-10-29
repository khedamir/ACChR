import React, { useEffect, useState } from "react";
import Content from "../../components/Content/Content";
import styles from "./MainPage.module.scss";
import News from "../../components/News/News";
import MainEmployee from "../../components/MainEmployee/MainEmployee";
import Employees from "../../components/Employees/Employee";
import Organizations from "../../components/Organizations/Organizations";
import PageComponent from "../../components/PageComponent/PageComponent";
import classnames from "classnames/bind";
import BackApi, { EmployeeItem, PageItem, PostItem } from "../../API/BackApi";
import { PostCategories } from "../../API/enum";
import RenderHTML from "../../components/RenderHTML/RenderHTML";
import { useLoadContext } from "../../context/LoaderContext";
import { resolve } from "node:path/win32";

const cx = classnames.bind(styles);

const MainPage: React.FC = () => {
  const LoadContext = useLoadContext();
  const [news, setNews] = useState<PostItem[]>();
  const [page, setPage] = useState<PageItem>();
  const [employee, setEmployee] = useState<EmployeeItem>();
  const [employees, setEmployees] = useState<EmployeeItem[]>();

  useEffect(() => {    
    const fetchData = async () => {
      LoadContext.setLoad()
      await Promise.all([
        BackApi.GetPosts(PostCategories.news, 9, 1),
        BackApi.GetPageById("О счетной палате"),
        BackApi.GetEmployees(1),
        BackApi.GetEmployees(2)
      ]).then(([n, p, emp, emps]) => {
        setNews(n.posts)
        setPage(p)
        setEmployee(emp[0])
        setEmployees(emps)
      })
      LoadContext.removeLoad()
    };
    fetchData();
  }, []);


  if (!(news && page && employee && employees  && !LoadContext.isLoad)) {
    return null
  }


  return (
    <div className={cx(styles.main)}>
      <News
        title="Новости"
        description="Последние новости Счетной Палаты за 2022 год"
        news={news}
      />
      <Content>
        <div className={cx(styles.mainContent)}>
          <div className={cx(styles.page)}>
            <RenderHTML pageHTML={page.content} />
          </div>
          <aside className={cx(styles.aside)}>
            <MainEmployee employee={employee} />
            <Employees employees={employees} />
          </aside>
        </div>
      </Content>
      <Organizations />
    </div>
  );
};

export default MainPage;
