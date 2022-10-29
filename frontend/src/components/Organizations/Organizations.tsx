import styles from "./Organizations.module.scss";
import classNames from "classnames/bind";
import React from "react";
import Content from "../Content/Content";
import {
  budget,
  gerbAccrf,
  gerbChechni,
  gerbChechniFlag,
  gerbWhite,
  govSpending,
  portalInfo,
  portalLogo,
  spark,
} from "../../assets/images";

const cx = classNames.bind(styles);

const Organizations: React.FC = () => {
  return (
    <div className={cx(styles.organizations)}>
      <Content>
        <div className={cx(styles.organizationsContent)}>
          <div>
            <h3>Гос. органы</h3>
            <ul>
              <li>
                <a href="https://chechnya.gov.ru/">
                  <img src={gerbChechniFlag} alt="" />
                </a>
                <h4>
                  <a href="https://chechnya.gov.ru/">
                    Глава Чеченской республики
                  </a>
                </h4>
              </li>
              <li>
                <a href="https://parlamentchr.ru/">
                  <img src={gerbWhite} alt="" />
                </a>
                <h4>
                  <a href="https://parlamentchr.ru/">
                    Парламент Чеченской республики
                  </a>
                </h4>
              </li>
              <li>
                <a href="https://ach.gov.ru/">
                  <img src={gerbAccrf} alt="" />
                </a>
                <h4>
                  <a href="https://ach.gov.ru/">Счетная палата РФ</a>
                </h4>
              </li>
            </ul>
          </div>
          <div>
            <h3>Полезные ссылки</h3>
            <ul>
              <li>
                <a href="https://portal.audit.gov.ru/#/main-page">
                  <img src={portalLogo} alt="" />
                </a>
                <h4>
                  <a href="https://portal.audit.gov.ru/#/main-page">
                    Портал ЕСГФК
                  </a>
                </h4>
              </li>
              <li>
                <a href="http://pravo.gov.ru/">
                  <img src={portalInfo} alt="" />
                </a>
                <h4>
                  <a href="http://pravo.gov.ru/">
                    Официальный интернет-портал правовой информации
                  </a>
                </h4>
              </li>
              <li>
                <a href="http://xn--90azh1a.xn--p1ai/">
                  <img src={gerbChechni} alt="" />
                </a>
                <h4>
                  <a href="http://xn--90azh1a.xn--p1ai/">Бюджет для граждан</a>
                </h4>
              </li>
            </ul>
          </div>
          <div>
            <h3>Важные ресурсы</h3>
            <ul>
              <li>
                <a href="https://spending.gov.ru/">
                  <img src={govSpending} alt="" />
                </a>
                <h4>
                  <a href="https://spending.gov.ru/">Госрасходы</a>
                </h4>
              </li>
              <li>
                <a href="https://marker-interfax.ru/">
                  <img src={spark} alt="" />
                </a>
                <h4>
                  <a href="https://marker-interfax.ru/">СПАРК-Маркетинг</a>
                </h4>
              </li>
              <li>
                <a href="https://chechnya.roskazna.gov.ru/ispolnenie-byudzhetov/">
                  <img src={budget} alt="" />
                </a>
                <h4>
                  <a href="https://chechnya.roskazna.gov.ru/ispolnenie-byudzhetov/">
                    Исполнение Бюджетов
                  </a>
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </Content>
    </div>
  );
};

export default Organizations;
