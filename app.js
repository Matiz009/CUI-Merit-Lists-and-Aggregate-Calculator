input_1 = document.getElementById("one");
input_2 = document.getElementById("two");
input_3 = document.getElementById("three");
let btn = document.getElementById("cal");
let num = 1100;
let result = document.getElementById("result");

btn.addEventListener("click", function() {
    let one = parseInt(input_1.value);
    let two = parseInt(input_2.value);
    let three = parseInt(input_3.value);
    let p_1 = (one * 100) / num;
    let p_2 = (two * 100) / num;
    let a = parseFloat(p_1 * 0.1);
    let b = parseFloat(p_2 * 0.4);
    let c = parseFloat(three * 0.5);
    let aggregate = parseFloat(a + b + c);
    if (aggregate > 100) {
        result.innerHTML = "Please enter valid values";
        input_1.value = "";
        input_2.value = "";
        input_3.value = "";
    } else if (aggregate < 0) {
        result.innerHTML = "Please enter valid values";
        input_1.value = "";
        input_2.value = "";
        input_3.value = "";
    } else {
        result.innerHTML = "Your aggregate is " + aggregate;
        input_1.value = "";
        input_2.value = "";
        input_3.value = "";
    }
});