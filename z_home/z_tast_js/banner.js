const banner = document.querySelector("div.banner");
const image_divs = document.querySelectorAll("div.banner div.image");
// console.log(image_divs);
// querySelectorAll 은 리스트 타입이다.
// NodeList(6) [div.image, div.image, div.image, div.image, div.image, div.image]
const first_div = document.querySelector("#first-temp");
const last_div = document.querySelector("#last-temp");
const prev = document.querySelector("div.prev");
const next = document.querySelector("div.next");
const dots = document.querySelectorAll("div.dot");
let count = 1;
let check = true;
let clickCheck = false;
let temp;

// image_divs 에서 image_div로 값을 하나씩 가져오고 i에서는 인덱스 번호를 가져온다.
image_divs.forEach(
    (image_div, i) =>
        // imange_divs에서 가져온 image_div의 백그라운드 이미지를 i 인덱스 번호를 증가시키면서 하나씩 넣어준다
        (image_div.style.backgroundImage = `url(./image/00${i + 1}.png)`)
);
first_div.style.backgroundImage = `url(./image/006.png)`;
last_div.style.backgroundImage = `url(./image/001.png)`;

// setIntercal : 일정한 간격으로 실행해주는 함수
// 2초마다 자동으로 autoSlide 실행
let slide = setInterval(() => autoSlide(), 2000);

//changeButtonStyle 실행
changeButtonStyle();

function changeButtonStyle() {
    // temp 값이 true 이면 배경화면이 없음
    if (temp) {
        temp.style.background = "none";
    }
    // temp 는 dots 리스트 번호를 값으로 가져온다.
    // let count = 1 이기 때문에 -1 해줘야 0번째도 실행될 수 있다.
    temp = dots[count - 1];
    // 해당 dots 의 스타일에 배경색을 변경
    dots[count - 1].style.background = "#313131";
}

// dots 에서 dot으로 값을 하나씩 가져오고 i에서는 인덱스 번호를 가져온다.
dots.forEach((dot, i) => {
    // dot에 마우스를 올렸을 때 event 실행
    dot.addEventListener("mouseover", () => {
        // dot의 백그라운드 색이 rgb(49,49,49) 색이면 clickCheck에 true가 담김
        clickCheck = dot.style.background == "rgb(49, 49, 49)";
        // 마우스를 dot에 올렸을 때 배경 색 변경
        dot.style.background = "#313131";
    });
    // dot에서 마우스를 뗐을 때 event 실행
    dot.addEventListener("mouseout", () => {
        // clickCheck 가 true 이면 return
        if (clickCheck) {
            return;
        }
        // clickCheck 가 true가 아니면 배경색 none
        dot.style.background = "none";
    });

    // dot을 클릭했을 때 event 실행
    dot.addEventListener("click", () => {
        clickCheck = true;
        // setInterval의 시간을 초기화해준다.
        clearInterval(slide);
        // dots 안에있는 dot의 방 번호를 count에 담아둔다.
        count = dot.classList[1];
        console.log(count);
        // count 값에 따라 계산되어 banner의 위치가 변경
        banner.style.transform = `translate(${-1500 * count}px)`;
        // 이동하는데 0.7초가 걸린다.
        banner.style.transition = "transform 0.7s";
        // 버튼 색이 변경됨
        changeButtonStyle();
        // 초기화 했던 시간을 다시 2초로 설정
        slide = setInterval(() => autoSlide(), 2000);
    });
});

// prev(이전버튼) 를 click 하면 event 실행
prev.addEventListener("click", function () {
    // check 가 false 일때 return
    if (!check) {
        return;
    }
    check = false;
    // setInterval의 시간을 초기화해준다.
    clearInterval(slide);
    // count 값에 따라 계산되어 banner의 위치가 변경
    banner.style.transform = `translate(${-1500 * --count}px)`;
    // 이동하는데 0.7초가 걸린다.
    banner.style.transition = "transform 0.7s";
    // prev 버튼을 눌렀을 때 페이지가 첫 번째 페이지라면
    if (count == 0) {
        setTimeout(() => {
            // 0초만에 이동
            banner.style.transition = "transform 0s";
            // 마지막 페이지로
            banner.style.transform = `translate(-9000px)`;
        }, 700);
        //count 를 마지막 페이지에 해당하는 6으로
        count = 6;
    }
    // 페이지에 맞는 dot 을 활성화
    changeButtonStyle();
    slide = setInterval(() => autoSlide(), 2000);
    setTimeout(() => {
        check = true;
    }, 700);
});

// next (다음 버튼) 를 click 하면 event 실행
next.addEventListener("click", function () {
    // check 가 false 일때 return
    if (!check) {
        return;
    }
    check = false;
    // setInterval의 시간을 초기화해준다.
    clearInterval(slide);
    // count 값에 따라 계산되어 banner의 위치가 변경
    banner.style.transform = `translate(${-1500 * ++count}px)`;
    // 이동하는데 0.7초가 걸린다.
    banner.style.transition = "transform 0.7s";
    // next 버튼을 눌렀을 때 페이지가 마지막 페이지라면
    if (count == 7) {
        setTimeout(() => {
            // 0초만에 이동
            banner.style.transition = "transform 0s";
            // 첫 번째 페이지로
            banner.style.transform = `translate(-1500px)`;
        }, 700);
        //count 를 첫번째 페이지에 해당하는 1로
        count = 1;
    }
    // 페이지에 맞는 dot 을 활성화
    changeButtonStyle();
    slide = setInterval(() => autoSlide(), 2000);
    setTimeout(() => {
        check = true;
    }, 700);
});

// check 를 false 로 시작해서
function autoSlide() {
    check = false;
    banner.style.transform = `translate(${-1500 * ++count}px)`;
    banner.style.transition = "transform 0.7s";

    if (count == 7) {
        setTimeout(() => {
            banner.style.transition = "transform 0s";
            banner.style.transform = `translate(-1500px)`;
        }, 700);
        count = 1;
    }
    changeButtonStyle();
    setTimeout(() => {
        check = true;
    }, 700);
}
