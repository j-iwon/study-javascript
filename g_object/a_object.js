// JS에서는 객체 내부의 필드를 프로퍼티라고 부른다.
let user = {
    name: "박지원",
    age: 20,
    adress: "서울",
    introduce: () => {
        console.log("Hi");
    },
};
console.log(typeof user);
user.introduce();
// user.introduce; <- 주소값 , 값을 보려면 (); 를 붙이기

// 객체를 사용하는 방법 2가지
// 1. 일반적으로 사용하는 방법 . 을 사용하여 프로퍼티에 접근한다.
console.log(user.name);
// 2.프로퍼티 이름에 "-"와 같은 특수 문자가 들어가 있거나
// 프로퍼티 이름에 규칙성이 있어서 한 번에 가져와야 할 때에는
// []를 사용해서 프로퍼티에 접근한다.
console.log(user["name"]);
// data1, data2, ... 를 모두 써야할 때 : console.log(user['data{i}'])
