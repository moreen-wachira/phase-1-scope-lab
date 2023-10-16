/// Task 1
var customerName = "John";

// Task 2
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Task 3
function setBestCustomer() {
    bestCustomer = "not bob";
}

// Task 4
function overwriteBestCustomer() {
    bestCustomer = "still not bob";
}

// Task 5
const leastFavoriteCustomer = "Alice";

function changeLeastFavoriteCustomer() {
    // This will throw an error because you cannot reassign a constant.
    leastFavoriteCustomer = "Bob";
}

// Testing
console.log(customerName); // John
upperCaseCustomerName();
console.log(customerName); // JOHN
setBestCustomer();
console.log(bestCustomer); // not bob
overwriteBestCustomer();
console.log(bestCustomer); // still not bob
console.log(leastFavoriteCustomer); // Alice
changeLeastFavoriteCustomer(); // Throws an error/ Write your solution in this file!
