import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    // console.log(posts)
    const allPosts = posts.map(post => {
        return <Article key={post.id} post={post} />
    })
    return (
        <main>
            {allPosts}
        </main>
    )

}

export default ArticleList