document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("semaphoreBtn");
    var status = document.getElementById("status");
    var counter = 0;

    function changeColor() {
        counter++;

        if (counter % 3 === 1) {
            btn.classList.remove("btn-warning");
            btn.classList.remove("btn-success");
            btn.classList.add("btn-danger");
            status.textContent = "Wait";
        } else if (counter % 3 === 2) {
            btn.classList.remove("btn-danger");
            btn.classList.remove("btn-success");
            btn.classList.add("btn-warning");
            status.textContent = "Get ready";
        } else {
            btn.classList.remove("btn-danger");
            btn.classList.remove("btn-warning");
            btn.classList.add("btn-success");
            status.textContent = "Start";
        }
    }
    changeColor();
    setInterval(changeColor, 10000);
});
