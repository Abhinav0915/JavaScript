alert("Welcome To JavaScript Calculator")

function addNumbers(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let sum = parseInt(num1) + parseInt(num2);
    document.getElementById("sum").innerHTML = sum;
}

function subNumbers(){
    let num3 = document.getElementById("num3").value;
    let num4 = document.getElementById("num4").value;
    let sub = parseInt(num3) - parseInt(num4);
    document.getElementById("sub").innerHTML = sub;
}

function mulNumbers(){
    let num5 = document.getElementById("num5").value;
    let num6 = document.getElementById("num6").value;
    let mul = parseInt(num5) * parseInt(num6);
    document.getElementById("mul").innerHTML = mul;
}

function divNumbers(){
    let num7 = document.getElementById("num7").value;
    let num8 = document.getElementById("num8").value;
    let div = parseInt(num7) / parseInt(num8);
    document.getElementById("div").innerHTML = div;
}