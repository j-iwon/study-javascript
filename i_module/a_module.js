const userService = (() => {
    // 회원 가입
    // {id, email, password, name}외부에서 객체를 비구조화 할당으로 받는다.
    const join = ({ id, email, password, name }) => {};
    // 로그인
    // {email, password}를 받아서 로그인
    const login = ({ email, password }) => {};
    //  따로 객체를 받지 않고(()비어있음) 저장되어있는 공간에서 식별자를 구분하여(return) 정보를 가져와야한다.
    // 마이페이지
    const findByUser = (callback) => {
        // DB 조회 결과
        const user = { id: 1, email: "test@gmail.com", name: "test" };
        if (callback) {
            callback(user);
        }
    };
    // 회원가입과 동일하게 정보를 받은 후 (user로 받으면 안되는 이유 : user 은 이미 할당된 주소값이 있기 때문에 user가 아닌 객체를 하나하나 받아와야한다)
    // 여기서 {id, email, password, name} 는 회원이 직접 입력하는게 아닌 마이페이지의 정보를 그대로 가져와서 쓴다.
    // 회원 수정 (수정 후 마이페이지로 이동하기 때문에 callback 필요없음)
    const update = ({ id, email, password, name }) => {};
    // 이미 로그인이 된 상태에서 실행되는 함수이므로 id는 새로 받는게 아닌 이미 저장된 정보를 가져와서  쓴다.
    // 회원 탈퇴 (탈퇴 실행 후 메인페이지로 가기때문에 화면에 뿌릴 이유가 없음 callback 필요없음)
    const withdraw = () => {};
    //  1번째 줄의 함수에 대한 return. userService에 값을 넣어줘야한다.
    return {
        join: join,
        login: login,
        findByUser: findByUser,
        update: update,
        withdraw: withdraw,
    };
})();
// (function () {})() 선언과 동시에 사용

// callback을 받아야하는 이유 : DB에 저장하는데서 끝나는게 아니라 callback을 받아서 정보를 전달하여 화면에 뿌려줘야한다.

// 회원가입
const user = { id: 1, email: "test@gmail.com", name: "test" };
// 회원가입 버튼을 눌렀을 때, 실행되어야할 함수
userService.join(user);

// 로그인
const email = "";
const password = "";

userService.login(email, password);

// 마이페이지
// user을 callback 받아서 실행
userService.findByUser((user) => {
    console.log(user);
    // 회원 수정
    // 마이페이지의 정보를 수정해서 전달해야한다.
    user.email = "apple@gmail.com";
    userService.update(user);
});

// 회원 탈퇴
// 로그인 후 실행되는 함수
const withdraw = () => {};
