class Nav {
    constructor() {
        this.buttons = document.querySelectorAll('.btn-help');
        this.dropdown = document.querySelector('.call-back')
        this.buttons.forEach (btn => {
            btn.addEventListener('click', this.toggleItem.bind(this));
        })
        this.createScrollAnimation();
    }

    toggleItem() {
        this.dropdown.classList.toggle('active');
    }

    createScrollAnimation() {
        const anchors = document.querySelectorAll("a[href^='#']")
        for (let anchor of anchors) {
            anchor.addEventListener("click", function(e) {
                e.preventDefault()
                let goto = anchor.hasAttribute("href") ? anchor.getAttribute("href") : "body";
                document.querySelector(goto).scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            });
        }
    }
}

function handleImg(myImg, observerLazyLoading) {
    myImg.forEach(myImgSingle => {
        if (myImgSingle.intersectionRatio > 0) {
            loadImage(myImgSingle.target);
            observerLazyLoading.unobserve(myImgSingle.target)
        }
    });
}

function loadImage(image) {
    image.src = image.getAttribute('data');
    image.removeAttribute('data');
}


const optionsLazyLoading = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
}

const observerLazyLoading = new IntersectionObserver(handleImg, optionsLazyLoading);
const images = document.querySelectorAll('img[data]');
images.forEach(img => {
    observerLazyLoading.observe(img);
})

new Nav();