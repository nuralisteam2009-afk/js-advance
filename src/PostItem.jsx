import { useState } from "react";
import AddPost from "./AppPost";

const PostItems = (props) => {
    const [changeToggle, setChangeToggle] = useState(false);
    const onRemove = () =>{

    };
    const updatePost = () => {
        setChangeToggle (false);
    };

    if (changeToggle) {
        return <AddPost title={props.title} addPost={updatePost}/>;
    }
    




    return(
        <div>
            <span>
                title: {props.title}, views: {props.views}
            </span>
            <button onClick={onRemove}>UDALI</button>
            <button onClick={() => setChangeToggle(!changeToggle)}>Change</button>
        </div>
    );
};

export default PostItems;