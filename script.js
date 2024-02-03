let textArea = document.querySelector('#text');
let words = document.querySelector('.home p');
let count = 0;
let postBtn = document.querySelector('.button button');
let mainCont = document.querySelector('.feed');
let addThread = true;
let ticket = document.querySelector('.thread');
let modal = document.querySelector('.modalCont');
let show = false;

postBtn.addEventListener('click', function () {
    if (textArea.value == "") {
        textArea.value = "";
        alert("Please type something!");
        return;
    }
    generateTicket(textArea.value);
    textArea.value = ""
})

function generateTicket(task) {
    let ticketCont = document.createElement("div");
    ticketCont.className = 'thread';
    ticketCont.innerHTML = `<div class="name">
                                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="img">
                                <h1>Joanne Graham</h1>
                                <p>@joannegraham123</p>
                                <div>
                                    <div class="edit">
                                        <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="edit">
                                    </div>
                                    <div class="delBtn">
                                        <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="delete">
                                    </div>
                                </div>
                            </div>
                            <textarea name="text" id="text">${task}</textarea>
                            <div class="icons">
                                <img class="comment" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="comment">
                                <img class="heart" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="like">
                            </div>`
    mainCont.appendChild(ticketCont);
    textArea.setAttribute('contentEditable', 'false');
}

words.addEventListener('keydown', function () {
    count++;
    count.innerText = count / 100;
})

function textLength(value) {
    var maxLength = 100;
    if (value.length > maxLength) {
        return false;
    }
    return true;
}

document.getElementById('text').onkeyup = function () {
    if (!textLength(this.value)) {
        textArea.setAttribute('contentEditable', 'false');
    }
}

let editBtn = document.querySelector('.thread .edit');
let heart = document.querySelector('.heart');
let deleteBtn = document.querySelector('.thread .delBtn');

editBtn.addEventListener('click', function () {
    show = true;
    if (show) {
        textArea.setAttribute('contentEditable', 'true');
    }
    if (!show) {
        textArea.setAttribute('contentEditable', 'false');
    }
    let editButton = document.createElement("div");
    editButton.className = 'editIcons';
    editButton.innerHTML = `<div class="postBtn">
                                <button>Cancel</button>
                                <button>Post</button>
                            </div>`
    mainCont.appendChild(editButton);
})

heart.addEventListener('click', function () {
    heart.innerHTML = `<img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/030/original/delete-color-filled.png?1706888714" alt="like">`
})

deleteBtn.addEventListener('click', function () {
    modal.style.display = 'flex';
    console.log("clicked");
})
