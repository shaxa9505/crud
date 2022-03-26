import "./AppHeader.css"

const AppHeader = ({posts, likes}) => {
    return (
        <div className="app-header d-flex">
            <h1>Shohrux Meliboyev</h1>
            <p>{posts} posts, likes {likes}</p>
        </div>
    )
}

export default AppHeader