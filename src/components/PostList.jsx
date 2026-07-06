import { useSelector } from "react-redux"
import Postitem from "./PostItem";
import AddPost from "./AddPost";

const PostList = () => {
    const posts = useSelector((state) => state.posts.posts);
    return (
        <>
        <AddPost/>
            {posts.map((post) => (
                <Postitem {...post} key={post.id} />
            ))}
        </>
    );
};

export default PostList;