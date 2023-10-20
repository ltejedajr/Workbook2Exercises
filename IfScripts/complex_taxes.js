"use strict";

let payRate = 25.00;
let hoursWorked = 40;
let overtimeHours = hoursWorked - 40;
            
let grossPay = (payRate * hoursWorked) + (overtimeHours * payRate * 1.5);
            
if (hoursWorked > 40) {
    overtimeHours = hoursWorked - 40;
}
            
else {
        overtimeHours = 0;
}
            
console.log("The gross pay would be: $" + grossPay.toFixed(2) + 
            " and overtime hours worked would be " + overtimeHours + ".");

//////////////////////////////////////

let annualGrossPay = grossPay * 52;
let taxRate;


if (annualGrossPay <= 12000) {
    taxRate = annualGrossPay * .05;
}
            
else if (annualGrossPay <= 24999.99) {
    taxRate = annualGrossPay * .10;
}

else if (annualGrossPay <= 74999.99) {
    taxRate = annualGrossPay * .15;
}

else {
    taxRate = annualGrossPay * .20;
}

console.log("The annual gross pay is $" + annualGrossPay + 
            ". The filing status is Single. The tax withholdings for this year are $" 
            + taxRate + " at a tax rate of 15%.");

if (grossPay <= 12000) {
    taxRate = grossPay *  .05;
}

console.log("You worked " + hoursWorked + " hours this period. Because you earn $" 
            + payRate + " per hour, your gross pay is $" + grossPay + 
            ". Your filing status is Single. Your tax withholdings this period is $"
            + taxRate + ". Your net pay is $950.");
