document.querySelectorAll('.btn-sidebar').forEach(btn => {

    btn.addEventListener('click', () => {
        document.body.classList.toggle('toggle');
    });
});
