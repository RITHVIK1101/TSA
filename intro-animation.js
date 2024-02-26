window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var textOverlay = document.querySelector('.text-overlay');
    var opacity = 1 - (scrollPosition / (window.innerHeight / 2));
    textOverlay.style.opacity = opacity;
    var videoBackground = document.getElementById('video-background');
    var blurAmount = (scrollPosition / (window.innerHeight / 2)) * 10;
    videoBackground.style.filter = 'blur(' + blurAmount + 'px)';
});