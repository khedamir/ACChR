import React, { useEffect, useState } from "react";
import styles from "./AllEmployees.module.scss";
import Content from "../../components/Content/Content";
import classNames from "classnames/bind";
import BackApi, { API_URL, EmployeeItem, PageItem } from "../../API/BackApi";
import PageHTML from "../../components/RenderHTML/RenderHTML";
import defaultAvatar from "../../assets/images/pust.png";
import { Link } from "react-router-dom";
import { useLoadContext } from "../../context/LoaderContext";

const cx = classNames.bind(styles);

const AllEmployees: React.FC = () => {
  const LoadContext = useLoadContext();
  const [employees, setEmployees] = useState<EmployeeItem[]>();
  const [page, setPage] = useState<PageItem>();

  useEffect(() => {
    const fetchData = async () => {
      LoadContext.setLoad()
      await Promise.all([
        BackApi.GetEmployees(),
        BackApi.GetPageById("Руководство"),
      ]).then(([emp, p]) => {
          setEmployees(emp);
          setPage(p);
      });
      LoadContext.removeLoad()
    };
    fetchData();
  }, []);

  if (!(employees && !LoadContext.isLoad)) {
    return null;
  }

  return (
    <Content>
      <div className={cx(styles.allEmployees)}>
        {page && <PageHTML pageHTML={page.content} />}
        <hr />
        <div>
          <ul className={cx(styles.employeeItems)}>
            {employees.map((employee) => (
              <li key={employee.id}>
                <Link to={"/employees/" + employee.id}>
                  <img
                    className={cx(styles.avatar)}
                    src={
                      employee.avatar_obj
                        ? API_URL + employee.avatar_obj.url
                        : defaultAvatar
                    }
                    alt=""
                  />
                </Link>
                <div className={cx(styles.employeeDescription)}>
                  <h2>
                    <Link to={"/employees/" + employee.id}>
                      {employee.second_name} {employee.first_name}{" "}
                      {employee.third_name}
                    </Link>
                  </h2>
                  <p>{employee.main_position}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Content>
  );
};

export default AllEmployees;
