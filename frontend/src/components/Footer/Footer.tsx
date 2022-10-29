import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import pinterest from "../../assets/images/pinterest.png";
import twitter from "../../assets/images/twitter.png";

const cx = classNames.bind(styles);

const Footer: React.FC = () => {
  return (
    <footer className={cx(styles.footer)}>
      <ul className={cx(styles.footerItems)}>
        <li className={cx(styles.footerItem)}>
          <h3>About Pressville</h3>
          <p>
            Pressville is a high quality WordPress theme specifically crafted
            for small to medium municipalities. It is packed with lots of
            advanced features such as events, directory listings, galleries,
            documents and a people directory.
          </p>
        </li>

        <li className={cx(styles.footerItem)}>
          <h3>Places</h3>
          <ul>
            <li>
              <a href="">Bars & Restaurants</a>
            </li>
            <li>
              <a href="">Hotels & Apartments</a>
            </li>
            <li>
              <a href="">Public Services</a>
            </li>
          </ul>
        </li>
        <li className={cx(styles.footerItem)}>
          <h3>Galleries</h3>
          <ul>
            <li>
              <a href="">Town of Pressville</a>
            </li>
            <li>
              <a href="">Historic Buildings</a>
            </li>
            <li>
              <a href="">Parks in Pressville</a>
            </li>
          </ul>
        </li>
        <li className={cx(styles.footerItem)}>
          <h3>More Info</h3>
          <ul>
            <li>
              <a href="">Documentation</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
            <li>
              <a href="">Demo Credits</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul className={cx(styles.socialItems)}>
        <li>
          <a href="">
            <img src={facebook} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={instagram} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={pinterest} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={twitter} alt="" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
