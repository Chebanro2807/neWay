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

new Nav();