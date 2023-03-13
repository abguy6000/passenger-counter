let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {

count += 1
countEl.innerText = count

}


let saveEl = document.getElementById("save-el")

function save() {

    let seperator  = count

    saveEl.innerText +=  count  + " - "
    countEl.innerText = 0
    count = 0

}







