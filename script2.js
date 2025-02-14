document.getElementById("colorPicker").addEventListener("input", function() {
    document.getElementById("text").style.color = this.value;
});

document.getElementById("fontSizePicker").addEventListener("input", function() {
    document.getElementById("text").style.fontSize = this.value + "px";
});

document.getElementById("fontSelector").addEventListener("change", function() {
    document.getElementById("text").style.fontFamily = this.value;
});