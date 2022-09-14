$(function () {
    // $(".project-video").on('click', function () {
    //     let clearUrl = window.location.href.split("#")[0];
    //     window.history.pushState({}, clearUrl);
    // })

    let projectVideoHeigth = $(".project-video").height();
    let cursor = document.querySelector(".cursor");
    const header = document.querySelector('header');
    let videoBtn = document.querySelector('.btn-sound');
    document.addEventListener("mousemove", mousemoveCursor);
    document.addEventListener("mousedown", mousedownAddClass);
    document.addEventListener("mouseup", mouseupRemoveClass);

    function mousemoveCursor(e) {
        let x = e.clientX;
        let y = e.clientY;
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    }

    function mousedownAddClass() {
        cursor.classList.add("click");
    }

    function mouseupRemoveClass() {
        cursor.classList.remove("click");
    }

    $(window).on("scroll", function () {
        let scrollPos = 0;
        let scroll = $(this).scrollTop();
        if (scroll > projectVideoHeigth - 200) {
            document.removeEventListener("mousemove", mousemoveCursor);
            document.removeEventListener("mousedown", mousedownAddClass);
            document.removeEventListener("mouseup", mouseupRemoveClass);
            cursor.classList.add("hover");
        } else {
            document.addEventListener("mousemove", mousemoveCursor);
            document.addEventListener("mousedown", mousedownAddClass);
            document.addEventListener("mouseup", mouseupRemoveClass);
            cursor.classList.remove("hover");
        }
        scrollPos = scroll;
    });
    header.addEventListener("mouseover", () => {
        cursor.classList.add("hover");
    });
    header.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
    });
    videoBtn.addEventListener("mouseover", () => {
        cursor.classList.add("hover");
    });
    videoBtn.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
    });
    // video
    let video = document.querySelector(".project-video");
    videoBtn.addEventListener("click", function () {
        videoBtn.classList.toggle('unmute')
        let isMuted =
            $(this)
                .toggleClass("btn-sound__mute btn-sound__noisy")
                .hasClass("btn-sound__mute");
        $('.project-video').prop("muted", isMuted);
        video.volume = 0.5;
    }, false);

})