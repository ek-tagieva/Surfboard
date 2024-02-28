// const container = document.querySelector('.shop__slider')
// const item = document.querySelectorAll('.slide')
const track = document.querySelector('.shop__slider-track')
const btnNext = document.querySelector('.controls-arrow__right')
const btnPrev = document.querySelector('.controls-arrow__left')
// const slides = document.querySelectorAll(".slide")

btnNext.addEventListener("click", e => {
    e.preventDefault();
    track.appendChild(track.firstElementChild)
});
btnPrev.addEventListener("click", e => {
    e.preventDefault();
    track.insertBefore(track.lastElementChild, track.firstElementChild)
});

// btnNext.addEventListener('click', function() {nextSlide()})
// btnPrev.addEventListener('click', function() {prevSlide()})

// function nextSlide() {
//     track.style.transform = "translateX(-100%)"
// }
// function prevSlide() {
//     track.style.transform = "translateX(0%)"
// }



// const btnLeft = document.querySelector('.controls-arrow__left')
// const btnRight = document.querySelector('.controls-arrow__right')
// const sliderTrack = document.querySelector('.shop__slider-track')
// const computedStyles = window.getComputedStyle(sliderTrack)

// btnRight.addEventListener('click', function() {
//     let currentRight = parseInt(computedStyles.right)
//     if (currentRight < 200) {
//         sliderTrack.style.right = `${currentRight + 100}px`
//     }
//     console.log(currentRight)
// })
// btnLeft.addEventListener('click', function() {
//     let currentRight = parseInt(computedStyles.right)
//     if (currentRight > 0) {
//         sliderTrack.style.right = `${currentRight - 100}px`
//     }
// })