import React from 'react'
import styles from "./Posts.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./postsSlice";


export default function Posts() {
    const dispatch = useDispatch()
    const postsAndStatus = useSelector(state => state.getPostsAsync)
    console.log(postsAndStatus)

    return (
        <>
            <button onClick={() => dispatch(getPosts())}>Get posts</button>
            {postsAndStatus.status === "success" && postsAndStatus.posts.map((post) => {
                return <React.Fragment key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <hr />
                </React.Fragment>
            })}
        </>
    )
}
