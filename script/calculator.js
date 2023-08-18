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
addToCalculationEntry('triangle',area);
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
if(isNaN(width) || isNaN(length)){
    alert('please insert a number')
    return;
}
// calculate area
const area = width*length;
console.log(area);
// show rectangle area
const areaSpan = document.getElementById('rectangle-area');
areaSpan.innerText = area;
addToCalculationEntry('rectangle',area);
}

// reusable function --> reduce duplicate code
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    console.log(base);
    const height = getInputValue('parallelogram-height');
    console.log(height);
    if(isNaN(base)|| isNaN(height)){
        alert('please insert a number')
        return;
    }
    const area = base*height;
    setFElimentInnerText('parallelogram-area',area);
    // add to calculatation
    addToCalculationEntry('Paralallelogram',area)

}
function calculateElipseArea(){
    const majorRadius = getInputValue('Elipse-large');
    const minorRadius = getInputValue('Elipse-short');
    const area = 3.1416 * majorRadius*minorRadius;
    const areaTwoDecimel = area.toFixed(2)  
    setFElimentInnerText('ellipse-area',areaTwoDecimel);
    addToCalculationEntry('elipse',area);
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
// add to calculation entry
// 1. get the eliment where you want to add the dynamic html
// 2. create an element you want to add
// 3. if needed add some class
// 4. set innerHTML.it could be dynamic Template string
function addToCalculationEntry(areaType,area){
    console.log(areaType +' '+  area)
    const calculationEntry = document.getElementById('calculation-entry')
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}.${areaType} ${area} cm<sup>2</sup><button class="btn btn-small btn-success">convert</button>`
    calculationEntry.appendChild(p)

} 