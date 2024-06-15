let time = document.getElementById("time");

setInterval(() => {
    time.innerHTML = new Date().toLocaleTimeString();
}, 1000)
