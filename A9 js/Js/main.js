/* 
-------------------Code structure-------------------
1-selected elements
2- local storage functions
3- btn events
4- add bookmark function 
5- clear inputs
6- display bookmark function
7- delete bookmark function
8- validation
9- sweet alert function
*/
// ! ************************************* 1- Selected Elements***************************************
const siteNameInput = document.querySelector("#siteName");
const siteUrlInput = document.querySelector("#siteUrl");
const addBtn = document.querySelector("#addBtn");
const tableBody = document.querySelector("#tableBody");
const momentFormat = moment().format("MMMM Do YYYY, h:mm:ss a");
const localStorageKey = "bookList";
let visitMoment = '';
let bookMarkList = [];

// ! ************************************** 2- Local Storage Functions *************************************

// ? check if local storage has data or not and send to display if yes
(function () {
    if (localStorage.getItem(localStorageKey) !== null) {
        bookList = JSON.parse(localStorage.getItem(localStorageKey));
        displayingBookmarks(bookList);
    } else {
        bookList = [];
    }
})()
// ? store data in local storage
function storeAtLocal(listBookmarks) {
    localStorage.setItem(localStorageKey, JSON.stringify(listBookmarks));
};

// ! **************************************** 3- Events Function **********************************

function btnEvents() {
    addBtn.addEventListener('click', (e) => {
        addBookmark();
    })
    document.addEventListener("keyup", (e) => {
        if (e.key === 'Enter') {
            addBookmark();
        }
    })
    siteNameInput.addEventListener('input', (e) => {
        siteNameValidation(e.target.value);
    })
    siteUrlInput.addEventListener('input', (e) => {
        siteUrlValidation(e.target.value);
    })

}
btnEvents();
// ! **************************************** 4- Add Bookmark Function ********************************
function addBookmark() {
    const bookMarksItems = {
        name: siteNameInput.value,
        url: siteUrlInput.value,
        editDate: momentFormat,
        visitDate: visitMoment,
    }
    if (checkValidate() === true) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be Added!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, add it!'
        }).then((result) => {
            if (result.isConfirmed) {
                bookMarkList.push(bookMarksItems);
                storeAtLocal(bookMarkList);
                displayingBookmarks(bookMarkList);
                clearInputs();
                showSuccessToast(`${bookMarksItems.name} added successfully`);
                siteNameInput.classList.remove('is-valid');
                siteUrlInput.classList.remove('is-valid');
            }
        })
    } else {
        if (!siteNameValidation(siteNameInput.value) && !siteUrlValidation(siteUrlInput.value)) {
            showFailed(`Please enter valid site name and url`);
        }else if (!siteNameValidation(siteNameInput.value)){
            showFailed(`Please enter valid site name containing at least 3 characters`);
        }else{
            showFailed(`Please enter valid url Example: https://google.com`);
        }
    }
}
// ! **************************************** 5- Clear Inputs ********************************
function clearInputs() {
    siteNameInput.value = "";
    siteUrlInput.value = "";
}
// ! **************************************** 6- Display Bookmark Function ********************************
function displayingBookmarks(bookMarksShowList) {
    let content = '';
    for (var i = 0; i < bookMarksShowList.length; i++) {
        let { name, url, editDate, visitDate } = bookMarksShowList[i];
        content += `
        <tr>
            <th scope="row" class="py-3">${i + 1}</th>
            <td class="py-3 text-uppercase">${name}</td>
            <td class="py-3">${url}</td>
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
            <td class="py-3">${editDate}</td>
            <td class="py-3">${visitDate}</td>
        </tr>`;
    }
    tableBody.innerHTML = content;
    setEventsToDisplay();
}
function setEventsToDisplay() {
    const delBtns = Array.from(document.querySelectorAll(".delBtn"));
    const visitBtns = Array.from(document.querySelectorAll(".visitBtn"));
    delBtns.map(function (delBtn) {
        delBtn.addEventListener('click', (e) => {
            deleteCurrent(Number(e.target.getAttribute("data")));
        });
    });
    visitBtns.map(function (visitBtn) {
        visitBtn.addEventListener('click', (e) => {
            visitMoment = moment().format('D/M/YYYY,HH:mmA');
            addVisitLink(Number(e.target.getAttribute("visit")), visitMoment);
        });
    })
}
function addVisitLink(currentIndex, visitMoment) {
    bookMarkList[currentIndex].visitDate = visitMoment;
    storeAtLocal(bookMarkList);
    displayingBookmarks(bookMarkList);
    window.open(`https://${bookMarkList[currentIndex].url}`, '_blank');
}
// ! **************************************** 7- Delete Bookmark Function ********************************
function deleteCurrent(index) {
    Swal.fire({
        icon: 'error',
        title: 'Delete',
        text: 'Are you sure you want to delete this bookmark',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            bookMarkList.splice(index, 1);
            storeAtLocal(bookMarkList);
            displayingBookmarks(bookMarkList);
            showSuccessToast(`Bookmark deleted successfully`);
        }else{
            return;
        }
    })
}
// ! **************************************** 8- Validation ********************************
function siteNameValidation(nameValue) {
    var regexName = /^[a-zA-Z0-9]{3,}$/gi;
    if (regexName.test(nameValue)) {
        siteNameInput.classList.replace("is-invalid", "is-valid");
        return true
    } else {
        siteNameInput.classList.add("is-invalid");
        return false
    }
}

function siteUrlValidation(urlValue) {
    var regexUrl = /^(?:https?:\/\/)?[a-zA-Z0-9-]{2,256}\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
    if (regexUrl.test(urlValue)) {
        siteUrlInput.classList.replace("is-invalid", "is-valid");
        return true
    } else {
        siteUrlInput.classList.add("is-invalid");
        return false
    }
}
function checkValidate() {
    if (siteNameValidation(siteNameInput.value) && siteUrlValidation(siteUrlInput.value)) {
        return true
    } else {
        return false;
    }
}
// ! ****************************************** 9- Sweet Alert Functions ********************************
        function showSuccessToast(massage) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: massage
            })
        }
        function showFailed(massage) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: massage
            })
        }
//----------------------------------------------------------------------------------------------------