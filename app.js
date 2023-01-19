var btnTranslate = document.querySelector("#btn-translate")
var textareaInput = document.querySelector("#textarea-input")
var textareaOutput = document.querySelector("#textarea-output")

function clickHandler(){
    console.log(textareaInput.value)
    textareaOutput.textContent = textareaInput.value
}

btnTranslate.addEventListener("click", clickHandler)