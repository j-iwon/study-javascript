// 파이썬에서는 list 자바스크립트에서는 array 대괄호로 선언하면 array 객체가 된다

// let datas = [10, 8, 20, 3, 2];

// push(): 가장 마지막에 값 추가
// datas.push(100);
// console.log(datas);

// join(): 전달한 값으로 구분한 뒤 문자열로 리턴
// console.log(datas.join(","));

// slice(begin, end): 원하는 부분을 추출하기 위해 시작 인덱스와 마지막 인덱스를 전달한다.
// slice(begin): 시작 인덱스부터 마지막까지 추출한다.
// console.log(datas.slice(1, 3));
// console.log(datas.slice(1));

// splice(index, count): 삭제
// splice(index, count, ...args): 교체
// datas.splice(1, 1);
// console.log(datas);

// datas.splice(1, 1, 200);
// console.log(datas);

// pop(): 마지막 요소 삭제
// const dataRemoved = datas.pop();
// console.log(`${dataRemoved} 삭제`);
// console.log(datas);

// shift(): 첫 번째 요소 삭제
// const dataRemoved = datas.shift();
// console.log(`${dataRemoved} 삭제`);
// console.log(datas);

// indexOf(value): value를 Array객체에서 찾은 뒤 인덱스 번호를 리턴한다. 못찾으면 -1을 리턴한다.
// let datas = [10, 8, 20, 3, 2];
// const i = datas.indexOf(3);
// const i = datas.indexOf(90);
// console.log(i);

// spread operation
// let datas = [10, 8, 20, 3, 2];
// const numbers = [...datas];
// console.log(numbers);

// 비구조화 할당
// let datas = [10, 8, 20, 3, 2];
// const [number1, number2, number3, number4, number5, number6 = 5] = datas;
// console.log(number1, number2, number3, number4, number5, number6);

// array에 있는 주소 메소드

// forEach(callback) 반복
// let datas = [10, 8, 20, 3, 2];
// datas.forEach((data, i, datas) => {
//     console.log(data, i);
//     datas[i] = i + 1;
// });
// console.log(datas);

// map(callback) 기존 datas에 담긴 값을 토대로 새로운 array 를 만듬
// map(callback)
// let datas = [10, 8, 20, 3, 2];
// const result = datas.map((data) => data * 2);
// console.log(result);

// filter(callback) 조건식이 true인 것만 추출
// filter(callback)
// let datas = [10, 8, 20, 3, 2];
// const result = datas.filter((data) => data % 5 == 0);
// console.log(result);

// reduce(callback) 누적된 결과를 확인하고 싶을 때
// 초기값을 설정하면 data에 0번째부터 들어오고,
// 초기값을 설정하지 않으면 data에 1번째부터 들어온다.
// 이 때, 0번째 값이 variable로 들어온다.
// let datas = [10, 8, 20, 3, 2];
// const result = datas.reduce((variable, data, i) => {
//     console.log(variable);
// });

// const result = datas.reduce((variable, data, i) => {
//     console.log(variable);
// }, 0);

// const result = datas.reduce((variable, data, i) => {
//     console.log(data, i);
// });

// const result = datas.reduce((variable, data, i) => {
//     console.log(data, i);
// }, 0);

// const result = datas.reduce((variable, data, i) => {
//     variable.push(i + 1);
//     return variable;
// }, []);

// const result = datas.reduce((variable, data, i) => {
//     variable[`${i}`] = data;
//     return variable;
// }, {});

console.log(result);

// 문자열
// split(): 문자열을 Array 객체로 사용하고자 한다면, split()을 사용한다.
// "월화수목금토일".split("").forEach((data) => {
//     console.log(data);
// });

// includes(value): value가 문자열에 포함되었는 지 검사
// console.log("ABCD".includes("B"));

// 초기값에 {}를 적으면 variable이 객체가 된다.
// variable['${i}'] = data; 를 하면 인덱스 번호가 키값이 된 객체로 return

// Array() 대괄호가 아닌 다른 방법으로 선언 () 안에 숫자를 넣으면 값이 없이 빈 공간 설정
// fill() 초기값 전달
const datas = new Array(7).fill(0);
datas.forEach((data) => {
    console.log(data);
});
