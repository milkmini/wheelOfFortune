// -- work with buttons
// Saving amount and rates
document.getElementById('save').onclick = function () {
    let rate = document.getElementById('userCum').value;
    if (!rate) {
        alert('Cначало введите сумму');
    } else {
        if (savedSumValue < 1) {
            ElementIdremove('donate');
            ElementIdAdd('disableSum');
            alert(' У вас нет денег на счету !!!');
        } else {
            if (savedSumValue < rate) {
                ElementIdAdd('donate');
                alert('Вам не хватает (' + (rate - savedSumValue) + ' ) что бы сделать ставку!!!');
            } else {
                userAmount = savedSumValue - rate;
                cum = rate * count;
                thisOut.innerHTML = cum;
                yourAmount.innerHTML = userAmount;
                ElementIdAdd('disableSum');
            }
        }
    }
}
// Number check
document.getElementById('check').onclick = function () {
    let userNumber = document.getElementById('userNumbers').value;
    let rate = document.getElementById('userCum').value;
    if (count == 0) {
        localStorage.setItem('count', '2');
        alert('раз вы не выбрали уроверь сложности будет автоматически, включен режим X2!! Но вы можете его поменять!');
        location.reload();
    } else {
        if (!userNumber || !rate) {
            alert('Укажите число от 1 до 2, и не забудьте сделать ставку');
        } else {
            if (userNumber == winNumber) {
                userNumber = parseInt(userNumber);
                out.innerHTML = 'Победа!!!';
                let win = cum
                amount = userAmount + win;
                yourAmount.innerHTML = amount;
                localStorage.setItem('youSum', amount);
                ElementIdAdd('disableNumber');
                toLocal();
            } else {
                userNumber = parseInt(userNumber);
                out.innerHTML = 'Вы проиграли!!! Ну ничего еще повезет!!';
                amount = userAmount;
                yourAmount.innerHTML = amount;
                localStorage.setItem('youSum', amount);
                ElementIdAdd('disableNumber');
                toLocal();
            }
        }
    }
}
// Donut if the money ran out
document.getElementById('donateButton').onclick = function () {
    let userDonate = Number(document.getElementById('donateInput').value);
    let cum = savedSumValue + userDonate;
    localStorage.setItem('youSum', cum);
    localStorage.setItem('count', '2');
    location.reload();
}
// New attempt
document.getElementById('newAttempt').onclick = function () {
    localStorage.setItem('count', '2');
    location.reload();
}
// View history
document.getElementById('history').onclick = function () {
    let display = document.getElementById('blockHistory').style.display
    if(display == 'none') {
        document.getElementById('blockHistory').style.display = 'inline-block';
    } else {
        document.getElementById('blockHistory').style.display = 'none';
    }
    let out = '';
    let listHistory = JSON.parse(localStorage.getItem('arr'));
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