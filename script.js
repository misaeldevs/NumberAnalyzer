let number = document.getElementById("txtnumber")
let addedNumber = document.getElementById("selectnumber")
let result = document.getElementById("result")
let values = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function addNumber(){
    if(isNumber(number.value) && !inList(number.value, values)){
        values.push(Number(number.value))
        let item = document.createElement("option")
        item.text = `Number ${number.value} added!`
        addedNumber.appendChild(item)
        result.innerHTML = ""
    } else {
        alert("Invalid or existing value!")
    }
    number.value = ""
    number.focus()
}

function finalize(){
    if(values.length == 0){
        alert("Add values ​​before finalizing!")
    } else {
        let total = values.length
        let bigger = values[0]
        let smaller = values[0]
        let sum = 0
        let average = 0

        for(let i in values){
            sum += values[i]
            if(values[i] > bigger)
                bigger = values[i]
            if(values[i] < smaller)
                smaller = values[i]
        }

        average = sum / total
        result.innerHTML = ""
        result.innerHTML += `<p>The total amount of added numbers is ${total}.<\p>`
        result.innerHTML += `<p>The largest number added was ${bigger}.<\p>`
        result.innerHTML += `<p>The smallest number added was ${smaller}.<\p>`
        result.innerHTML += `<p>The sum of all added numbers is ${sum}.<\p>`
        result.innerHTML += `<p>The average of the added numbers is ${average}.<\p>`
    }
}