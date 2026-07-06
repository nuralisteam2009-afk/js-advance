const Postitem = ({ id, title, views }) => {
    return (
        <div>
            <span>
                Title: {title}, views: {views}
            </span>
        </div>
    );
};

export default Postitem