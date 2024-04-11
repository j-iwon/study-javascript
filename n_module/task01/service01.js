const postService = (() => {
    const findAll = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = await response.json();
        console.log(posts);
        callback(posts);
    };
    return { findAll: findAll };
})();
