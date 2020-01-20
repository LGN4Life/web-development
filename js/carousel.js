const track = document.querySelector('.carousel__track');
const carousel = document.querySelector('.carousel');
const dotsNav = document.querySelector('.carousel__nav')
const dots = Array.from(dotsNav.children);

const next_button = document.querySelector('.carousel__button--right');
const previous_button =  document.querySelector('.carousel__button--left');
const slides = Array.from(track.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth*index + 'px';
}


previous_button.style.display='none';



const updateSlidePos = (track, currentSlide,targetSlide) => {
  track.style.transform = 'translateX(-' +  targetSlide.style.left + ')';
  currentSlide.classList.remove('currentSlide');
  targetSlide.classList.add('currentSlide');
};


const updateArrows = (targetIndex,previous_button,next_button) => {
  if (targetIndex ==0 ){
    previous_button.style.display='none';
    next_button.style.display='';

  } else if (targetIndex == slides.length-1) {
    console.log(previous_button.style.display);
    previous_button.style.display='';
    next_button.style.display='none';

  } else{
    previous_button.style.display='';
    next_button.style.display='';
  }
}

const updateDots = (dots,targetDot,targetIndex) => {
  if (targetDot){
    currentDot = dotsNav.querySelector('.currentDot');
    currentDot.classList.remove('currentDot');
    targetDot.classList.add('currentDot');

    console.log(next_button.style.display);
    console.log(previous_button.style.display);
  };
};

slides.forEach(setSlidePosition);





next_button.addEventListener('click',e => {
  const currentSlide =  track.querySelector('.currentSlide');
  const nextSlide = currentSlide.nextElementSibling;
  updateSlidePos(track,currentSlide,nextSlide);
  targetIndex = slides.findIndex(slide=> slide=== nextSlide);
  updateArrows(targetIndex,previous_button,next_button);
  targetDot = dots[targetIndex];
  updateDots(dots,targetDot, targetIndex);



});
previous_button.addEventListener('click',e => {
  const currentSlide =  track.querySelector('.currentSlide');
  const previousSlide = currentSlide.previousElementSibling;
  updateSlidePos(track,currentSlide,previousSlide);
  targetIndex = slides.findIndex(slide=> slide=== previousSlide);
  updateArrows(targetIndex,previous_button,next_button);
  targetDot = dots[targetIndex];
  updateDots(dots,targetDot, targetIndex);
});

dotsNav.addEventListener('click',e =>{
  targetDot = e.target.closest('button');
  targetIndex = dots.findIndex(dot=> dot=== targetDot);

  targetSlide = slides[targetIndex];
  currentSlide =  track.querySelector('.currentSlide');

  updateDots(dots,targetDot, targetIndex);
  updateArrows(targetIndex,previous_button,next_button);
  updateSlidePos(track,currentSlide,targetSlide);

});

iframe.oncontextmenu = function() {
    return false;
};




//console.log(slides);
