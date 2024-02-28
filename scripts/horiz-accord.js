$(".hor-acc").on("click", ".hor-acc__item", function(e) {
    e.preventDefault()
    if ($(".hor-acc__item").hasClass("hor-acc__item--active") && 
    !$(e.currentTarget).hasClass("hor-acc__item--active")) {
        $(".hor-acc__item").removeClass("hor-acc__item--active");
    }
    $(e.currentTarget).toggleClass("hor-acc__item--active")
})