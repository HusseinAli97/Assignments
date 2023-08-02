var sName = document.querySelector("#siteName");
var sUrl = document.querySelector("#siteUrl");
var addBtn = document.querySelector("#addBtn");
var tBody = document.querySelector("#tableBody");
var currentMoment = moment().format("MMMM Do YYYY, h:mm:ss a");
var lastMoment = '';
var bookList = [];
var localName = "bookList";
var button = '';


// ************************ Store in Local Storage ****************************
function storeAtLocal(listBookmarks) {
    localStorage.setItem(localName, JSON.stringify(listBookmarks));
}
(function () {
    if (localStorage.getItem(localName) !== null) {
        bookList = JSON.parse(localStorage.getItem(localName));
        display(bookList);
    } else {
        bookList = [];
    }
})()
// ************************ End of Store in Local Storage ****************************
// ************************ Add bookmark ****************************
addBtn.addEventListener('click', (e) => {
    addition();
})
document.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        addition();
    }
})
function addition() {
    var bookMarksObject = {
        name: sName.value,
        url: sUrl.value,
        editDate: currentMoment,
        visitDate: lastMoment,
    }
    if (checkValidate() === true) {
        bookList.push(bookMarksObject);
        storeAtLocal(bookList);
        clearInputs();
        display(bookList);
    } else {
        alert("invalid valuse");
    }
}
// ********************************Display****************************
function display(bookMarkShow) {
    var content = "";
    for (var i = 0; i < bookMarkShow.length; i++) {
        content += `
        <tr>
        <th scope="row" class="py-3">${i + 1}</th>
        <td class="py-3 text-uppercase">${bookMarkShow[i].name}</td>
        <td class="py-3">${bookMarkShow[i].url}</td>
        <td>
            <button class="btn btn-info w-100 visitBtn" visit=${i}>
                <i class="fa-solid fa-eye"></i>
            </button>
        </td>
        <td>
            <button class="btn btn-danger w-100 delBtn" data="${i}">
                <i class="fa-solid fa-trash"></i>
            </button>
        </td>
        <td class="py-3">${bookMarkShow[i].editDate}</td>
        <td class="py-3">${bookMarkShow[i].visitDate || 'Not visited yet'}</td> <!-- Display visit date or "Not visited yet" -->
        </tr>`;
    }
    tBody.innerHTML = content;

    var delBtn = document.querySelectorAll(".delBtn");
    for (var i = 0; i < delBtn.length; i++) {
        delBtn[i].addEventListener('click', (e) => {
            deleteCurrent(Number(e.target.getAttribute("data")));

        })
    }
    var visitBtn = document.querySelectorAll(".visitBtn");
    for (var i = 0; i < visitBtn.length; i++) {
        visitBtn[i].addEventListener('click', (e) => {
            lastMoment = moment().format('YYYY-MM-DD-HH:mm,A');
            addAnchorVisit(Number(e.target.getAttribute("visit")), lastMoment);
        })
    }
}

function addAnchorVisit(index, lastVisit) {
    lastMoment = lastVisit;
    bookList[index].visitDate = lastMoment; // Update the visit date of the bookmark
    storeAtLocal(bookList);
    display(bookList);
    window.open(`https://${bookList[index].url}`, '_blank');
}

// ************************ Clear Inputs ****************************
function clearInputs() {
    sName.value = "";
    sUrl.value = "";
}
// ************************** Delete bookmark ****************************

function deleteCurrent(index) {
    bookList.splice(index, 1);
    storeAtLocal(bookList);
    display(bookList);
}
// ? ************************* Validation ****************************
sName.addEventListener('input', (e) => {
    siteNameValidation(e.target.value);
})
sUrl.addEventListener('input', (e) => {
    siteUrlValidation(e.target.value);
})
function siteNameValidation(nameValue) {
    var regexName = /^[a-zA-Z0-9]{3,}$/gi;
    if (regexName.test(nameValue)) {
        sName.classList.replace("is-invalid", "is-valid");
        return true

    } else {
        sName.classList.add("is-invalid");
        return false
    }
}

function siteUrlValidation(urlValue) {
    var regexUrl = /^(?:https?:\/\/)?[a-zA-Z0-9-]{2,256}\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
    if (regexUrl.test(urlValue)) {
        sUrl.classList.replace("is-invalid", "is-valid");
        return true
    } else {
        sUrl.classList.add("is-invalid");
        return false
    }
}
function checkValidate() {
    if (siteNameValidation(sName.value) && siteUrlValidation(sUrl.value)) {
        return true
    } else {
        return false;
    }
}