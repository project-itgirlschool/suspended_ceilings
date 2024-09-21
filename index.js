const reviewImgs = ['feedback_1.jpg','feedback_2.jpg','feedback_3.jpg']

function onNextClick() {
    const arr = document.querySelector('.reviews__carousel_pic img').src.split('/');
    const curImg = arr[arr.length-1];
    let global_index = 0;
    reviewImgs.forEach((img, index)=>{
        if (img === curImg && index!==reviewImgs.length) global_index = index+1
    })
    document.querySelector('.reviews__carousel_pic img').src = `./assets/images/reviews/${reviewImgs[global_index<reviewImgs.length ? global_index: 0]}`
}

document.querySelector('.next_btn').addEventListener('click',onNextClick)