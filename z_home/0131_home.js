//  let, var, const 정확하게 알고 쓰기 !

globalThis.num3 = 3;

function example() {
    var num1 = 1; //전역변수 num1

    if (true) {
        var num2 = 2; // 전역변수 num2

        console.log(num1); //함수 내부에서 출력 가능
        console.log(num2); //함수 내부에서 출력 가능
        console.log(globalThis.num3);
    }
    console.log(num1); // 함수 내부에서 출력 가능
    console.log(num2); // 함수 스코프 내에서라면 출력 가능
    console.log(globalThis.num3);
}

example();

// console.log(num1); 함수 외부에서 변수 num1 접근 불가능
// console.log(num2); 함수 외부에서 변수 num1 접근 불가능
console.log(globalThis.num3); // globalThis 객체는 어디서든 사용 가능하다

// var을 외부에서 선언할때 범위는 전역인 전역변수이다.
// var 는 함수 내에서 선언하면 전역 변수로 함수 안에서 사용 가능하지만, 함수 밖에서는 사용할 수 없다
// 하지만 for과 같은 블록스코프 내에서 선언하면 for 외부에서도 사용이 가능하다
//  재선언과 재할당이 가능하다.
var id = "jiwon";
var id = "park";
console.log(id);

let name = "global";

if (true) {
    let name2 = "korea";
    console.log(name); // let으로 선언된 변수는 블록스코프로 선언된 블록과 그 하위 블록 내에서만 사용 가능하다.
    console.log(name2);
}

console.log(name);
// console.log(name2); ReferenceError if문 안에서 선언된 let 변수는 밖에서 출력할 수 없음

// console.log(a); ReferenceError
// let a = 10;

//let 으로 선언된 변수는 재할당이 가능하지만 재선언은 허용되지 않는다.
let jiwon = "park";
jiwon = "parkjiwon";
console.log(jiwon); // 재할당 가능

// let g1 = "park";
// let g1 = "jiwon";
// console.log(g1); // 재선언 안됨

console.log(b);
var b = 20;

// var는 변수가 선언되기 전에도 사용할 수 있으며 호이스팅 동작을 수행한다. 변수가 선언된 위치와 상관없이 동작한다.
// 때문에 코드 가독성과 예측성을 저하시킬 수 있다. (단점)
// let은 호이스팅이 발생되지만 변수가 선언되기 전에는 사용할 수 없으며 변수 선언 전에 접근하면 Error가 발생한다.
// var은 undefined로 초기화되지만 let은 되지 않는다.

// const도 let과 같이 var의 취약점을 보완해서 나왔다. let과 같은 블록스코프이다.
// const는 일정한 상수 값을 선언하는데 사용된다.

function example() {
    if (true) {
        var aa = 10; // 함수 스코프를 가지는 변수
        let bb = 20; // 블록 스코프를 가지는 변수
        const cc = 30; // 블록 스코프를 가지는 상수

        console.log(aa);
        console.log(bb);
        console.log(cc);
    }

    console.log(aa); // 10
    // console.log(bb); ReferenceError
    // console.log(cc); ReferenceError
}

example();

// const도 var 이나 let과 같은 호이스팅 대상이지만 초기화되지 않는다. Error 발생
// console.log(dd);
// const dd = 100; ReferenceError

// const can = "coke";
// const can = "coffee";
// console.log(can);
// const food = "cream";
// food = "icecream";
// console.log(food); 재선언과 재할당이 불가능하다

// const나 let은 var 보다 더 명확하게 변수를 제어할 수 있다.
// 하지만 속성이나 요소는 수정할 수 있음 (주의)

const person = {
    name: "김규일",
    age: 19,
};

person.age = 25;
console.log(person.age);

// var 보다 섬세하게 사용할 수 있는건 let과 const !! const 를 기본적으로 사용하지만
//  재할당이 필요한 경우 let 을 사용하면 편리할 수도 있다.

// ==: 값만 비교
// ===: 값과 타입 모두 비교
// data1 = 1;
// data2 = "1";
// console.log(data1 == data2);
// console.log(data1 === data2);

// ||: 앞에 있는 값이 false 값이라면, 뒤에 있는 값으로 사용된다.
// false로 취급되는 값: "", null, 0, undefined
// let value;
// let data = value || 10;
// console.log(data);

// &&: 앞의 조건식이 false라면, false이고
// 앞의 조건식이 true라면 뒤에 적은 값으로 대체된다.
// let check = false;
// console.log(check && 10);

// 삼항 연산자 (?:)
// 조건식 ? 참 : 거짓
// let check = 10 > 11;
// console.log(check ? 10 : 11);

// switch
// 하나의 변수에 여러 개의 값이 담길 수 있다면,
// 매번 ==으로 비교하는 if문 보다 switch문을 사용하면 더 간결해진다.

// 디폴트 파라미터
// 값이 전달되지 않았을 경우 초기값을 설정할 수 있다.

// function color(a, b, c) {
//     if (c === void 0) {
//         c = "black";
//     }
//     console.log(a, b, c);
// }

// color("red", "yellow");

// 콜백 함수는 '분리'를 목적으로 한다.
// JS 에서는 객체 내부의 필드를 프로퍼티라고 부른다.
// 객체를 사용하는 방법
// 1. 일반적으로 . 을 사용하여 프로퍼티에 접근한다.
// 2. 이름에 "-"와 같은 특수 문자가 들어가있거나 이름에 규칙성이 있어 한 번에 가져와야 할 때에는
// []를 사용하여 접근한다.
// data1, data2, ... 를 모두 써야할 때 : console.log(user['data{i}'])

// 넣을 값이 있을 땐 {} 중괄호, 없을 땐 Object 라는 생성자를 만들어 사용
// let game = new Object(); 생성자
// new 라는 새로운 주소값에 lunch 라는 빈 공간 생성

// 프로토 타입 (앞글자가 대문자)
// new 뒤에 나오는 생성자를 자바스크립트에서는 프로토타입이라고 부른다.
// 프로토타입은 함수로 선언하며, 반드시 대문자로 시작한다.
// this는 해당 객체를 의미한다.

// const customer = {
//     id: 1234,
//     name: "일이삼사",
// };

// // 비구조 할당(구조 분해)
// const { id, name } = user;
// console.log(id, name);

// // 객체 스프레드
// let customerUpdated = { ...customer };
// console.log(customerUpdated);

// // 이미 있는 프로퍼티를 쓰면 수정, 없는걸 쓰면 추가
// let customerUpdated = { ...customer, age: 20 };
// console.log(customerUpdated);

// // 이미 해당 프로퍼티가 존재하면 수정된다.
// let customerUpdated = { ...customer, name: "ted" };
// console.log(customerUpdated);
