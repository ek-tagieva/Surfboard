$(document).on("click", ".team__name", function() {
    if(!(($(this).closest(".accordion-desktop").is(".accordion-desktop--active"))||($(this).closest(".accordion-mobile").is(".accordion-mobile--active")))) {
        // console.log("работает");
        $(".accordion-desktop").removeClass("accordion-desktop--active");
        $(this).closest(".accordion-desktop").addClass("accordion-desktop--active");
        $(".accordion-mobile").removeClass("accordion-mobile--active");
        $(this).closest(".accordion-mobile").addClass("accordion-mobile--active");
    } else {
        $(".accordion-desktop").removeClass("accordion-desktop--active");
        $(".accordion-mobile").removeClass("accordion-mobile--active");
    }
})



