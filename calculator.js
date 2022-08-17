btn = document.getElementById("cal");
result = document.getElementById("result");

let result_value;

btn.addEventListener("click", function() {
    input_1 = document.getElementById("one");
    input_2 = document.getElementById("two");
    num1 = parseInt(input_1.value);
    console.log(num1);
    num2 = parseInt(input_2.value);
    console.log(num2);
    if (num1 > num2) {
        alert("Obtained marks can not be greater than total marks");
        location.reload();
    } else if (num1 < 0 || num2 < 0) {
        alert("input can not be negative");
        location.reload();
    } else if (isNaN(num1) || isNaN(num2)) {
        alert("input can not be empty");
        location.reload();
    } else {
        result_value = num1 / num2;
        result_value = parseFloat(result_value * 100);
        result.textContent = "Your Percentage is: " + result_value + "%";
        input_1.value = "";
        input_2.value = "";
    }
});