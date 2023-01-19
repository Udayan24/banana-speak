var btnTranslate = document.querySelector("#btn-translate")
btnTranslate.addEventListener("click", clickHandler)

var textareaInput = document.querySelector("#textarea-input")
var textareaOutput = document.querySelector("#textarea-output")

var url = "https://api.funtranslations.com/translate/minion.json"

function clickHandler(){
    var input = textareaInput.value;
    var finalIP = constructURL(input)

    fetch(finalIP)
        .then(response => response.json())
        .then(json => {
            textareaOutput.innerText = json.contents.translated;
        })
        .catch(() => alert("Error")) 
}

function constructURL(inputText) {
    var encodedURI = encodeURI(inputText)
    return `${url}?text=${encodedURI}`
}