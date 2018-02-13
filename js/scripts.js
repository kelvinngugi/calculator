var temperature = function(number1) {
return (number1 - 32) * 5/9 ;
};
    
var number1 = parseInt(prompt("Enter temperature in fahrenheight"));
    
alert(temperature(number1));