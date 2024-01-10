/**
 * the DOM to finish loading before running the game
 * Get the button elements and add event listeners to them
 */
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

});

/**
 * The main function of game, which is called when the script is first loaded
 * and after the user's answers button clicks have been processed
 */
let newlist = [];
let mylist = ['water?', 'a rock?', 'a tree?', 'a fish?', 'fire?'];
let listchecka = [];
function myrunGame(mygameType) {
    let charactor = mygameType;
    let counta = mycounter();
    let levela = parseInt(document.getElementById("myscore").innerHTML);
    if (counta === 0) {
        mygameover();
    }
    else if (newlist.length === 5) {
        alert(`Congratulations you have finished the game !!!! `);
        winner(charactor);
        console.log(newlist);
    }
    else {
        let operand = mylist.pop();
        if (newlist.includes(operand)) {
            myrunGame(mygameType);
        }
        else {
            if (charactor === 'Jesus') {
                displayjesusQuestion(charactor, operand);
            } else if (charactor === 'Jona') {
                displayjonaQuestion(charactor, operand);
            }
            else if (charactor === 'Elijah') {
                displayelijahQuestion(charactor, operand);
            }
            else if (charactor === 'Moses') {
                displaymosesQuestion(charactor, operand);
            }
            else {
                alert(`unknown game type:${charactor}`);
                throw `unknown game type:${charactor}. Aborting!!!`;
            }
            mylist.unshift(operand);
        }
    }

}

/**
 * Checks the answer submitted by user against stored correct answers.
 */
function mycheckAnswer() {

    let myuserAnswer = document.getElementById("useranswer").value;
    let myAnswer = myworkedoutAnswer();
    let isCorrect = myuserAnswer === myAnswer[1];
    if (isCorrect) {
        alert("That is correct!!!...You Have Good Bible Study Habits!");
        myincreaseScore();
        let ads = myAnswer[2];
        if (newlist.includes(ads) !== true) {
            newlist.unshift(ads);
            console.log(newlist);
        }
        console.log(newlist);
    }
    else {
        alert(`Sorry... you said ${myuserAnswer}.  But the correct answer is ${myAnswer[1]}`);
        myincreaselossAnswer();
    }
    myrunGame(myAnswer[0]);
}

/**
 * Gets the operands (the objects being handled by the bible charactors)
 * directly from the dom, and returns the correct answer if they match.
 */
function myworkedoutAnswer() {
    let charactor = document.getElementById('mycharactor').innerText;
    let operand = document.getElementById('myoperand').innerText;
    if (charactor === 'Jesus' && operand === 'water?') {
        return [charactor, 'walk over it!', operand];
    }
    else if (charactor === 'Jesus' && operand === 'a rock?') {
        return [charactor, 'build a mension on it!', operand];
    }
    else if (charactor === 'Jesus' && operand === 'a tree?') {
        return [charactor, 'curse it!', , operand];
    }
    else if (charactor === 'Jesus' && operand === 'a fish?') {
        return [charactor, 'do a multiplication!', operand];
    }
    else if (charactor === 'Jesus' && operand === 'fire?') {
        return [charactor, "set it on his friends\'s heads!", operand];
    }
    else if (charactor === 'Jona' && operand === 'water?') {
        return [charactor, 'deep dive into it', operand];
    }
    else if (charactor === 'Jona' && operand === 'a rock?') {
        return [charactor, 'sit and wait for a movie to start', operand];
    }
    else if (charactor === 'Jona' && operand === 'a tree?') {
        return [charactor, 'lie down under its shadow', operand];
    }
    else if (charactor === 'Jona' && operand === 'a fish?') {
        return [charactor, 'submarine!', operand];
    }
    else if (charactor === 'Jona' && operand === 'fire?') {
        return [charactor, 'try to burn others those who frustrated him', operand];
    }
    else if (charactor === 'Elijah' && operand === 'water?') {
        return [charactor, 'season it!', operand];
    }
    else if (charactor === 'Elijah' && operand === 'a rock?') {
        return [charactor, 'hide in it', operand];
    }
    else if (charactor === 'Elijah' && operand === 'a tree?') {
        return [charactor, 'overnight stay', operand];
    }
    else if (charactor === 'Elijah' && operand === 'a fish?') {
        return [charactor, 'three year diet', operand];
    }
    else if (charactor === 'Elijah' && operand === 'fire?') {
        return [charactor, 'start a barbacue', operand];
    }
    else if (charactor === 'Moses' && operand === 'water?') {
        return [charactor, 'divide by Two', operand];
    }
    else if (charactor === 'Moses' && operand === 'a rock?') {
        return [charactor, 'strike it', operand];
    }
    else if (charactor === 'Moses' && operand === 'a tree?') {
        return [charactor, 'take of his shoes', operand];
    }
    else if (charactor === 'Moses' && operand === 'a fish?') {
        return [charactor, 'make sure it is not eel before eating', operand];
    }
    else if (charactor === 'Moses' && operand === 'fire?') {
        return [charactor, 'listen attentively', operand];
    }
    else {
        alert(`unimplemented operand ${operand}`);
        throw `unimplemented oprand ${operand}, Aborting!!!`;
    }
}

/**
 * Gets the current score from the DOM and increments it by 1 if the user pick the correct answer
 */
function myincreaseScore() {
    let previousmyScore = parseInt(document.getElementById("myscore").innerHTML);
    document.getElementById("myscore").innerHTML = previousmyScore + 1;
}

/**
 * Gets the current score from the DOM and increments it by 1 if the user selcted the wrong answer
 */
function myincreaselossAnswer() {
    let previousmywrongScore = parseInt(document.getElementById("wrong").innerHTML);
    document.getElementById("wrong").innerHTML = previousmywrongScore + 1;
}

/**
 * Displays the various questions about operands/objects about the charactor Jesus.
 */
function displayjesusQuestion(charactor, operand) {
    document.getElementById('mycharactor').textContent = charactor;
    document.getElementById('myoperand').textContent = operand;
}

/**
 * Displays the various questions about operands/objects about the charactor Jona.
 */
function displayjonaQuestion(charactor, operand) {
    document.getElementById('mycharactor').textContent = charactor;
    document.getElementById('myoperand').textContent = operand;

}

/**
 * Displays the various questions about operands/objects about the charactor Elijah.
 */
function displayelijahQuestion(charactor, operand) {
    document.getElementById('mycharactor').textContent = charactor;
    document.getElementById('myoperand').textContent = operand;
}

/**
 * Displays the various questions about operands/objects about the charactor Moses.
 */
function displaymosesQuestion(charactor, operand) {
    document.getElementById('mycharactor').textContent = charactor;
    document.getElementById('myoperand').textContent = operand;
}

/**
 * Displays the number of trys remaining.
 */
function mycounter() {
    let w = parseInt(document.getElementById("wrong").innerHTML);
    let counta = 3 - w;
    document.getElementById("counterspan").innerHTML = counta;
    return counta;
}