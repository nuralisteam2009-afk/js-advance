import { useParams } from "react-router";
import { Link, useNavigate } from "react-router";
import api from "../api/axios";
import { useEffect, useState } from "react";

const EditPost = () => {
    const [title, setTitle] = useState({title: ''});
    const navigate = useNavigate();

    const {id} = useParams();

    const onEditPost = async () => {
        await api.put(`/posts/${id}`, title);
        navigate("/");
    };
    const onFetchPost = async () => {
        const {data} = await api.get(`/posts/${id}`);
        setTitle(data)
    }

    useEffect(() => {
        onFetchPost()
    }, [])

    return (
        <>
            <div>
                <Link to="/">Back</Link>
            </div>
            <input
                placeholder="title"
                value={title.title}
                onChange={(e) => setTitle({...title, title: e.target.value})}
            />
            <button onClick={onEditPost}>Update</button>
        </>
    );
};

export default EditPost;