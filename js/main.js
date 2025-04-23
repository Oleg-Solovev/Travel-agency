// События кликов для бургер меню
$(document).ready(
    document.addEventListener("DOMContentLoaded", function () {
        $('#burger').on("click", function () {
            $('.header').toggleClass("open");
        })
        const el = $('.nav__link');
        for (let i = 0; i < el.length; i++) {
            el[i].on("click", function () {
                $('.header').toggleClass("open");
            })
        }

        $(document).on("click", function (event) {
            const targetElement = $('#burger');
            if (!targetElement.is(event.target) && targetElement.has(event.target).length === 0) {
                $('.header').toggleClass("open");
            }
        })
    })
)
