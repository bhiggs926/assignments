var submit = document.getElementById("submit");
var form = document.getElementById("airline-form")

function formAlert() {
    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form.travelLocation.value;
    var diet = [];
    if (form.vegan.checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.gluten.checked) {
        diet.push(document.getElementById("gluten").value);
    }
    if (form.paleo.checked) {
        diet.push(document.getElementById("paleo").value);
    }
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
    console.log("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
    console.log("submit")
}

submit.addEventListener("click", formAlert)