const form = document["add-todo"]


// QUESTION FOR INSTRUCTIOR **** is there a way i can grab the input element from the form nest, 
// instead of creating the input down below? This question is in reference to "editButton" block of code.
const listInput = document.createElement('input')
listInput.type = 'text'
listInput.name = 'addItem'
listInput.id = 'listInput'

const submitButton = document.createElement('button')
submitButton.id = "submit"

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const itemName = form.addItem.value
    form.addItem.value = " "

    // sets a parent element (li) with 3 children (div) 2 (buttons)
    const listElement = document.createElement('li')
    listElement.id= 'parentItem'
    listElement.innerHTML = "<button id ='editButton'> edit </button>" + "<button id = 'deleteButton'> X </button>"
    document.getElementById("list").prepend(listElement)

    const divElement = document.createElement('div')
    divElement.textContent = itemName
    document.getElementById("parentItem").prepend(divElement)

    const deleteButton = document.getElementById("deleteButton").addEventListener('click', (e) => {
        if (deleteButton  !== 'click'){
            listElement.remove()
        }
    })

    const editButton = document.getElementById('editButton').addEventListener('click', (e) => {
        if (editButton !== 'click'){
            document.getElementById('parentItem').prepend(listInput)
            document.getElementById("listInput").prepend(submitButton)
        } 
    })

    // changing text content of button from edit to save 

})

