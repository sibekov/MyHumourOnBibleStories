
console.log("Ijava Iyahlupha jerrr!!!");

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                mycheckAnswer();
            }
            else {
                let mygameType = this.getAttribute("data-type");
                myrunGame(mygameType);
            }
        });
    }

    myrunGame("Jesus");
});

function myrunGame(mygameType) {

    let charactor = "Jesus";

    let operand = ["water?", "a rock?", "a tree?", "a fish?", "fire?"][Math.floor(10 * Math.random() / 2)];
    if (mygameType === "Jesus") {
        displayjesusQuestion(charactor, operand);
    } else {
        alert(`unknown game type:${mygameType}`);
        throw `unknown game type:${mygameType}. Aborting!!!`;
    }
}



function mycheckAnswer() {

    let myuserAnswer = document.getElementById("useranswer").value;
    let myAnswer = myworkedoutAnswer();
    let isCorrect = myuserAnswer === myAnswer[1];

    if (isCorrect) {
        alert("Congratulations!!!...You Have Good Bible Study Habits!");
    }
    else {
        alert(`Sorry... you said ${myuserAnswer}.  But the correct answer is ${myAnswer[1]}`);
    }

    myrunGame(myAnswer[0]);

    //pop trys into a set.
}

function myworkedoutAnswer() {

    let charactor = document.getElementById('mycharactor').innerText;
    let operand = document.getElementById('myoperand').innerText;

    if (charactor === 'Jesus' && operand === 'water?') {
        return [charactor, 'walk over it!'];
    }
    else if (charactor === 'Jesus' && operand === 'a rock?') {
        return [charactor, 'build a mension on it!'];
    }
    else if (charactor === 'Jesus' && operand === 'a tree?') {
        return [charactor, 'curse it!'];
    }
    else if (charactor === 'Jesus' && operand === 'a fish?') {
        return [charactor, 'do a multiplication!'];
    }
    else if (charactor === 'Jesus' && operand === 'a fire?') {
        return [charactor, "set it on his friends heads!"];
    }
    else {
        alert(`unimplemented operand ${operand}`);
        throw `unimplemented oprand ${operand}, Aborting!!!`;
    }
}

function myincreaseScore() {

}

function myincreaselossAnswer() {

}


function displayjesusQuestion(charactor, operand) {

    document.getElementById('mycharactor').textContent = charactor;
    document.getElementById('myoperand').textContent = operand;

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
;
