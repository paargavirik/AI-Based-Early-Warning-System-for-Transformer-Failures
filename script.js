// -----------------------------
// LIVE SENSOR SIMULATION
// -----------------------------

function updateData() {

    let temperature = Math.floor(Math.random() * 50) + 30;
    let voltage = Math.floor(Math.random() * 20) + 220;
    let current = Math.floor(Math.random() * 10) + 10;

    document.getElementById("temp").innerHTML = temperature + " °C";
    document.getElementById("voltage").innerHTML = voltage + " V";
    document.getElementById("current").innerHTML = current + " A";

    document.getElementById("tempCard").innerHTML = temperature + " °C";
    document.getElementById("voltCard").innerHTML = voltage + " V";
    document.getElementById("currentCard").innerHTML = current + " A";

    if (temperature >= 70) {

        document.getElementById("status").innerHTML = "WARNING";
        document.getElementById("status").style.color = "red";

        document.getElementById("healthCard").innerHTML = "45%";

        document.getElementById("failure").innerHTML = "92%";

        document.getElementById("recommendation").innerHTML =
            "Immediate Maintenance Required.";

        document.getElementById("alertBox").innerHTML =
            "🚨 High Temperature Detected!";

        document.getElementById("alertBox").style.background = "#DC2626";

        speakAlert();

    }

    else {

        document.getElementById("status").innerHTML = "HEALTHY";
        document.getElementById("status").style.color = "lime";

        document.getElementById("healthCard").innerHTML = "98%";

        document.getElementById("failure").innerHTML = "8%";

        document.getElementById("recommendation").innerHTML =
            "Transformer is operating normally.";

        document.getElementById("alertBox").innerHTML =
            "✅ Transformer Working Normally";

        document.getElementById("alertBox").style.background = "#16A34A";

    }

}

setInterval(updateData, 2000);


// -----------------------------
// CLOCK
// -----------------------------

function updateTime() {

    let now = new Date();

    document.getElementById("time").innerHTML =
        now.toLocaleTimeString();

}

setInterval(updateTime, 1000);


// -----------------------------
// LOGIN
// -----------------------------

function login() {

    let user = document.getElementById("username").value;

    let pass = document.getElementById("password").value;

    if (user == "admin" && pass == "1234") {

        alert("Login Successful");

        window.location.href = "index.html";

    }

    else {

        alert("Invalid Username or Password");

    }

}


// -----------------------------
// EMERGENCY
// -----------------------------

function emergency() {

    alert("Emergency Shutdown Activated!");

}


// -----------------------------
// VOICE ALERT
// -----------------------------

function speakAlert() {

    let msg = new SpeechSynthesisUtterance(

        "Warning. Transformer temperature is high."

    );

    speechSynthesis.speak(msg);

}


// -----------------------------
// CHART
// -----------------------------

const ctx = document.getElementById('myChart');

if (ctx) {

    new Chart(ctx, {

        type: 'line',

        data: {

            labels: [
                '10 AM',
                '11 AM',
                '12 PM',
                '1 PM',
                '2 PM',
                '3 PM'
            ],

            datasets: [{

                label: 'Temperature',

                data: [
                    30,
                    35,
                    38,
                    42,
                    39,
                    45
                ],

                borderWidth: 3,

                fill: false

            }]

        },

        options: {

            responsive: true

        }

    });

}