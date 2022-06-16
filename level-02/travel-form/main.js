const form = document["travelForm"]

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const firstName= form.firstName.value
    form.firstName.value = ""
    const lastName= form.lastName.value
    form.lastName.value = ""
    const age= form.age.value
    form.age.value = ""
    const gender= form.gender.value
    form.gender.value = ""
    const location= form.location.value
    form.location.value= ""
    
    const checkedFood = []
    for(let i = 0; i < form.restrictedFood.length; i ++){
        if (form.restrictedFood[i].checked){
            checkedFood.push(form.restrictedFood[i].value)
        }
    }

    alert (`First Name: ${firstName} \nLast Name: ${lastName} \nAge: ${age} \
            \nGender: ${gender} \nLocation: ${location} \
            \nDietary Restrictions: ${checkedFood}`)
})