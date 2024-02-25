// JavaScript to handle the zoom effect
window.addEventListener('scroll', function() {
  var scrollPos = window.scrollY;
  var image = document.querySelector('.hero');
  
  // You can adjust the zoom factor based on the scroll position
  var zoomFactor = 1 + (scrollPos / 1000); // Adjust as needed
  
  // Apply the zoom effect using CSS transform property
  var maxZoomFactor = 1.2; // Adjust as needed
  
  if (zoomFactor <= maxZoomFactor){
    image.style.transform = 'scale(' + zoomFactor + ')';
  }
});
