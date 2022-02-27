////UI UPDATES////
// Function: create a new note in UI
function addNoteToListContainer(note) {
    const listContainer = document.querySelector('#list__container');
    // the reason why I didn't loop over each note in this function is because anytime a note is saved, it creates duplicates of all the other saved notes because it's looping over them
    const maxTitleLenght = 20;
    const maxBodyLenght = 35;
    const notesListItem = document.createElement('div');
    notesListItem.classList.add('notes__list-item');
    notesListItem.innerHTML = `
        <span hidden>${note.id}</span>
        <button class = "btn__delete">X</button>
        <h3 class = "notes__item-title">
            ${note.title.substring(0, maxTitleLenght)}
            ${note.title.length > maxTitleLenght ? '...' : ''}</h3>
        <p class = "notes__item-body">
            ${note.body.substring(0, maxBodyLenght)}
            ${note.body.length > maxBodyLenght ? '...' : ''}
        </p>
        <div class="notes__item-timestamp">
            ${new Date(note.updated).toLocaleString(undefined, { dateStyle: "short", timeStyle: "short" })}
        </div>
    `;
    listContainer.insertAdjacentElement('afterbegin', notesListItem);
};

// Function: remove note from list container
function removeNoteFromListContainer(noteToRemoveId) {
    const listContainer = document.querySelector('#list__container');
    for(child of listContainer.children) {
        if(child.children[0].innerHTML == noteToRemoveId) {
            listContainer.removeChild(child);
        }
    }
    // listContainer.children[0].children[0].innerText
};

// Function: show notes saved in local storage in sidebar
function showSavedNoteItem() {
    const notes = getNotes();
    notes.reverse().forEach(note => {addNoteToListContainer(note)});
};

// Show alert messages
function showAlertMessage(message, alertClass) {
    const listContainer = document.querySelector('#list__container');
    const alertDiv = document.createElement('div');
    alertDiv.className = `message ${alertClass}`;
    alertDiv.appendChild(document.createTextNode(message));
    listContainer.insertAdjacentElement('beforebegin', alertDiv);
    const notesContentTitle = document.querySelector('.notes__content-title');
    notesContentTitle.focus();
    setTimeout(() => alertDiv.remove(), 1500);
};