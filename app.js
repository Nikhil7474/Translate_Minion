var inputText = document.querySelector("#input-text")
var translateBtn = document.querySelector(".translate-btn")
var outputTxt = document.querySelector(".output-text")

var baseUrl = "https://api.funtranslations.com/translate/minion.json"

function getFullUrl(txt) {
    return baseUrl + "?" + "text=" + txt
}

function errorHandle(error){
    console.log("error occured: " + error)
}

function translateFunc() {
    var userValue = inputText.value
    fetch(getFullUrl(userValue))
        .then(response => response.json())
        .then(json => {
            var result = json.contents.translated
            outputTxt.innerText = result
        })
        .catch(errorHandle)
}

translateBtn.addEventListener("click", translateFunc)