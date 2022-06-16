const form = document["calculator"]

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
// list of all 6 inputs and saving value.
    const firstInput = form.firstInput.value
    form.firstInput.value = ""
    const secondInput = form.secondInput.value
    form.secondInput.value = ""
    const thirdInput = form.thirdInput.value
    form.thirdInput.value = ""
    const fourthInput = form.fourthInput.value
    form.fourthInput.value= ""
    const fithInput = form.fithInput.value
    form.fithInput.value= ""
    const sixthInput = form.sixthInput.value
    form.sixthInput.value= ""

    const additionResult =  parseInt(firstInput) +  parseInt(secondInput)
    console.log(additionResult)
    document.getElementById('additionResult').append(additionResult)

    const subtractResult = parseInt(thirdInput) -  parseInt(fourthInput)
    console.log(subtractResult)
    document.getElementById(`subtractResult`).append(subtractResult)

    const multiplyResult = parseInt(fithInput) *  parseInt(sixthInput)
    console.log(multiplyResult)
    document.getElementById(`multiplyResult`).append(multiplyResult)

})

// You will inject the result into the HTML (not an alert)