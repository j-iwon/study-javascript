const noticeBoard = (() => {
    // 게시글 작성
    // 첨부파일 정보(fileName, filePath, fileSize)는 다른 곳에서 처리한다.
    const write = ({ title, content ...rest }, callback) => {
        if (callback) {
            callback(... rest);
        }
    };
    // 게시글 목록
    const getlist = (callback) => {
        const post = [{} , {}];
        if (callback) {
            callback(post || []);
        }
    };
    // 게시글 조회
    const findById = (id) => {
        const post = {id:1, title: "제목1", content: "내용1", files: [],}
    };
    // 게시글 수정
    // files 로 바로 받아옴
    const update = ({ id, title, content, files}, callback) => {
        if (callback) {
            callback(files);
        }
    };
    // 게시글 삭제
    const remove = (id) => {};

    return {
        write: write,
        getlist: getlist,
        findById: findById,
        update: update,
        remove: remove,
    };
})();


const post = {
    title: "제목1", 
    content: "내용1", 
    fileName: "", 
    filePath: "", 
    fileSize: "",
};
// 게시글 작성
// fileService 라고 가정
noticeBoard.write(post, fileService.insert);

// 게시글 목록
noticeBoard.getlist((post) => {
    if (!post.length) {
        console.log("게시글이 없습니다.");
        return;
    }
    console.log(post);
});

// 게시글 조회
noticeBoard.findById(1, (post) => {
    console.log(post);

    // 게시글 수정
    post.title = "수정된 제목1";
    noticeBoard.update(post);

    // 게시글 삭제
    const remove = (post, id) => {};
});
