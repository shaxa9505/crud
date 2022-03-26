import "./PostListItem.css"

const PostListItem = ({label, important, like, id, toggleImportant, toggleLike, onDelete}) => {

    let classNames = "app-list-item d-flex justify-content-between"

    if(important){
        classNames += " important"
    }

    if(like) {
        classNames += " like"
    }

    return (
        <div className={classNames} key={id}>
            <span onClick={() => toggleLike(id)} className="app-list-item-label">
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={() => toggleImportant(id)} type="button" className="btn-star btn-sm">
                    <i className="fa fa-star">
                </i></button>
                <button onClick={() => onDelete(id)} type="button" className="btn-trash btn-sm">
                    <i className="fa fa-trash">
                </i></button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
    )
}

export default PostListItem