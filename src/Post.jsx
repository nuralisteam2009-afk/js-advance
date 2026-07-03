import { Link } from "react-router";
import api from "./api/axios";

const Post = ({ id, title, views, refreshPosts }) => {

    const onRemovePost = async () => {
        await api.delete(`/posts/${id}`);
        refreshPosts()
    };
    return (
        <div>
            <span> Title: {title}, views: {views} </span>
            <button onClick={onRemovePost}>delete</button>
            <Link to={`/post/${id}/edit`} >
            <button>edit</button>
            </Link >
        </div>
    );
};

export default Post;