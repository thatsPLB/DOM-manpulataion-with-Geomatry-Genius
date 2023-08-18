function calculateStringArea(){
//   get triangle base value
const baseField = document.getElementById('triangle-base')
const baseValueTest = baseField.value;
const base = parseFloat(baseValueTest)
// console.log(base);

// get triangle height value
const heightField = document.getElementById('triangle-height')
const heightValueTest = heightField.value;
const height = parseFloat(heightValueTest)
console.log(height)
// calculate area
const area = 0.5*base*height;
console.log(area);
// show triangle area
const areaSpan = document.getElementById('triangle-area');
areaSpan.innerText = area;
}

function calculateRectangleArea(){
// console.log('hsh')
//   get triangle width value
const widthField = document.getElementById('rectangle-width')
const widthValueTest = widthField.value;
const width = parseFloat(widthValueTest)
// console.log(width);

// get rectangle-length
const lengthField = document.getElementById('rectangle-length')
const lengthValueTest = lengthField.value;
const length = parseFloat(lengthValueTest)
// console.log(length);
// calculate area
const area = width*length;
console.log(area);
// show rectangle area
const areaSpan = document.getElementById('rectangle-area');
areaSpan.innerText = area;
}

// reusable function --> reduce duplicate code
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    console.log(base);
    const height = getInputValue('parallelogram-height');
    console.log(height);
    const area = base*height;
    setFElimentInnerText('parallelogram-area',area);
}
function calculateElipseArea(){
    const majorRadius = getInputValue('Elipse-large');
    const minorRadius = getInputValue('Elipse-short');
    const area = 3.1416 * majorRadius*minorRadius
}
// reusable get input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
// reusable set span,p,div,etc text
function setFElimentInnerText(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}