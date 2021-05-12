class Nav {
    constructor() {
        this.button = document.getElementById('btn-help');
        this.dropdown = document.querySelector('.call-back')
        this.button.addEventListener('click', this.toggleItem.bind(this));
    }

    toggleItem() {
        this.dropdown.classList.toggle('active');
    }
}

new Nav();