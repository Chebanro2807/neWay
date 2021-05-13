class Nav {
    constructor() {
        this.buttons = document.querySelectorAll('.btn-help');
        this.dropdown = document.querySelector('.call-back')
        this.buttons.forEach (btn => {
            btn.addEventListener('click', this.toggleItem.bind(this));
        })
    }

    toggleItem() {
        this.dropdown.classList.toggle('active');
    }
}

new Nav();