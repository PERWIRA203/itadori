
//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let clickDom1 = document.getElementById('click1');
let clickDom2 = document.getElementById('click2');
let clickDom3 = document.getElementById('click3');
let clickDom4 = document.getElementById('click4');
let dDom1 = document.getElementById('d1');
let dDom2 = document.getElementById('d2');
let dDom3 = document.getElementById('d3');
let dDom4 = document.getElementById('d4');


let carouselDom = document.querySelector('.casseroule');
let SliderDom = carouselDom.querySelector('.casseroule .list');
let thumbnailBorderDom = document.querySelector('.casseroule .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.casseroule .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 8000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}

if (dDom1 = (1))
clickDom1.addEventListener('click', function() {
    navigateToSlide(1);
});

clickDom2.addEventListener('click', function() {
    navigateToSlide(1);
});

clickDom3.addEventListener('click', function() {
    navigateToSlide(1);
});

clickDom4.addEventListener('click', function() {
    navigateToSlide(1);
});

let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.casseroule .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.casseroule .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}
function navigateToSlide(index) {
    let SliderItemsDom = SliderDom.querySelectorAll('.casseroule .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.casseroule .thumbnail .item');
    
    // Calculate the number of slides to move
    let slidesToMove = index - 0; // Current slide is assumed to be the first slide
    // Move the slider accordingly
    for (let i = 0; i < slidesToMove; i++) {
        nextDom.click(); // Simulate clicking the 'next' button
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(function() {
        carouselDom.classList.remove('click1');
        carouselDom.classList.remove('click2');
        carouselDom.classList.remove('click3');
        carouselDom.classList.remove('click4');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(function() {
        next.click();
    }, timeAutoNext);
}


