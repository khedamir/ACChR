import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BackApi, { API_URL, PostItem } from "../../API/BackApi";
import { PostCategories, PostCategoryName } from "../../API/enum";
import Content from "../../components/Content/Content";
import Pagination from "../../components/Pagination/Pagaination";
import styles from "./PostsPage.module.scss";
import defaultImage from "../../assets/images/post.jpg";
import RenderHTML from "../../components/RenderHTML/RenderHTML";
import Button from "../../components/Button/Button";
import DateComponent from "../../components/DateComponent/DateComponent";
import { useLoadContext } from "../../context/LoaderContext";

const cx = classNames.bind(styles);

const countDisplayElements = 12;

const PostsPage: React.FC = () => {
  const LoadContext = useLoadContext();
  const [posts, setPosts] = useState<PostItem[]>();
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const category = useParams().category as keyof typeof PostCategories;
  const title = PostCategoryName[category];

  useEffect(() => {
    const fetchData = async () => {
      LoadContext.setLoad()
      const response = await BackApi.GetPosts(
        PostCategories[category],
        countDisplayElements,
        page
      );
      setPosts(response.posts);
      setTotalCount(response.totalCount);
      LoadContext.removeLoad()
    };
    fetchData();
  }, [category, page]);

  if (!(posts && !LoadContext.isLoad)) {
    return null;
  }

  function removeTag(str: string) {
    const txt = str.replace(/<\/?[^>]+>/g, "");
    return txt.replace(/[\r\n]+/g, " ");
  }

  return (
    <Content>
      <div className={cx(styles.posts)}>
        <h1 className={cx(styles.title)}>{title}</h1>
        <ul className={cx(styles.postItems)}>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`${post.id}`}>
                <img
                  className={cx(styles.mainImage)}
                  src={
                    post.main_image_obj
                      ? API_URL + post.main_image_obj?.url
                      : defaultImage
                  }
                  alt=""
                />
              </Link>
              <div className={cx(styles.postDescription)}>
                <DateComponent date={post.public_date}/>
                <h2>
                  <Link to={`${post.id}`}>{post.title}</Link>
                </h2>

                <div className={cx(styles.content)}>
                  <RenderHTML pageHTML={removeTag(post.content)} />
                </div>
                <Button link={`${post.id}`}>Подробно</Button>
              </div>
            </li>
          ))}
        </ul>
        <div className={cx(styles.pagination)}>
          {totalCount > countDisplayElements && (
            <Pagination
              activaPage={page}
              countDisplayElements={countDisplayElements}
              totalCount={totalCount}
              setPage={setPage}
            />
          )}
        </div>
      </div>
    </Content>
  );
};

export default PostsPage;
