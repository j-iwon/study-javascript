// 넣을 값이 있을 땐 {} 중괄호, 없을 땐 Object 라는 생성자를 만들어 사용
let lunch = new Object(); // 생성자
// new 라는 새로운 주소값에 lunch 라는 빈 공간 생성

lunch.name = "김밥";
lunch.price = "3000";

console.log(lunch);

lunch.pay = () => {
    console.log("결제 완료");
};

lunch.pay();
