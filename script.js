const display = document.getElementById("display")

function appendtodisplay(input){
    display.value += input;
}
function allClear(input){
    display.value = "";
}
function simplify(){
    display.value = eval(display.value)
}