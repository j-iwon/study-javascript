const user = {
    id: 1,
    name: "han",
};

// 비구조 할당(구조 분해)
const { id, name } = user;
console.log(id, name);

// const { id: number, name, age = 10 } = user;
// console.log(number, name, age);

// 객체 스프레드
let userUpdated = { ...user };
console.log(userUpdated);

// 이미 있는 프로퍼티를 쓰면 수정, 없는걸 쓰면 추가
let userUpdatede = { ...user, age: 20 };
console.log(userUpdated);

// 이미 해당 프로퍼티가 존재하면 수정된다.
let userUpdated = { ...user, name: "ted" };
console.log(userUpdated);
