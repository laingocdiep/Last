let count = 0;
let luckyNumber = parseInt(Math.random() * 10 + 1);
console.log(luckyNumber);
let guess;
localStorage.setItem('onCount',count);

function check() {
        guess = Number(document.getElementById("guess").value);
        if (guess === luckyNumber) {
            document.getElementById('displayResult').innerHTML = `Chúc mừng bạn! Số may mắn là ${luckyNumber}`;
        }
        else {
            document.getElementById('guess').value = '';
        }
}
function onCount() {
    count++;
    if (count > 2 && guess!== luckyNumber) {
        document.getElementById('displayResult').innerHTML = `Bạn thua. Số may mắn là ${luckyNumber}`;
    }
}
    