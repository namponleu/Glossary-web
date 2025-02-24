const textElement = document.querySelectorAll('.text-change');
let currentIndex = 0;

function highlightText() {
    textElement.forEach(element => {
        element.classList.remove('highlight');
    });

    if (window.screen > 767) {
        
    }

    textElement[currentIndex].classList.add('highlight');

    currentIndex = (currentIndex + 1) % textElement.length;
}

highlightText();
setInterval(highlightText, 3000);