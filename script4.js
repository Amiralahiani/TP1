function getRandomColor() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

document.querySelectorAll("#interactiveList li").forEach(item => {
    item.addEventListener("click", function() {
        this.style.backgroundColor = getRandomColor();
    });
});