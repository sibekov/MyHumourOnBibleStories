


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
    myrunGame(mygameType);
});

function myrunGame(mygameType) {

    let charactor = mygameType;

    let mylist = ['water?', 'a rock?', 'a tree?', 'a fish?', 'fire?'];

    //let operand = mylist[Math.floor(10 * Math.random() / 2)];

    for (let elementoflist of mylist) {

        if (mygameType === 'Jesus') {
            displayjesusQuestion(charactor, operand);
        } else if (mygameType === 'Jona') {
            displayjonaQuestion(charactor, operand);
        }
        else if (mygameType === 'Elijah') {
            displayelijahQuestion(charactor, operand);
        }

        else if (mygameType === 'Moses') {
            displaymosesQuestion(charactor, operand);
        }
        else {
            alert(`unknown game type:${mygameType}`);
            throw `unknown game type:${mygameType}. Aborting!!!`;
        }


    }
}



function mycheckAnswer() {

    let myuserAnswer = document.getElementById("useranswer").value;
    let myAnswer = myworkedoutAnswer();
    let isCorrect = myuserAnswer === myAnswer[1];

    if (isCorrect) {
        alert("Congratulations!!!...You Have Good Bible Study Habits!");
        myincreaseScore();
    }
    else {
        alert(`Sorry... you said ${myuserAnswer}.  But the correct answer is ${myAnswer[1]}`);
        myincreaselossAnswer();

    }


    myrunGame(myAnswer[0]);
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
    else if (charactor === 'Jesus' && operand === 'fire?') {
        return [charactor, "set it on his friends\'s heads!"];
    }

    else if (charactor === 'Jona' && operand === 'water?') {
        return [charactor, 'deep dive into it'];
    }
    else if (charactor === 'Jona' && operand === 'a rock?') {
        return [charactor, 'sit and wait for a movie to start'];
    }
    else if (charactor === 'Jona' && operand === 'a tree?') {
        return [charactor, 'lie down under its shadow'];
    }
    else if (charactor === 'Jona' && operand === 'a fish?') {
        return [charactor, 'submarine!'];
    }
    else if (charactor === 'Jona' && operand === 'fire?') {
        return [charactor, 'try to burn others those who frustrated him'];
    }


    else if (charactor === 'Elijah' && operand === 'water?') {
        return [charactor, 'season it!'];
    }
    else if (charactor === 'Elijah' && operand === 'a rock?') {
        return [charactor, 'hide in it'];
    }
    else if (charactor === 'Elijah' && operand === 'a tree?') {
        return [charactor, 'overnight stay'];
    }
    else if (charactor === 'Elijah' && operand === 'a fish?') {
        return [charactor, 'three year diet'];
    }
    else if (charactor === 'Elijah' && operand === 'fire?') {
        return [charactor, 'start a barbacue'];
    }

    else if (charactor === 'Moses' && operand === 'water?') {
        return [charactor, 'divide by Two'];
    }
    else if (charactor === 'Moses' && operand === 'a rock?') {
        return [charactor, 'strike it'];
    }
    else if (charactor === 'Moses' && operand === 'a tree?') {
        return [charactor, 'take of his shoes'];
    }
    else if (charactor === 'Moses' && operand === 'a fish?') {
        return [charactor, 'make sure it is not eel before eating'];
    }
    else if (charactor === 'Moses' && operand === 'fire?') {
        return [charactor, 'listen attentively'];
    }

    else {
        alert(`unimplemented operand ${operand}`);
        throw `unimplemented oprand ${operand}, Aborting!!!`;
    }
}

function myincreaseScore() {

    let previousmyScore = parseInt(document.getElementById("myscore").innerHTML);
    document.getElementById("myscore").innerHTML = previousmyScore + 1;
}

function myincreaselossAnswer() {

    let previousmywrongScore = parseInt(document.getElementById("wrong").innerHTML);

    document.getElementById("wrong").innerHTML = previousmywrongScore + 1;

}


function displayjesusQuestion(charactor, operand) {

    document.getElementById('mycharactor').textContent = charactor;
    document.getElementById('myoperand').textContent = operand;

}

function displayjonaQuestion(charactor, operand) {
    document.getElementById('mycharactor').textContent = charactor;
    document.getElementById('myoperand').textContent = operand;

}

function displayelijahQuestion(charactor, operand) {
    document.getElementById('mycharactor').textContent = charactor;
    document.getElementById('myoperand').textContent = operand;
}

function displaymosesQuestion(charactor, operand) {
    document.getElementById('mycharactor').textContent = charactor;
    document.getElementById('myoperand').textContent = operand;
}


