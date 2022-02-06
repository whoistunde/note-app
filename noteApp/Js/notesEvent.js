////Event: note button////
// save note button: if note already exists in local storage update it, else save the newly created notes
const btnSaveNote = document.querySelector('.notes__save');
btnSaveNote.addEventListener('click', function () {
    const notesContentTitle = document.querySelector('.notes__content-title');
    const notesContentBody = document.querySelector('.notes__content-body');

    if(notesContentTitle.value.length > 0 && notesContentBody.value.length > 0){
        const hiddenId = document.querySelector('.hidden__id');
        addNotesToLocalStorage(hiddenId);
        notesContentTitle.value = '';
        notesContentBody.value = '';
        hiddenId.innerHTML = '';
        notesContentTitle.focus();
        for(let child of listContainer.children) {
            child.classList.remove('notes__item-selected');
        };
    }
    else{
        showAlertMessage('Please add a title and a note!', 'alert-message');
    }
    
})

// Event: click the delete note button to delete notes from both the sidebar and the local storage
const listContainer = document.querySelector('#list__container');
listContainer.addEventListener('click', (e) =>{
    if (e.target.classList.contains('btn__delete')) {  
        const btnDelete = e.target;
        const checkDelete = confirm('This note would be permanently deleted');
        if(checkDelete) {
            const notesListItem = btnDelete.parentElement;
            const id = notesListItem.children[0].innerText;
            deleteNote(Number(id));
            notesListItem.remove();
            showAlertMessage('Note has been permanently deleted!', 'remove-message');
            const notesContentTitle = document.querySelector('.notes__content-title');
            const notesContentBody = document.querySelector('.notes__content-body');
            notesContentTitle.value = '';
            notesContentBody.value = '';
            notesContentTitle.focus();
        }   
    }
});

// Mouse over event for the delete button, turns it's background color to red
listContainer.addEventListener('mouseover', (e) =>{
    if (e.target.classList.contains('btn__delete')) {  
        const btnDelete = e.target;
        btnDelete.classList.add('btn__delete-mouseover');
    }
});
listContainer.addEventListener('mouseout', (e) =>{
    if (e.target.classList.contains('btn__delete')) {  
        const btnDelete = e.target;
        btnDelete.classList.remove('btn__delete-mouseover');
    }
});

// Event: a click event on a note list item that selects the note, shows its content and when saved again, updates its content with the selectAndUpdate function
listContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('notes__list-item')) {
        const notes = getNotes();
        const notesListItem = e.target;
        for(let child of listContainer.children) {
            child.classList.remove('notes__item-selected');
        };
        const listAPINote = notes.find(aNote => aNote.id == notesListItem.children[0].innerText);
        const notesContentTitle = document.querySelector('.notes__content-title');
        const notesContentBody = document.querySelector('.notes__content-body');
        const hiddenId = document.querySelector('.hidden__id');
        notesContentTitle.value = listAPINote.title;
        notesContentBody.value = listAPINote.body;
        hiddenId.innerText= listAPINote.id;
        notesContentTitle.focus();
        notesListItem.classList.add('notes__item-selected');
    }
    else if (e.target.classList.contains('notes__item-title')) {
        const notes = getNotes();
        const notesListItem = e.target.parentElement;
        for(let child of listContainer.children) {
            child.classList.remove('notes__item-selected');
        };
        const listAPINote = notes.find(aNote => aNote.id == notesListItem.children[0].innerText);
        const notesContentTitle = document.querySelector('.notes__content-title');
        const notesContentBody = document.querySelector('.notes__content-body');
        const hiddenId = document.querySelector('.hidden__id');
        notesContentTitle.value = listAPINote.title;
        notesContentBody.value = listAPINote.body;
        hiddenId.innerText= listAPINote.id;
        notesContentTitle.focus();
        notesListItem.classList.add('notes__item-selected');
    }
    else if (e.target.classList.contains('notes__item-body')) {
        const notes = getNotes();
        const notesListItem = e.target.parentElement;
        for(let child of listContainer.children) {
            child.classList.remove('notes__item-selected');
        };
        const listAPINote = notes.find(aNote => aNote.id == notesListItem.children[0].innerText);
        const notesContentTitle = document.querySelector('.notes__content-title');
        const notesContentBody = document.querySelector('.notes__content-body');
        const hiddenId = document.querySelector('.hidden__id');
        notesContentTitle.value = listAPINote.title;
        notesContentBody.value = listAPINote.body;
        hiddenId.innerText= listAPINote.id;
        notesContentTitle.focus();
        notesListItem.classList.add('notes__item-selected');
    }
})

// Event: show saved note item in sidebar on page reload
document.addEventListener('DOMContentLoaded', showSavedNoteItem);

const notesContentTitle = document.querySelector('.notes__content-title');
const notesContentBody = document.querySelector('.notes__content-body');
notesContentTitle.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        notesContentBody.focus()
    }
})
document.addEventListener('DOMContentLoaded', () => {
    notesContentTitle.focus();
});