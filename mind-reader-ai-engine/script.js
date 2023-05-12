const modal = document.getElementById('modal');
const closeBtn = document.getElementsByClassName('close')[0];
const progressBar = document.getElementById('progress-bar');
const progressMsg = document.getElementById("progress-msg");

const PRG_MSG = [
    "Analyzing electrical signals...",
    "Sending signals to Neural Network...",
    "Backpropagating signals...",
    "Calculating gradient...",
    "Updating weights...",
    "Forward and backward pass completed..."
]

let FINAL_MSG = "You're thinking of "

function readMindUsingAI() {
    modal.style.display = 'block';

    progressBar.style.width = '0%';
    const duration = 40;
    const increment = 100 / (duration * 10);

    let progress = 0; // Current progress

    let msgIndex = 0
    let msg = PRG_MSG[msgIndex]
    progressMsg.innerText = msg

    const interval = setInterval(function () {
        progress += increment;
        progressBar.style.width = progress + '%';

        if (progress === 20 || progress === 40 || progress === 55 || progress === 70 || progress === 80) {
            msgIndex++
            msg = PRG_MSG[msgIndex]
            progressMsg.innerText = msg
        }

        if (progress >= 100) {
            const finalResult = document.getElementById("think-tank").value;
            if(finalResult == '') FINAL_MSG = "Nice try! You didn't think of a number."
            progressMsg.innerText = FINAL_MSG + finalResult
            clearInterval(interval);
        }
    }, 35);

}

closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
