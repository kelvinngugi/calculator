var temperature = function(number1, number2) {
return (number1 - 32) * 5/9 ;
};
    
var number1 = parseInt(prompt("Enter temperature in celsius"));
    
alert(temperature(number1));