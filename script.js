// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn')
const Employees = {
firstName :window.prompt("What is the employee first name"),
lastName :window.prompt("What is the employee last name"),
salary :window.prompt("What is the employee salary"),
}

let iscontinuing = true;

iscontinuing = confirm("would you like to continue");

// Collect employee data
const collectEmployees = function () {
  while (iscontinuing) {
    let Employees = []
    firstName = window.prompt("What is the employee first name"),
    lastName = window.prompt("What is the employee first name"),
    salary = window.prompt("What is the employee first name"),
    Employees.push(Employees);
    return Employees;
  }
}  

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let avg = 0;
  for(let index = 0; index < employeesArray.length; index++){
    const employee = array (index);
    avg = employee.salary;
  console.log(`employee average salary is`);
  avg = avg/employeesArray.length;
  }
}
// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}
const index = Math.floor(Math.random() * EmployeesArray.length);
const computerChoice = firstName[index];
window.alert(`Congratulations to ${computerChoice}, our random drawing winner!`);


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
