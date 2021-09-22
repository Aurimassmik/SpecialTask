const form = document.getElementById("form");
form.addEventListener('submit', convertNumber);

function convertNumber(event) {
    const inputValueR = document.getElementById("rCode").value;
    const inputValueG = document.getElementById("gCode").value;
    const inputValueB = document.getElementById("bCode").value;
    const sharpSymbol = "#";
    const form = document.getElementById("form");
    let hexString= sharpSymbol + componentToHex(inputValueR) + componentToHex(inputValueG) + componentToHex(inputValueB);
    document.getElementById("hexValue").value = hexString;
    event.preventDefault();

}

function componentToHex(x) {
    var hex = x.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }