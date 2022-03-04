
// EMPTY ARRAY
const employees = []

// EMPLOYEE CONSTRUCTOR
function Employee(name, title, salary, status){
    this.name = name
    this.title = title
    this.salary = salary
    this.status = "Full Time"
    this.printEmployeeForm = () => {
        console.log("Name: " + this.name + ", " + "Title: " + this.title + ", " + "Salary: " + this.salary + ", " + "Status: " + this.status + ".")
}}

// SET OF INSTANTIATE EMPLOYEES
var john = new Employee ('john', "chef", "80k/yr")
var bill = new Employee ('bill', "janitor", "40k/yr", "contract") 
var guy = new Employee ('guy', "janitor", "50k/yr") 
guy.status = "part-time"
employees.push(john, bill, guy)

for (var i = 0; i < employees.length; i ++){
    console.log(employees[i].printEmployeeForm())
}
