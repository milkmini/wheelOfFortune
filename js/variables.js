// --function
//  Save to history
function toLocal() {
    let arr = {' cumAfter': savedSumValue, 'cumBefore': amount };
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
const ComplexityMath = () => {
    let count = localStorage.getItem('count');
    return Math.floor(count * Math.random()) + 1;
}
// Choice of difficulty mode
const Сomplexity = (count) => {
    let out = 'Угадай число от 1 до ' + count;
    document.getElementById('refinementComplexity').innerHTML = out;
    localStorage.setItem('count', count);
    ElementIdAdd('disableСomplexity');
    ElementIdremove('disable');
    document.getElementById('numberComplexity').innerHTML = count;
}
// достаем значение localStorage
const getValue = (get) => {
    return localStorage.getItem(get);
}
// добавляем новое значение localStorage
const setValue = (set, value) => {
    return localStorage.setItem(set, value);
}
// выводим значение инпута
const valueInput = (id) => {
    return document.getElementById(id).value;
}

// -- Variables from localStorage
// Getting variables from localStorage
let winNumber = ComplexityMath();
setValue('count', '2');
let savedSumValue = Number(localStorage.getItem('youSum'));
yourAmount.innerHTML = savedSumValue;

// -- work with buttons
// Saving amount and rates
document.getElementById('save').onclick = function () {
    let rate = valueInput('userCum');
    if (!rate) {
        alert('Cначало введите сумму');
    } else {
        if (savedSumValue < 1) {
            ElementIdremove('donate');
            alert(' У вас нет денег на счету !!!');
        } else {
            if (savedSumValue < rate) {
                ElementIdAdd('donate');
                alert('Вам не хватает (' + (rate - savedSumValue) + ' ) что бы сделать ставку!!!');
            } else {
                userAmount = savedSumValue - rate;
                cum = rate * getValue('count');
                thisOut.innerHTML = cum;
                yourAmount.innerHTML = userAmount;
            }
        }
        ElementIdAdd('disableSum');
        ElementIdAdd('disableСomplexity');
    }
}
// Number check
document.getElementById('check').onclick = function () {
    let userNumber = valueInput('userNumbers');
    if (!userNumber || !valueInput('userCum')) {
        alert('Укажите число от 1 до 2 и не забудьте ввести сумму');
    } else {
        userNumber = parseInt(userNumber);
        if (userNumber == winNumber) {
            out.innerHTML = 'Победа!!!';
            let win = cum
            amount = userAmount + win;
        } else {
            out.innerHTML = 'Вы проиграли!!! Ну ничего еще повезет!!';
            amount = userAmount;
        }
        yourAmount.innerHTML = amount;
        setValue('youSum', amount);
        ElementIdAdd('disableNumber');
        toLocal();
    }
}
// Donut if the money ran out
document.getElementById('donateButton').onclick = function () {
    let cum = savedSumValue + Number(valueInput('donateInput'));
    setValue('youSum', cum);
    location.reload();
}
// New attempt
document.getElementById('newAttempt').onclick = function () {
    location.reload();
}
// View history
document.getElementById('history').onclick = function () {
    let display = document.getElementById('blockHistory').style.display
    if (display == 'none') {
        document.getElementById('blockHistory').style.display = 'inline-block';
    } else {
        document.getElementById('blockHistory').style.display = 'none';
    }
    let out = '';
    let listHistory = JSON.parse(getValue('arr'));
    let length = listHistory.length - 11;
    for (let i = listHistory.length; i > length; i--) {
        let object = Object.freeze(listHistory[i]);
        for (var key in object) {
            out += key + ' -- ' + object[key] + '  ';
        }
        out += '<br>'
    }
    document.getElementById('listHistory').innerHTML = out;
}



