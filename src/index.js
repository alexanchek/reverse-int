module.exports = function reverse(n) {
    strNumber = String(n);
    arrNumber = strNumber.split("");

    if (strNumber[0] != "-") {
        return arrNumber.reverse().join("");
    } else {
        strNegNumber = "";
        for (let i = arrNumber.length - 1; i > 0; i--) {
            strNegNumber += arrNumber[i];
        }
        return strNegNumber;
    }
};
