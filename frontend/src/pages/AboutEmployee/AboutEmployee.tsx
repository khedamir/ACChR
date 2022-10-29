import React, { useEffect, useState } from "react";
import styles from "./AboutEmployee.module.scss";
import { Link, useParams } from "react-router-dom";
import BackApi, { API_URL, EmployeeItem } from "../../API/BackApi";
import Content from "../../components/Content/Content";
import defaultAvatar from "../../assets/images/pust.png";
import classNames from "classnames";
import PageHTML from "../../components/RenderHTML/RenderHTML";
import { ReactComponent as Folder } from "../../assets/svg/folder-solid.svg";
import { useLoadContext } from "../../context/LoaderContext";

const cx = classNames.bind(styles);

const AboutEmployee: React.FC = () => {
  const LoadContext = useLoadContext();
  const [employee, setEmployee] = useState<EmployeeItem>();
  const id = useParams().id;

  useEffect(() => {
    const fetchData = async () => {
      LoadContext.setLoad()
      const  response = await BackApi.GetEmployeeById(id)
      setEmployee(response);
      LoadContext.removeLoad()
    };
    fetchData();
  }, [id]);
  
  if (!(employee && !LoadContext.isLoad)) {
    return null;
  }

  return (
    <Content>
      <div className={cx(styles.aboutEmployee)}>
        <div className={cx(styles.back)}>
          <Folder className={cx(styles.folder)} width="18" />
          <Link to={"/employees"}>Всё рукводство</Link>
        </div>
        <hr />
        <header>
          <img
            className={cx(styles.avatar)}
            src={
              employee.avatar_obj
                ? API_URL + employee.avatar_obj.url
                : defaultAvatar
            }
            alt=""
          />
          <div>
            <h1>
              {employee.second_name} {employee.first_name} {employee.third_name}
            </h1>
            <p>
              {employee.main_position} <br />
              {employee.second_position}
            </p>
          </div>
        </header>
        <div>
          <PageHTML pageHTML={employee.biography} />
        </div>
      </div>
    </Content>
  );
};

export default AboutEmployee;
