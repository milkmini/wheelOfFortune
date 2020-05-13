// --function
//  Save to history
function toLocal() {
    let arr = { 'cumBefore': amount, ' cumAfter': savedSumValue };
    let oldItems = JSON.parse(localStorage.getItem('arr')) || [];
    oldItems.push(arr);
    localStorage.setItem('arr', JSON.stringify(oldItems))
}
// Fetching elements by adi to add a class
const ElementIdAdd = (idBlock) => {
    return document.getElementById(idBlock).classList.add('disable');
}
// Fetching elements by adi to remove a class
const ElementIdremove = (idBlock) => {
    return document.getElementById(idBlock).classList.remove('disable');
}
// Output random number depending on complexity
const ComplexityMath = (count)  => {
    return  Math.floor(count * Math.random()) + 1;
}
let winNumber = ComplexityMath(count);
// Choice of difficulty mode
const Сomplexity = (count) => {
    let out = 'Угадай число от 1 до ' + count;
    document.getElementById('refinementComplexity').innerHTML = out;
    localStorage.setItem('count', count);
    ElementIdAdd('disableСomplexity');
    ElementIdremove('disable');
    document.getElementById('numberComplexity').innerHTML = count;
}