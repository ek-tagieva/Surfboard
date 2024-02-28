const sections = $(".section");
const display = $(".wrapper");

let inScroll = false;

sections.first().addClass("section--active");

const performTransition = sectionEq => {
    if (inScroll === false && sectionEq < 9) {
        inScroll = true;
        const position = sectionEq * -100;
        const sideMenu = $(".fixed-menu");

        display.css({transform:`translateY(${position}%)`});
        sections.eq(sectionEq).addClass("section--active").siblings().removeClass("section--active");

        sideMenu.find(".fixed-menu__item").eq(sectionEq).addClass("fixed-menu__item--active").siblings().removeClass("fixed-menu__item--active");
        setTimeout(() => {inScroll = false}, 500);
    }

}

const scrollViewport = direction => {
    const activeSection = sections.filter(".section--active")
    const nextSection = activeSection.next()
    const prevSection = activeSection.prev()
    if (direction === "next" && nextSection.length) {
        performTransition(nextSection.index())
    }
    if (direction === "prev" && prevSection.length) {
        performTransition(prevSection.index())
    }
}

$(window).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;
    if (!e.target.closest(".map")) {
        if (deltaY > 0) {
            scrollViewport("next")
        } else {
            scrollViewport("prev")
        }
    }
})

$(window).on("keydown", e => {
    const tagName = e.target.tagName.toLowerCase();
    if (tagName !== "input" && tagName !== "textarea") {
        switch (e.keyCode) {
        case 38:
            scrollViewport("prev")
            break;
        case 40:
            scrollViewport("next")
            break;
        }
    }
    
})

$("[data-scroll-to]").click(e => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");
    const reqSection = $(`[data-section-id=${target}]`);
    performTransition(reqSection.index())
})


// const btnPages = document.querySelectorAll(".fixed-menu__item")

// function withoutOnePageScroll() {
//     for (let i = 0; i < btnPages.length; i++) {
//         btnPages[i].addEventListener("click", () => {
//             for (page of btnPages) {
//                 page.classList.remove('fixed-menu__item--active')
//             };
//             btnPages[i].classList.add('fixed-menu__item--active');
//             // скроллим по индексу кнопки через высоту окна
//             let scrollCount = i * document.documentElement.clientHeight;
//             window.scrollTo(0, scrollCount)
//             console.log('отступ window.pageYOffset: ' + window.pageYOffset)

//             // let calcOffset = document.documentElement.scrollHeight / window.pageYOffset

//         })
//     }
//     window.addEventListener('scroll', () => {
//         // высчитываем индекс положения окна от начального положения
//         let percent = document.documentElement.clientHeight * 0.35;
//         let indexActivePage = Math.floor((window.pageYOffset + percent) / document.documentElement.clientHeight);
//         // связываем положения окна с боковой навигацией
//         for (page of btnPages) {
//             page.classList.remove('fixed-menu__item--active')
//         };
//         btnPages[indexActivePage].classList.add('fixed-menu__item--active');
//     })
// }
// withoutOnePageScroll()

//------------------------------------------------------------

// const points = document.querySelectorAll('.page-slider__point');
// let page = 'window'

// function offSet() {
//     return window.pageYOffset
// }

// for (point of points) {
//     point.addEventListener('click', () => pageScroll())
// }
// function pageScroll() {
//     window.scrollBy(0,1000)
//     const windowScroll = window.pageYOffset
// //     console.log(windowScroll)
// // }

// window.addEventListener('load', function() {
//     // if (document.body.classList.contains('fullscreen') && window.innerWidth > 1024) {}
//         const section = document.querySelectorAll('section');
//         const content = document.querySelectorAll('.main__content');
//         let spin_value = 0;

//         window.addEventListener('mousewheel', function(e) {
//             if (e.deltaY > 0) {
//                 //scroll down
//                 spin_value += 1;
//             } else {
//                 //scroll up
//                 spin_value -= 1;
//             }
//             console.log('afa');
            
//             // scroll_content(spin_value);
//         });

//         // function scroll_content(count) {
//         //     content.setAttribute('style', 'transform: translateY(-`+ count*100 +`vh);')
//         // }
// })
