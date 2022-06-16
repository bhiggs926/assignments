
// ### **Requirements**

// Code and test each of the follow bullet requirements.

// ### **Part 1 - GET**



// - If a todo item is complete, it should have a strikethrough line on it
// - Images should be displayed as images if there are any
// - Each todo will have a checkbox where it can be marked complete or incomplete
// - Checking the checkbox should update the database

////////////////////////////////////
        // Extra Credit
////////////////////////////////////
// - When clicked, the info will change to input boxes that are autofilled with the old Todo data
// - A user can change the value of these inputs
// - When the "edit" button is clicked, it will change to a "save" button.
// - When "save" is clicked, the form will disapear, and the new values will be displayed.
// - On save, the todo will be edited in the database.


const divHousing = document.getElementById('todoList')
const todoForm = document["todoform"]

function getData(){
    axios.get("https://api.vschool.io/bradleyhigginson/todo/")
    .then(res => listData(res.data))
    .catch(err => console.log(err))
}

function listData(data){
    divHousing.innerHTML = ""


    for(let i = 0; i < data.length; i ++){
        const divElement = document.createElement(`div`)
            divElement.id = 'divElement'
            divHousing.appendChild(divElement)

        const todoTitle = document.createElement('h1')
            todoTitle.textContent = `Title: ${data[i].title}`
            divElement.appendChild(todoTitle)

        const todoDescription = document.createElement('h2')
            todoDescription.textContent = `Description: ${data[i].description}`
            divElement.appendChild(todoDescription)

        const todoPrice = document.createElement('h3')
            todoPrice.textContent = `Price: $${data[i].price}`
            divElement.appendChild(todoPrice)

            // - Images should be displayed as images if there are any
        const imgUrl = document.createElement('img')
            imgUrl.textContent = `Image: ${data[i].imgUrl}`
            divElement.appendChild(imgUrl)

        const bttnHousing = document.createElement('div')
            bttnHousing.id= 'bttnHousing'
            divElement.appendChild(bttnHousing)

        const completeButton = document.createElement('button')
            completeButton.id = 'completeButton'
            completeButton.textContent = "Complete"
            bttnHousing.appendChild(completeButton)

            completeButton.addEventListener('click', (e) =>{
                if(completeButton.e != true && completeButton.textContent == 'Complete' ){
                    completeButton.textContent = "Incomplete"
                    divElement.style.textDecorationLine = 'line-through'
                    data[i].completed = true
                    console.log(data[i])
                } else if(completeButton.e != true && completeButton.textContent == 'Incomplete'){
                    completeButton.textContent = "Complete"
                    divElement.style.textDecorationLine = 'none'
                    data[i].completed = false
                    console.log(data[i])
                }
            })

        const deleteButton = document.createElement('button')
            deleteButton.id = `deleteButton`
            deleteButton.textContent = `Delete`
            bttnHousing.appendChild(deleteButton)

            deleteButton.addEventListener('click', (e)=>{
                if(deleteButton.e != true) {
                axios.delete(`https://api.vschool.io/bradleyhigginson/todo/${data[i]._id}`)
                .then(response => {
                    alert (`your todo was successfully deleted`)
                    getData()
                }, (response => {
                    alert ('there was a problem deleting your todo');
            })
        )}})

    }
}

getData()

todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value,
        price: todoForm.price.value,  
    }
    
    todoForm.title.value = ""
    
    axios.post("https://api.vschool.io/bradleyhigginson/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})

// const deleteButton = document.createElement('button')
//             deleteButton.id = `deleteButton`
//             deleteButton.textContent = `Delete`
//             bttnHousing.appendChild(deleteButton)

//             deleteButton.addEventListener("click", (e) => { 
//                 if(deleteButton.e != true) {
//                     axios.delete(`https://api.vschool.io/bradleyhigginson/todo/${todoItem[i]._id}`)
//                     .then(response => {
//                         alert (`your todo was successfully deleted`)
//                     }, (response => {
//                         alert ('there was a problem deleting your todo');
//                     })
//                     )
//                 }
//             })

//         }

//     }))
//     .catch(error => console.log(error))










// const divHousing = document.getElementById('todoList')
// const todoForm = document.todoform
// let updates = {
//     title: todoForm.title.value,
//     description: todoForm.description.value,
//     imgUrl: todoForm.imgUrl.value,
//     price: todoForm.price.value,  
// }

// todoform.addEventListener('submit', (e) =>{
//     e.preventDefault()

//     const newTodo = {
//         title: todoForm.title.value,
//         description: todoForm.description.value,
//         imgUrl: todoForm.imgUrl.value,
//         price: todoForm.price.value,  
//     }

//     axios.post("https://api.vschool.io/bradleyhigginson/todo/", newTodo)
//     .then(response => console.log(response.data))
//     .catch(err => console.log(err))

// })



//  axios.get("https://api.vschool.io/bradleyhigginson/todo/")
//     .then((response => {
//         const todoItem = response.data

//         for(let i = 0; i < todoItem.length; i++) {
//         const divElement = document.createElement(`div`)
//             divElement.id = 'divElement'
//             divHousing.appendChild(divElement)

//         const h1 = document.createElement('h1')
//             h1.textContent = `Title: ${todoItem[i].title}`
//             divElement.appendChild(h1)

//         const h2 = document.createElement('h2')
//             h2.textContent = `Description: ${todoItem[i].description}`
//             divElement.appendChild(h2)

//         const h3 = document.createElement('h3')
//             h3.textContent = `Price: $${todoItem[i].price}`
//             divElement.appendChild(h3)

//             // - Images should be displayed as images if there are any
//         const img = document.createElement('img')
//             img.textContent = todoItem[i].imgUrl
//             divElement.appendChild(img)

//         const bttnHousing = document.createElement('div')
//             bttnHousing.id= 'bttnHousing'
//             divElement.appendChild(bttnHousing)


//             // - Each Todo will have an "edit" button.
//         const editButton = document.createElement(`button`)
//             editButton.id = 'editButton'
//             editButton.textContent = `Edit`
//             bttnHousing.appendChild(editButton)
//             editButton.addEventListener('click', (e) =>{
//                 // Edit > Save & Save > Edit
//                  if(editButton.e != true && editButton.textContent == 'Edit'){
//                      editButton.textContent = "Save"
//                  } else if(editButton.e != true && editButton.textContent == 'Save'){
//                      editButton.textContent = "Edit"
//                  }

//                  if(editButton.textContent == 'Save'){
//                     const editForm = document.createElement('form')
//                         editForm.id = "editForm"
//                         bttnHousing.appendChild(editForm)

//                     const titleValue = document.createElement('input')
//                         titleValue.id = 'editInput'
//                         titleValue.placeholder = h1.textContent
//                         editForm.appendChild(titleValue)

//                 // NEW DESCRIPTION BLOCK
//                     const descriptionValue = document.createElement('input')
//                         descriptionValue.id ='editInput'
//                         descriptionValue.placeholder = h2.textContent
//                         editForm.appendChild(descriptionValue)

//                 // NEW PRICE BLOCK
//                     const priceValue = document.createElement('input')
//                         priceValue.placeholder = h3.textContent
//                         editForm.appendChild(priceValue)
//                         priceValue.id = 'editInput'
//                  }
//             })
    

//         const completeButton = document.createElement('button')
//             completeButton.id = 'completeButton'
//             completeButton.textContent = `Complete`
//             bttnHousing.appendChild(completeButton)
//             completeButton.addEventListener('click', (e) =>{
//                 todoItem[i].completed = true

//                 if(todoItem[i].completed === true){
//                     divElement.style.textDecorationLine = "line-through"
//                     const completeTodo = axios.get(`https://api.vschool.io/bradleyhigginson/todo/${todoItem[i]._id}`)
//                     completeTodo.complete = true
//                     console.log(response.data)
//                     completeButton.textContent = "Incomplete"
//                 } 
//             })
            
           
//         const deleteButton = document.createElement('button')
//             deleteButton.id = `deleteButton`
//             deleteButton.textContent = `Delete`
//             bttnHousing.appendChild(deleteButton)

//             deleteButton.addEventListener("click", (e) => { 
//                 if(deleteButton.e != true) {
//                     axios.delete(`https://api.vschool.io/bradleyhigginson/todo/${todoItem[i]._id}`)
//                     .then(response => {
//                         alert (`your todo was successfully deleted`)
//                     }, (response => {
//                         alert ('there was a problem deleting your todo');
//                     })
//                     )
//                 }
//             })

//         }

//     }))
//     .catch(error => console.log(error))

    