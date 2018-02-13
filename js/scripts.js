var BMI = function(number1, number2) {
return (number1 / number2)/number2;
};
    
var number1 = parseInt(prompt("Enter weight"));
var number2 = parseInt(prompt("Enter height"));
    
alert(BMI(number1, number2));