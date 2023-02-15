

function random() {
    let lower = parseInt(document.getElementById("lower").value);
    let higher = parseInt(document.getElementById("higher").value);
    let result = document.getElementById("result");
    result.innerHTML = Math.floor(Math.random() * (higher - lower + 1)) + lower;
}