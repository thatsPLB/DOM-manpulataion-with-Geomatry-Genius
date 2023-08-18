function calculateStringArea(){
//   get triangle base value
const baseField = document.getElementById('triangle-base')
const baseValueTest = baseField.value;
const base = parseFloat(baseValueTest)
console.log(base);
// get triangle height value
const heightField = document.getElementById('triangle-height')
const heightValueTest = heightField.value;
const height = parseFloat(heightValueTest)
console.log(height)
const area = 0.5*base*height;
console.log(area);

}