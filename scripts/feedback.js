$(document).on("click", ".control-feedback__item", function() {
    if (!$(this).is(".control-feedback__item--active")) {
        // console.log("нет класса актив");
        $(".control-feedback__item").removeClass("control-feedback__item--active");
        $(".feedback-person").removeClass("feedback-person--active");
        $(this).addClass("control-feedback__item--active");
        let numberIndex = $(this).index();
        $(".feedback__list").find(".feedback-person:eq(" + numberIndex + ")").addClass("feedback-person--active");
        $(".feedback-person").css("margin-left", `0%`)
        $(".feedback-person--active").css("margin-left", `${numberIndex * -100}%`)
    }
});

// const feedbackButtons = document.querySelectorAll(".control-feedback__item")
// const feedbackTabs = document.querySelectorAll(".feedback-person")
// console.log(feedbackTabs)
// feedbackButtons.forEach((element, index) => {
//     element.addEventListener("click", function(e) {
//         feedbackButtons.forEach((button, i) => {
//             button.classList.remove("control-feedback__item--active")
//             feedbackTabs[i].classList.remove("feedback-person--active")
//         })
//         feedbackTabs[index].classList.add("feedback-person--active")
//         element.classList.add("control-feedback__item--active")
//     })
// })
