document.getElementById('calculate').addEventListener('click', function () {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert('Please enter valid numbers in all fields');
        return;
    }

    const interest = (principal * rate * time) / 100;
    document.getElementById('interest').innerHTML = interest.toFixed(2);
});
