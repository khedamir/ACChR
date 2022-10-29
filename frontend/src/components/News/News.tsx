import styles from "./News.module.scss";
import classNames from "classnames/bind";
import React, { useMemo } from "react";
import Content from "../Content/Content";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import arrowRight from "../../assets/svg/right_arrow.svg";
import arrowLeft from "../../assets/svg/left_arrow.svg";
import { PostItem } from "../../API/BackApi";
import Button from "../Button/Button";
import NewItem from "../NewItem/NewItem";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

interface NewsProps {
  title: string;
  description: string;
  news: PostItem[]
}

interface arrowProp {
  onClick?: () => void;
}
const NextArrow: React.FC<arrowProp> = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <button className={cx(styles.next)}>
        <img className={cx(styles.arrowRigth)} src={arrowRight} alt="" />
      </button>
    </div>
  );
};

const PrevArrow: React.FC<arrowProp> = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <button className={cx(styles.prev)}>
        <img className={cx(styles.arrowRigth)} src={arrowLeft} alt="" />
      </button>
    </div>
  );
};

const News: React.FC<NewsProps> = ({ title, description, news }) => {
  const navigate = useNavigate();

  const settings = useMemo(() => {
    return {
      classNames: "slider",
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: Math.min(news?.length ?? 1, 3),
      slidesToScroll: Math.min(news?.length ?? 1, 3),
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
  }, [news]);

  return (
    <div className={cx(styles.news)}>
      <Content>
        <div className={cx(styles.newsContent)}>
          <header className={cx(styles.header)}>
            <h2>{title}</h2>
            <p className={cx(styles.description)}>{description}</p>
            <Button link={"/posts/news"}>Посмотреть еще</Button>
          </header>
          <div className={cx(styles.sliderBlock)}>
            <Slider {...settings}>
              {news.map((n) => (
                <div
                  key={n.id}
                  onClick={() => navigate(`/posts/news/${n.id}`)}
                  className={cx(styles.slide)}
                >
                  <NewItem post={n} />
                </div>
              ))}
            </Slider>
          </div>
          <span className={cx(styles.pattern)}></span>
        </div>
      </Content>
    </div>
  );
};

export default News;
