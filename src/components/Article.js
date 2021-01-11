import React from "react";

function Article({post}) {
    console.log(post)

//    const allPosts = posts.map((post) => {
//     
//     })

//    const coffeeCups = (post) => {
//        if (post.minutes < 30) {

//        }
//    }
    
    return (<article>
        <h3>{post.title}</h3>
        <small>{post.date}</small>
        <p>{post.preview}</p>
    </article>)

}

export default Article