
// const slides = document.querySelector('.slides');
// const slideWidth = slides.clientWidth;
// const images = document.querySelectorAll('.slide img');
// let currentIndex = 0;

// function slideParallax(index) {
    //     images.forEach((image, i) => {
        //         const offset = (i - index) * 50;
        //         image.style.transform = `translateX(${offset}px)`;
        //     });
        // }
        
        // function showSlide(index) {
            //     slides.style.transform = `translateX(-${index * slideWidth}px)`;
            //     slideParallax(index);
            //     currentIndex = index;
            // }
            
            // function prevSlide() {
                //     if (currentIndex > 0) {
                    //         showSlide(currentIndex - 1);
                    //     } else {
                        //         showSlide(images.length - 1);
                        //     }
                        // }
                        
                        // function nextSlide() {
                            //     if (currentIndex < images.length - 1) {
                                //         showSlide(currentIndex + 1);
                                //     } else {
                                    //         showSlide(0);
                                    //     }
                                    // }
                                    
                                    // let autoplayInterval = setInterval(nextSlide, 3000); 
                                    
                                    // function pauseAutoplay() {
                                        //     clearInterval(autoplayInterval);
                                        // }
                                        
                                        // function resumeAutoplay() {
//     autoplayInterval = setInterval(nextSlide, 3000);
// }

// document.querySelector('.prev').addEventListener('mouseenter', pauseAutoplay);
// document.querySelector('.next').addEventListener('mouseenter', pauseAutoplay);
// document.querySelector('.prev').addEventListener('mouseleave', resumeAutoplay);
// document.querySelector('.next').addEventListener('mouseleave', resumeAutoplay);









// // SLIDER ANNIMATION

const slides = document.querySelector('.slides');
const slideWidth = slides.clientWidth;
const totalSlides = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
    currentIndex = index;

    // slide.hero.style.animation = `translateY(-${index * slideWidth})`;
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

let autoplayInterval = setInterval(nextSlide, 3000); 

function pauseAutoplay() {
    clearInterval(autoplayInterval);
}

function resumeAutoplay() {
    autoplayInterval = setInterval(nextSlide, 3000);
}

// document.querySelector('.btn').addEventListener('mouseenter', pauseAutoplay);
// document.querySelector('.btn').addEventListener('mouseleave', resumeAutoplay);

//buttom smoth animation



document.getElementById('FIND-OUT-MORE').addEventListener('click', function() {
    var button = this;
    button.style.transform = 'scale(1.15)';
    setTimeout(function() {
        button.style.transform = 'scale(1)';
    }, 5000); 
});
document.getElementById('SHOP-NOW').addEventListener('click', function() {
    var button = this;
    button.style.transform = 'scale(1.15)';
    setTimeout(function() {
        button.style.transform = 'scale(1)';
    }, 5000); 
});


//scroll animaion


    let scrollContainer = document.querySelector(".gallery");
    let backBtn = document.getElementById("scroll-left");
    let nextBtn = document.getElementById("scroll-right");
    scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
}); 

nextBtn.addEventListener("click", ()=>{ 
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 500;

        
    });
    
    backBtn.addEventListener("click", ()=>{
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= 500;
        

    
    });


  