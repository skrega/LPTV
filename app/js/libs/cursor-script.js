$(function () {
    if ($(window).width() > 1101) {
        let mainWrapper = $(".main-wrapper").height();
        console.log(mainWrapper);
        let cursor = document.querySelector(".cursor");
        let cursorinner = document.querySelector(".cursor2");
        let a = document.querySelectorAll(".main-item__link");
        let swiperScrollBar = document.querySelector(".swiper-scrollbar");

        const screenWidth = window.screen.width 

        const header = document.querySelector('header');

        if (mainWrapper) {
            document.addEventListener("mousemove", mousemoveCursor);
            document.addEventListener("mousemove", cursorPosition);
            document.addEventListener("mousedown", mousedownAddClass);
            document.addEventListener("mouseup", mouseupRemoveClass);
        }

        function mousemoveCursor(e) {
            let x = e.clientX;
            let y = e.clientY;
            if (x > screenWidth/2) {
                cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
                cursorinner.style.display = "none";
            } else {
                cursorinner.style.display = "flex";
            }
        }

        function cursorPosition(e) {
            let x = e.clientX;
            let y = e.clientY;
            if (x < screenWidth/2) {
                cursorinner.style.left = x + "px";
                cursorinner.style.top = y + "px";
                cursor.style.display = "none";
            } else {
                cursor.style.display = "flex";
            }
        }

        function mousedownAddClass() {
            cursor.classList.add("click");
            cursorinner.classList.add("cursorinnerhover");
        }

        function mouseupRemoveClass() {
            cursor.classList.remove("click");
            cursorinner.classList.remove("cursorinnerhover");
        }

        $(window).on("scroll", function () {
            let scrollPos = 0;
            let scroll = $(this).scrollTop();
            if (scroll > mainWrapper - 200) {
                document.removeEventListener("mousemove", mousemoveCursor);
                document.removeEventListener("mousemove", cursorPosition);
                document.removeEventListener("mousedown", mousedownAddClass);
                document.removeEventListener("mouseup", mouseupRemoveClass);
            } else {
                document.addEventListener("mousemove", mousemoveCursor);
                document.addEventListener("mousemove", cursorPosition);
                document.addEventListener("mousedown", mousedownAddClass);
                document.addEventListener("mouseup", mouseupRemoveClass);
            }
        });
        a.forEach((item) => {
            item.addEventListener("mouseover", () => {
                cursor.classList.add("hover");
            });
            item.addEventListener("mouseleave", () => {
                cursor.classList.remove("hover");
            });
        });
        header.addEventListener("mouseover", () => {
            cursor.classList.add("hover");
            cursorinner.classList.add("hover");
        });
        header.addEventListener("mouseleave", () => {
            cursor.classList.remove("hover");
            cursorinner.classList.remove("hover");
        });
        swiperScrollBar.addEventListener("mouseover", () => {
            cursor.classList.add("hover");
            cursorinner.classList.add("hover");
        });
        swiperScrollBar.addEventListener("mouseleave", () => {
            cursor.classList.remove("hover");
            cursorinner.classList.remove("hover");
        });
    }
});
