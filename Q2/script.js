function addText() {
    var textInput = document.getElementById("textInput");
    var textList = document.getElementById("textList");

    var text = textInput.value;
    if (text !== "") {
        var textItem = document.createElement("div");
        textItem.className = "text-item";
        textItem.textContent = text;

        textList.appendChild(textItem);

        textInput.value = "";
    }
}
