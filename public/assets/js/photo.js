let indexPhoto = 0;
const allPhotos = [];

function fillingPhotoArray() {
    for (let i = 1; i < 16; i++) {
        allPhotos.push({
            src: `images/${i}.jpg`,
            caption: `Рисунок: ${i}`,
        })
    }
}

function renderPhoto(itemImg, indexImg) {
    const imgBlock = document.createElement('figure');
    const imgBlk = document.createElement('img');
    imgBlk.title = itemImg.caption;
    imgBlk.src = itemImg.src;

    const imgCaption = document.createElement('figcaption');
    imgCaption.textContent = itemImg.caption;
    imgBlock.append(imgBlk, imgCaption);


    function slidePhoto(currentNumber) {
        $('#right').unbind('click');
        $('#left').unbind('click');
        $('#right').click(function() {
            const nextVal = currentNumber + 1;
            indexPhoto = nextVal > allPhotos.length - 1 ? 0 : nextVal;
            drawPhoto(indexPhoto)();
        });
        $('#left').click(function() {
            const nextVal = currentNumber - 1;
            indexPhoto = nextVal < 0 ? allPhotos.length - 1 : nextVal;
            drawPhoto(indexPhoto)();
        });
    }

    const drawPhoto = (imgNumber) => () => {
        $('.fullPhoto').fadeIn(400);
        $('.photo').html(`<img src="${allPhotos[imgNumber].src}" title="${itemImg.caption}" class="big"></img>`);
        indexPhoto = indexImg;
        $('#text').html(`Фото ${imgNumber+1} из 15`);
        slidePhoto(imgNumber);
        $('.exit-f').click(function() {
            $('.fullPhoto').css("display", "none");
            $('photo').empty();
        });
    }

    imgBlock.onclick = drawPhoto(indexImg);

    return imgBlock;
}

function renderGallery() {
    targetBlk = document.getElementById("photoGallery");
    fillingPhotoArray();
    const prepageGal = allPhotos.map((elm, i) => renderPhoto(elm, i));
    targetBlk.append(...prepageGal);
}



document.addEventListener('DOMContentLoaded', function() {
    renderGallery();
});