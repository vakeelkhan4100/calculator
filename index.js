let result = document.getElementById("result")
function display(Number) {

    result.value += Number
}

function calculate() {
    let final_number = result.value
    let final_result = eval(final_number)
    result.value = final_result
}

function allClear() {
    result.value = ""
}

function del() {
    let del = result.value.slice(0, -1)
    result.value = del
}