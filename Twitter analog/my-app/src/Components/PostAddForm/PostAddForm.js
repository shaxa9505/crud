import React, {useState} from "react"
import "./PostAddForm.css"

const PostAddForm = ({addPost}) => {

    const [search, setSearch] = useState("");
    
    function changeClick(e) {
        setSearch(e.target.value);
        // console.log(search);
    }

    function Submit(e) {
        e.preventDefault();
        if(search){
            addPost(search)
        }
        
        setSearch("")
    }



    return (
        <form onSubmit={Submit} className="bottom-panel d-flex">
            <input 
            type="text" 
            placeholder="What are you thinking about"
            className="form-control new-post-label"
            onChange={changeClick}
            value={search}
            />
            <button type="submit" className="btn btn-outline-secondary">Add posts</button>
        </form>
    )
}

export default PostAddForm