import { useEffect, useState } from "react";
import Post from "./Post";
import api from "./api/axios";
import { useNavigate } from "react-router";


const Home = () => {
    const navigator = useNavigate();
    const [posts, setPosts] = useState([]);
    const [refreshState, setRefreshState] = useState(false);

    const refreshPosts = () => {
        setRefreshState(!refreshState);
    }

    const onFetchPost = async () => {
        const { data } = await api.get('/posts');
        setPosts(data);
    }

    useEffect(() => {
        onFetchPost();
    }, [refreshState]);

    const readirectToAdd = () => {
        navigator("/post/create");
    };

    return (
        <>
            <div>
                <button onClick={readirectToAdd}>Add</button>
            </div>
            {posts.map((post) => (
                <Post key={post.id} {...post} refreshPosts={refreshPosts}/>
            ))}
        </>
    );

};

export default Home;