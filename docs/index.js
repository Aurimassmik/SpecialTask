const form = document.getElementById("form");
form.addEventListener('submit', convertNumber);

function convertNumber(e) {
    const inputValueRGB = document.getElementById("rgbCode").value;
    let rgbArray = inputValueRGB.split(",");

    if (!rgbArray[0]){
        rgbArray[0] = 0
    }
    if (!rgbArray[1]){
        rgbArray[1] = 0
    }
    if (!rgbArray[2]){
        rgbArray[2] = 0
    }
    const inputValueR = rgbArray[0];
    const inputValueG = rgbArray[1];
    const inputValueB = rgbArray[2];
    const sharpSymbol = "#";


    if (inputValueR > 255 || inputValueG > 255 || inputValueB > 255 ) {
        document.getElementById("error").innerHTML = "Number can be between 0 - 255"
    } 
    else{
        let hexString = sharpSymbol + componentToHex(Number(inputValueR)) + componentToHex(Number(inputValueG)) + componentToHex(Number(inputValueB));
        document.getElementById("hexValue").value = hexString;
    }
    e.preventDefault();
}

function isNumber(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode == 44){
        return true
    } else if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    else{
        return true;
    }   
}

function componentToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}
