document.getElementById('login').addEventListener('click',function() {
    document.body.classList.add('fade-out');
    setTimeout(() => {window.location.href = 'page.html';},500);
});