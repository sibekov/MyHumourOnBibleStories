
console.log("Ijava Iyahlupha jerrr!!!");

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            }
            else {
                let mygameType = this.getAttribute("data-type");
                alert(`You clicked ${mygameType}`);
            }
        });
    }

});

function myrunGame() {

}

function mycheckAnswer() {

}

function myworkedoutAnswer() {

}

function myincreaseScore() {

}

function myincreaselossAnswer() {

}


function displayjesusQuestion() {

}

function displayjonaQuestion() {

}

function displyelijahQuestion() {

}

function displaymosesQuestion() {

}


//https://www.w3schools.com/tags/av_prop_playbackrate.asp

let vid = document.getElementById("myvideo");
vid.playbackRate = 0.05;

