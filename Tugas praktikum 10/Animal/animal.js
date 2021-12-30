const animals = document.getElementById("hewan")

function image() {
    if (hewan.value == "hiu") {
        return animals.src = "img/hiu.jpg"
    } else if (hewan.value == "kucing") {
        return animals.src = "img/kucing.jpg"
    } else if (hewan.value == "koala") {
        return animals.src = "img/capung.jpg"
    } else if (hewan.value == "kudanil") {
        return animals.src = "img/iguana.jpg"
    } else if (hewan.value == "panda") {
        return animals.src = "img/panda.jpg"
    } else{
        return animals.src = "img/ulat.jpg"
    }
}
function srcimage() {
    alert(animals.src)
}