// Task 1 - Employee Salary Declaration

function calculateSalary(baseSalary, bonus, taxRate){
    let NetSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    console.log(`Net Salary: $${NetSalary}`);
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