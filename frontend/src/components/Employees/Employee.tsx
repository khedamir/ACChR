import React from "react";
import styles from "./Employee.module.scss";
import classnames from "classnames/bind";
import { API_URL, EmployeeItem } from "../../API/BackApi";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const cx = classnames.bind(styles);

interface EmployeesProps {
  employees: EmployeeItem[]
}

const Employees: React.FC<EmployeesProps> = ({ employees }) => {
  return (
    <div className={cx(styles.employee)}>
      <h3>Руководство</h3>
      <div className={cx(styles.description)}>
        <ul>
          {employees.map((employee) => (
            <li key={employee.id}>
              <Link to={"/employees/" + employee.id}>
                <div
                  className={cx(styles.avatar)}
                  style={{
                    backgroundImage:
                      "url(" + API_URL + employee.avatar_obj?.url + ")",
                  }}
                ></div>
              </Link>
              <div className={cx(styles.employeeDescription)}>
                <h4>
                  <Link to={"/employees/" + employee.id}>
                    {employee.second_name} {employee.first_name}{" "}
                    {employee.third_name}
                  </Link>
                </h4>
                <p>{employee.main_position}</p>
              </div>
            </li>
          ))}
        </ul>
        <Button link={"/employees"}>Всё руководство</Button>
      </div>
    </div>
  );
};

export default Employees;
