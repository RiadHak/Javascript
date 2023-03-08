var standaartNum = [1,2,3,4,5,6,7,8,9,10];
var tafel = [2,4,6,8];
var tafelID = ['tafel2','tafel4','tafel6','tafel8']

function tafelRekenen(standaartNum,tafel) {
    for (var i = 0; i < tafel.length; i++) {
        for (var j = 0; j < standaartNum.length; j++) {
            document.getElementById(tafelID[i]).innerHTML += `${tafel[i]} * ${standaartNum[j]} = ${tafel[i] * standaartNum[j]}` + "<br>";
        }
    }
}

tafelRekenen(standaartNum,tafel);