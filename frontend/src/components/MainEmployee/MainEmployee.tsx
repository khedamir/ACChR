import React from "react";
import styles from "./MainEmployee.module.scss";
import classnames from "classnames/bind";
import { API_URL, EmployeeItem } from "../../API/BackApi";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const cx = classnames.bind(styles);

interface MainEmployeeProps {
  employee: EmployeeItem
}

const MainEmployee: React.FC<MainEmployeeProps> = ({ employee }) => {
  return (
    <div className={cx(styles.employee)}>
      <h3>Председатель Счетной палаты Чеченской Республики</h3>
      <div className={cx(styles.description)}>
        <Link to={"/employees/" + employee.id}>
          <div
            className={cx(styles.avatar)}
            style={{
              backgroundImage:
                "url(" + API_URL + employee.avatar_obj?.url + ")",
            }}
          ></div>
        </Link>
        <h4>
          <Link to={"/employees/" + employee.id}>
            {employee.second_name} {employee.first_name} {employee.third_name}
          </Link>
        </h4>
        <p>
          {employee.main_position} <br />
          {employee.second_position}
        </p>
        <Button link={`/employees/${employee.id}`}>Подробнее</Button>
      </div>
    </div>
  );
};
export default MainEmployee;
