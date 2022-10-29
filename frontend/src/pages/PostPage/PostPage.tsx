import React, { useEffect, useState } from "react";
import styles from "./PostPage.module.scss"
import Content from "../../components/Content/Content";
import classNames from "classnames/bind";
import BackApi, { API_URL, PostItem } from "../../API/BackApi";
import { useParams } from "react-router-dom";
import defaultImage from "../../assets/images/post.jpg";
import RenderHTML from "../../components/RenderHTML/RenderHTML";
import DateComponent from "../../components/DateComponent/DateComponent";
import { useLoadContext } from "../../context/LoaderContext";


const cx = classNames.bind(styles);

const PostPage: React.FC = () => {
    const LoadContext = useLoadContext();
    const [post, setPost] = useState<PostItem>();
    const id = useParams().id;

    useEffect(() => {
        const fetchData = async () => {
            LoadContext.setLoad()
            const response = await BackApi.GetPostById(id);
            setPost(response);
            LoadContext.removeLoad()
        }
        fetchData();
    }, [id]);

    if (!(post && !LoadContext.isLoad)) {
        return null;
    }

    return (
        <Content>
            <div className={cx(styles.post)}>
                <h1>{post.title}</h1>
                <DateComponent date={post.public_date}/>
                <img
                    className={cx(styles.mainImage)}
                    src={
                        post.main_image_obj
                            ? API_URL + post.main_image_obj?.url
                            : defaultImage
                    }
                    alt=""
                />
                <div className={cx(styles.content)}>
                    <RenderHTML pageHTML={post.content} />
                </div>
            </div>
        </Content>
    )
}

export default PostPage;