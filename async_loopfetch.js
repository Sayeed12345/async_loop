console.log("start");

setTimeout(function cbT() {
    console.log("CB setTimeut");;
}, 5000);


fetch("https://www.google.com/")
    .then(function cbF() {
        console.log("CB Google");
    });


console.log("End");