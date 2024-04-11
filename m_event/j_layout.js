const photoLayout = (() => {
    const wrap = document.getElementById("photo-wrap");

    const showPhotos = (photos) => {
        wrap.innerHTML = `<div><img src=${photos[0].thumbnailUrl}></div>`;
    };

    return { showPhotos: showPhotos };
})();
