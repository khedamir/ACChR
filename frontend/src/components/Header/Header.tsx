// import "../../shared/Styles.module.scss";
import styles from "./Header.module.scss";
import logo from "../../assets/images/pressville-logo.png";
import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

interface MenuItem {
  name: string;
  ref?: string;
  submenu?: { name: string; ref: string }[];
}

const menu: MenuItem[] = [
  {
    name: "О СЧЕТНОЙ ПАЛАТЕ",
    ref: "#",
    submenu: [
      { name: "О счетной палате", ref: "/" },
      { name: "Структура и руководство", ref: "/employees" },
      { name: "Гос служба", ref: "/documents/civil_service" },
      { name: "Госзакупки", ref: "/documents/public_procurement" },
      { name: "Годовые отчеты", ref: "/documents/annual_reports" },
    ],
  },

  {
    name: "ДЕЯТЕЛЬНОСТЬ",
    ref: "#",
    submenu: [
      { name: "ОНС", ref: "/ons" },
      { name: "План работ", ref: "/documents/work_plan" },
      {
        name: "Перечень информационных работ",
        ref: "/page/list_of_information_works",
      },
      { name: "Соглашения", ref: "#" },
      {
        name: "Информация о взаимоотношениях",
        ref: "/documents/relationship_information",
      },
      {
        name: "Контрольные и экспертно-аналитические мероприятия",
        ref: "/documents/control_measures",
      },
      {
        name: "Порядок обжалований решений КСО",
        ref: "/documents/appeal_procedure",
      },
      {
        name: "Информация о принятых по внесённым представлениям и предписаниям решениях и мерах",
        ref: "/documents/information_about_accepted",
      },
      {
        name: "Информация о внесённых по итогам проведения контрольных и экспертно-аналитических мероприятий представлениях и предписаниях",
        ref: "/documents/information_about_contributions",
      },
      {
        name: "Отчеты об исполнений бюджета",
        ref: "/documents/execution_reports",
      },
    ],
  },

  {
    name: "ДОКУМЕНТЫ",
    ref: "#",
    submenu: [
      {
        name: "Документы по методологическому обеспечению",
        ref: "/documents/methodological_support",
      },
      { name: "Нормативные документы", ref: "/documents/regulations" },
      { name: "Нормативные акты", ref: "/documents/normative_acts" },
    ],
  },

  {
    name: "ПРЕСС ЦЕНТР",
    ref: "#",
    submenu: [
      { name: "Новости", ref: "/posts/news" },
      { name: "Семинары", ref: "posts/seminar" },
      { name: "Выступления", ref: "/posts/speech" },
    ],
  },

  {
    name: "ПРОТИВОДЕЙСТВИЕ КОРРУПЦИИ",
    ref: "#",
    submenu: [
      {
        name: "О противодействий коррупций",
        ref: "/page/on_combating_corruption",
      },
      { name: "Документы", ref: "/documents/corruption" },
      { name: "Комиссия", ref: "/documents/commission" },
      {
        name: "Антикоррупционная экспертиза",
        ref: "/documents/anti_corruption_expertise",
      },
      { name: "Сведения о доходах", ref: "/documents/income_information" },
      { name: "Обратная связь", ref: "/page/feedback" },
    ],
  },
];

const Header: React.FC = () => {
  const [index, setIndex] = useState<number>();

  return (
    <header className={cx(styles.header)}>
      <div className={cx(styles.Titlebar)}>
        <div className={cx(styles.TitlebarInner)}>
          <div className={cx(styles.logo)}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className={cx(styles.TitlebarText)}>
            <h1>Счетная Палата</h1>
            <p>Счетная палата Чеченской Республики</p>
          </div>
        </div>
      </div>

      <div className={cx(styles.headerNavGroup)}>
        <div className={cx(styles.topBar)}>
          <div className={cx(styles.topBarInner)}>
            <nav>
              <ul>
                <li>
                  <a href="">Поддержка</a>
                </li>
                <li>
                  <a href="tel:+7(8712)22-28-29">+7(8712)22-28-29</a>
                </li>
                <li>
                  <a href="mailto:spchr@mail.ru">spchr@mail.ru</a>
                </li>
              </ul>
            </nav>
            <div className={cx(styles.languages)}>
              <ul>
                <li>
                  <a href="">EN</a>
                </li>
                <li>
                  <a href="">RU</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          onMouseOut={() => setIndex(undefined)}
          className={cx(styles.navBar)}
        >
          <div className={cx(styles.navBarInner)}>
            <nav>
              <ul className={cx(styles.menuItems)}>
                {menu.map((item, id) => (
                  <li key={id}>
                    <div
                      onMouseOver={() => setIndex(id)}
                      className={cx(styles.menuItemsInner)}
                    >
                      <a className={cx(styles.menuItem)} href={item.ref}>
                        {item.name}
                      </a>
                    </div>
                    {id === index && (
                      <div
                        className={cx(styles.subMenu)}
                        onMouseOver={() => setIndex(index)}
                      >
                        <div className={cx(styles.subMenuInner)}>
                          <ul>
                            {menu[index].submenu?.map((subitem, id) => (
                              <li key={id}>
                                <Link to={subitem.ref}>{subitem.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className={cx(styles.triangle)}></div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
