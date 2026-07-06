import { useState } from "react"
import { useDispatch } from "react-redux";
import { addPost } from "../store/posts.reducer";

const AddPost = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");

    const onSave = () => {
        dispatch(addPost({ title }));
        setTitle("");;
    };

    return (
        <>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <button onClick={onSave}>Save</button>
        </>
    );
};

export default AddPost;