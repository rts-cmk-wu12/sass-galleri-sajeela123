
document.querySelectorAll('.gallery__item img').forEach(image => {
    image.addEventListener('click', function() {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `<div class="modal-content"><img src="${this.src}" alt=""><span class="close">&times;</span></div>`;
        document.body.appendChild(modal);

        modal.querySelector('.close').addEventListener('click', function() {
            modal.remove();
        });
    });
});
