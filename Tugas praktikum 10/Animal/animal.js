const animals = document.getElementById("hewan")

function imgpck() {
    if (hewan.value == "hiu") {
        return animals.src = "img/hiu.jpg"
    } else if (hewan.value == "kucing") {
        return animals.src = "img/kucing.jpg"
    } else if (hewan.value == "koala") {
        return animals.src = "img/koala.jpg"
    } else if (hewan.value == "kudanil") {
        return animals.src = "img/kuda_nil.jpg"
    } else if (hewan.value == "panda") {
        return animals.src = "img/panda.jpg"
    } else{
        return animals.src = "img/penguin.jpg"
    }
}
function infoimg() {
    alert(animals.src)
}