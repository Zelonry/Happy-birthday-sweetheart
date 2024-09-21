
var TikTok = document.querySelector('.tiktok')

TikTok.addEventListener('click', function() {
    if (TikTok.classList.contains('opened')) {
        TikTok.classList.remove('opened');
    } else {
        TikTok.classList.add('opened');
    } 
    setTimeout(function() {
        window.location.href = "TikTok.html";
    }, 350);
});


