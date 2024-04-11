const DB = [];
function register(user) {
    const result = saveDB(user).then(sendEmail).then(getResult);
    // 비동기 pending 상태
    return result;
}

function saveDB(user) {
    DB.push(user);
    console.log(`save ${user.name} to DB`);
    return new Promise((resolve) => {
        resolve(user);
    });
}

function sendEmail(user) {
    console.log(`email to ${user.email}`);
    return new Promise((resolve) => {
        resolve(user);
    });
}

function getResult(user) {
    return `success register ${user.name}`;
}

register({
    email: "tedhan1204@gmail.com",
    password: "1234",
    name: "hds",
}).then(console.log);
// register를 promise 객체로 보고 .then 을 사용해야 결과값이 나온다.

// const result = register({
//     email: "tedhan1204@gmail.com",
//     password: "1234",
//     name: "hds",
// });

// console.log(result);
