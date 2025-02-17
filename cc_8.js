// Task 1 - Employee Salary Declaration

function calculateSalary(baseSalary, bonus, taxRate){
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    console.log(`Net Salary: $${netSalary}`);
}
calculateSalary(5000, 500, 0.1); // Expected output: "Net Salary: $5000.00"
calculateSalary(7000, 1000, 0.15); // Expected output: "Net Salary: $6950.00"

//Task 2 - Product Price After Discount

function calculateDiscount(price, discountRate){
    let finalPrice = price - (price * discountRate);
    console.log(`Final Price: $${finalPrice}`);
}
calculateDiscount(100, 0.2); // Expected output: "Final Price: $80.00"
calculateDiscount(250, 0.15); // Expected output: "Final Price: $212.50"

//Task 3 - Service Fee Calculation

const calculateServiceFee = (amount, serviceType) => {
    let total = 0;

    if (serviceType === "Premium") total = amount * 0.15;
    else if (serviceType === "Standard") total = amount * 0.1;
    else if (serviceType === "Basic") total = amount * 0.05;
    
    console.log(`Service Fee: $${total}`);
};
calculateServiceFee(200, "Premium"); // Expected output: "Service Fee: $30.00"
calculateServiceFee(500, "Standard"); // Expected output: "Service Fee: $50.00"

//Task 4 - Car Rental Cost Calcualtion

function calculateRentalCost(days, carType, insurance = false){

    if (carType === "Economy") cost = days * 40;
    else if (carType === "Standard") cost = days * 60;
    else if (carType === "Luxury") cost = days * 100;
    if (insurance) cost = cost + (days * 20);
    
    console.log(`Total Rental Cost: $${cost}`);
}
calculateRentalCost(3, "Economy", true); // Expected output: "Total Rental Cost: $180"
calculateRentalCost(5, "Luxury", false); // Expected output: "Total Rental Cost: $500"

//Task 5 - Loan Payment Calculation

function calculateLoanPayment(principal, rate, time){
    let totalPayment = principal + (principal * rate * time);
    console.log(`Total Payment: $${totalPayment}`);
}
calculateLoanPayment(1000, 0.05, 2); // Expected output: "Total Payment: $1100.00"
calculateLoanPayment(5000, 0.07, 3); // Expected output: "Total Payment: $6050.00"

//Task 6 - Identifying Large Transactions

let transactions = [200, 1500, 3200, 800, 2500];

const filterLargeTransactions = (transactions, filterFunction) => {
    return transactions.filter(filterFunction);
};
console.log(filterLargeTransactions(transactions,amount => amount > 1000)); 
// Expected output would be [1500,3200,2500]

// Task 7 - Shopping Cart Tracker

function createCartTracker() {
    let balance = 0;

    return function (expense){
        balance += expense;
        return `Total Cart Value: $${balance}`;
    };
};
let cart = createCartTracker()
console.log(cart(20)); // Expected output: "Total Cart Value: $20"
console.log(cart(35)); // Expected output: "Total Cart Value: $55"

//Task 8 - Savings Growth Projection

function calculateGrowth(years, revenue) {
    if (years === 0 || years >=10) {
        return `Projected Revenue $${revenue}`;
    }
    return calculateGrowth(years + 1, revenue * 1.05);
}
console.log(calculateGrowth(8,1000));// Projected revenue shoud be $1102.50
console.log(calculateGrowth(5,5000)); // Projected revenue should be $6381 