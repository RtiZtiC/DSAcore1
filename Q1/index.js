function changeColorAndSize() {
    var square = document.getElementById('square');
    square.style.backgroundColor = 'yellow';
    var currentWidth = square.offsetWidth;
    var currentHeight = square.offsetHeight;
    square.style.width = (currentWidth * 2) + 'px';
    square.style.height = (currentHeight * 2) + 'px';
}