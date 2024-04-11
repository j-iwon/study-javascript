async function getName() {
    return "hds";
    // async을 쓰는 순간 getName 은 비동기 함수가 된다.
    // 때문에 리턴값은 Promise 객체의 resolve에 담긴다. > than 으로 접근 해야한다.
}
async function printName() {
    const name = await getName();
    // async을 await으로 풀어준 다음 const name 에 담아준다.
    console.log(name);
    //그 후 console.log에 담아준 다음 printName 을 사용하면
}
printName();
// 바로 hds 이라는 문자열이 출력된다.

//모듈화
async function printName(callback) {
    const name = await getName();
    if(callback){
        callback(name);
    }
    // 비동기를 동기(callback)으로 전달 받아서 바로 쓸 수 있게 만들어준다.
}

// 함수를 처음부터 비동기(async)로 선언
// async function getName(https://jsonplaceholder.typicode.com/users) {
//     const response = await fetch();
//     const users = await response.json();
//     console.log(users);
// }

// getName();

const userService = (() => {
    // userService에는 값이 들어가있다. 뒤에 (()=>{})(); 사용했기 때문에 값이 통째로 들어간다.
    const selectAll = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        if (callback) {
            callback(users);
        }
    };

    const findById = async (id, callback) => {
        const response = await fetch(`/abc?id=${id}`);
        const user = await response.json();
        if (callback) {
            callback(user);
        }
    };

    return { selectAll: selectAll, findById: findById };
})();

userService.selectAll((users) => {
    console.log(users);
});

userService.findById(1, (user) => {
    console.log(user);
});
