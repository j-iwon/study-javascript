fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then(console.log);
// .then((users) => {
//     console.log(users);
// });
// 비동기, promise 객체
