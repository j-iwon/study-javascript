// 0부터 10까지의 게시글에서 id 와 title 불러오기
const postLayout = (() => {
    const showList = (posts) => {
        const table = document.querySelector("table.posts");
        let text = ``;
        posts = posts.slice(0, 10);
        posts.forEach((post) => {
            text += `<tr><td>${post.id}</td><td>${post.body}</td></tr>`;
            table.innerHTML = text;
    });
    return { showList: showList };
})();
// 0부터 20까지의 게시글중 userId 가 2인 게시글의 body 불러오기, id는 파란 배경에 흰 글씨로!
const postLayout = (() => {
    const showList = (posts) => {
        const table = document.querySelector("table.posts");
        let text = ``;
        posts = posts.slice(0, 20);
        posts.forEach((post) => {
            if (post.userId == 2) {
                text += `<tr><td class= "blue">아이디: ${post.id}</td><td>내용: ${post.body}</td></tr>`;
            }
        });
        table.innerHTML = text;
    };
    return { showList: showList };
})();
