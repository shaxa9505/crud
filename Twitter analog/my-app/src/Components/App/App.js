import React, { useState } from "react";
import AppHeader from "../AppHeader"
import PostAddForm from "../PostAddForm"
import PostList from "../PostList"
import PostStatusFilter from "../PostStatusFilter"
import SearchPanel from "../SearchPanel"
import './App.css'

const App = () => {

    const [data, setData] = useState([
        { label: "React js for beginner", important: false, like: false, id: 1 },
        { label: "Vue js for beginner", important: false, like: false, id: 2 },
        { label: "Angular js for beginner", important: false, like: false, id: 3 }
    ])

    const [term, setTerm] = useState("")
    const [filter, setFilter] = useState("all")

    function toggleImportant(id) {
        const index = data.findIndex(item => item.id === id);
        const newItem = data[index];
        console.log(newItem);
        const oldItem = {...newItem, important: !newItem.important};
        const newArr = [...data.slice(0, index), oldItem, ...data.slice(index + 1)]
        setData(data => {
            return [
                ...newArr
            ]
        })
    }

    function toggleLike(id) {
        const index = data.findIndex(item => item.id === id);
        const newItem = data[index];
        console.log(newItem);
        const oldItem = {...newItem, like: !newItem.like};
        const newArr = [...data.slice(0, index), oldItem, ...data.slice(index + 1)]
        setData(data => {
            return [
                ...newArr
            ]
        })
    }

    function onDelete(id) {
        setData(data.filter(item => item.id !== id))
    }

    function addPost(body) {
        const newItem = {
            label: body,
            important: false,
            like: false,
            id: Date.now()
        }
        setData([
            ...data,
            newItem
        ])
        console.log(data);
    }

    function searchFilter(term) {
        setTerm(term)
    }

    function postFilterStatus (filter) {
        setFilter(filter)
    }

    function filterSearch(items, term) {
        if(term.length === 0){
            return items
        }

        return items.filter(item => {
            return item.label.indexOf(term) > -1
        })
    }

    function filterTextName (items, filter) {
        if(filter === "like"){
            return items.filter(item => item.like)
        }

        return items
    }


    const visiblePost = filterTextName(filterSearch(data, term), filter)
    const posts = data.filter(item => item).length
    const likes = data.filter(item => item.like).length

    return (
        <div className="app">
            <AppHeader posts={posts} likes={likes} />
            <div className="search-panel d-flex">
                <SearchPanel searchFilter={searchFilter} />
                <PostStatusFilter postFilterStatus={postFilterStatus} filter={filter} />
            </div>
            <PostList posts={visiblePost} toggleImportant={toggleImportant} toggleLike={toggleLike} onDelete={onDelete} />
            <PostAddForm addPost={addPost} />
        </div>
    )
}

export default App