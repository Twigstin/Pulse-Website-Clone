const slideIcon = document.getElementById("slide-menu");
const slidebar = document.querySelector(".slide-bar")
const slidebarContent = document.querySelectorAll(".slidebar-content")
const main = document.querySelector("main")
const menuCover = document.getElementById("#cover")


slideIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    slideIcon.classList.toggle("active");
    slidebar.classList.toggle("active");
    if (slidebar.classList.contains("active")) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = '';
    }
        
});


const reveals = document.querySelectorAll(".reveal");

// Prevent browser from restoring previous scroll position on page reload
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    })
}, { thereshold: 0.2 });
reveals.forEach(reveal => observer.observe(reveal));


const btn = document.querySelectorAll(".btn")
btn.forEach(button => {
    button.addEventListener("pointerdown", () => {
        button.classList.add("pressed");
    })

    button.addEventListener("pointerup", () => {
        button.classList.remove("pressed");
    })
    button.addEventListener("pointerleave", () => {
        button.classList.remove("pressed");
    })

    button.addEventListener("pointercancel", () => {
        button.classList.remove("pressed");
    })
})