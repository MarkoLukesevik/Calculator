const res = document.getElementById('result');

function Clear() {
    res.value = ''
}

function backSpace() {
    res.value = (res.value.toString().substr(0, res.value.length - 1));
}

function addValue(event) {
    res.value += event.textContent
}

function decimal() {
    res.value += '.'
}

function parseNumber(broj) {
    if (broj.includes('.')) {
        return parseFloat(broj)
    }
    return parseInt(broj)
}

function equals(num1, sign, num2) {
    sign = findIndex()
    let array = res.value.split('')

    num1 = array.slice(0, sign)
    num1 = num1.map(item => mapNumber(item));
    
    let broj1 = num1.join('');
    let najdenBroj1 = parseNumber(broj1);

    num2 = array.slice(sign+1);
    num2 = num2.map(item => mapNumber(item))

    let broj2 = num2.join('');
    let najdenBroj2 = parseNumber(broj2);

    let sign1 = array.splice(sign, 1);

    math(najdenBroj1, sign1, najdenBroj2);
}

function math(num1, sign, num2) {
    if (sign == '+') {
        res.value = num1 + num2;
    }
    else if (sign == '-') {
        res.value = num1 - num2;
    }
    else if (sign == '*') {
        res.value = num1 * num2;
    }
    else if (sign == '/') {
        res.value = num1 / num2;
    }
    else if (sign == '%') {
        res.value = num1 % num2;
    }
}

function findIndex() {
    if (res.value.includes('+')) {
       return res.value.indexOf('+');
    }
    else if (res.value.includes('-')) {
       return res.value.indexOf('-');
    }
    else if (res.value.includes('*')) {
        return res.value.indexOf('*');
    }
    else if (res.value.includes('/')) {
        return res.value.indexOf('/');
    }
    else if (res.value.includes('%')) {
        return res.value.indexOf('%');
    }
};

function mapNumber(item) {
    if (item == '.' || item == '-') {
        return item;
    } else {
        return Number(item);
    }
}