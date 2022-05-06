x = 0;
y = 0;
draw_circle = "";
draw_rect = "";
draw_square = "";
speech_recognition = window.webkitSpeechRecognition;
recognition = new speech_recognition();

function start() {
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("status").innerHTML = "The speech have been recognized as " + content;
    if (content == "circle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing circle";
        draw_circle = "set";
    }
    if (content == "rectangle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing rectangle";
        draw_rect = "set";
    }
    if (content == "square") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing square";
        draw_square = "set";
    }
}

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    if (draw_circle == "set") {
        radius = Math.floor(Math.random() * 100)
        fill(r, g, b);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle is drawn";
        draw_circle = "";
    }
    if (draw_square == "set") {
        length = Math.floor(Math.random() * 100)
        fill(r, g, b);
        square(x, y, length);
        document.getElementById("status").innerHTML = "Square is drawn";
        draw_square = "";
    }
    if (draw_rect == "set") {
        fill(r, g, b);
        rect(x, y, 70, 50);
        document.getElementById("status").innerHTML = "Rectangle is drawn";
        draw_rect = "";
    }
}