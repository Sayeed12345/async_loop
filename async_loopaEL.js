console.log("start");


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btn").addEventListener("click", function cb() {
        console.log("Callback");
    });
});


console.log("end");