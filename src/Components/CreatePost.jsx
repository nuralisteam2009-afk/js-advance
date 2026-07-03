import { useState } from "react"
import { useNavigate } from "react-router";
import { Link } from "react-router";
import api from "../api/axios";

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const navigate = useNavigate();

    const onCreatePost = async () => {
        await api.post('/posts', { title, views: 0 });
        navigate("/");
    };

    return (
        <>
            <div>
                <Link to="/">Back</Link>
            </div>
            <input
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={onCreatePost}>Save</button>
        </>
    );
};

export default CreatePost;