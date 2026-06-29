import axios from "axios";
import { useEffect, useState } from "react";
import PostItems from "./PostItem";
import AddPost from "./AppPost";


const PostList = () => {
    const [posts, setPosts] = useState([])

    const onFecthPosts = async() => {
        const {data} = await axios.get('http://localhost:3000/posts')
        setPosts(data)
    }

    useEffect(() => {
        onFecthPosts();
    }, []);

    console.log('posts', posts);

    const addPost = async ({title}) => {
        const {data} = await axios.post('http://localhost:3000/posts', {
            title,
            views:0 ,
            });
            setPosts([...posts,data]);
    };

    const removeById =  async (id) => {
        await axios.delete(`http://localhost:3000/posts/${id}`);
        setPosts(posts.filter((post) => post.id !== id));
    };

    return (
        <>
        <AddPost addPost={addPost}/>

        {posts.map ((post) => (
            <PostItems {...post} key={post.id} removePost={removeById}/>
        ))}
        </>
    );
};

export default PostList; 