export const loadAllPosts = () => {
    return fetch('https://c-m-editor.firebaseio.com/posts.json')
        .then(res => res.json());
}

export const deletePost = (id) => {
    return fetch('https://c-m-editor.firebaseio.com/posts/' + id + '.json', {
        method: "DELETE"
    }).then(() => {
        console.log("deleted " + id);
    });
}

export const createPost = (post) => {
    return fetch('https://c-m-editor.firebaseio.com/posts.json', {
        method: "POST",
        body: JSON.stringify(post)
    });
}

export const fetchPost = (id) => {
    return fetch(`https://c-m-editor.firebaseio.com/posts/${id}.json`)
        .then((res) => res.json());
}

export const updatePost = (id, post) => {
    return fetch(`https://c-m-editor.firebaseio.com/posts/${id}.json`, {
        method: "PATCH",
        body: JSON.stringify(post)
    });
}