import PostListItem from "../PostListItem"
import "./PostList.css"

const PostList = ({posts, toggleImportant, toggleLike, onDelete}) => {

    return (
        <ul className="app-list list-group">
            {posts.map((item, index) => (
                <PostListItem key={index} {...item} toggleImportant={toggleImportant} toggleLike={toggleLike} onDelete={onDelete} />
            ))}
        </ul>
    )
}

export default PostList