const submit = document.getElementById("submit");
const modal = document.getElementById("modal");
const btnClose = document.querySelector(".btn-close");
const overlay = document.querySelector(".modal__overlay");
// const body = document.querySelector('body');
const form = $(".form");
const nameF = form.find("[name='name']");
const phone = form.find("[name='phone']");
const comment = form.find("[name='comment']");
const inputs = [nameF, phone, comment];

submit.addEventListener("click", (e) => {
    e.preventDefault();
    inputs.forEach(field => {
        field.removeClass("form__input-error")
        if (field.val().trim() == "") {
            field.addClass("form__input-error")
        }
    });
    
    const errorFields = form.find(".form__input-error");
    if (errorFields.length === 0) {
        modalOpen();
    }
});

btnClose.addEventListener("click", (e) => {
    e.preventDefault();
    modalClose();
})

overlay.addEventListener("click", (e) => {
    modalClose();
})

function modalOpen() {
    modal.style.display = "block";
    body.style.overflow = "hidden"
};

function modalClose() {
    modal.style.display = "none";
    body.style.overflow = "auto"
}

