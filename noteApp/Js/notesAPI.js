// Class: for creating a new note
class Note {
    constructor(title, body){
        this.title = title;
        this.body = body;
        this.id = Math.floor(Math.random() * 1000000);
    };
};
// Function: get notes from local Storage
function getNotes() {
    const notes = JSON.parse(localStorage.getItem("notesApp.note")) || []
    return notes.sort((a, b) => {
        return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
    })
};
// Function: remove a note from the local storage 
function deleteNote(id) {
    const notes = this.getNotes();
    notes.forEach(note => {
        if(note.id === id){
            notes.splice(notes.indexOf(note), 1);
        }
        localStorage.setItem('notesApp.note', JSON.stringify(notes));
    })
};
// Function: add a note to local storage 
function addNotesToLocalStorage(noteToSaveId) {
    const notes = this.getNotes();
    const existing = notes.find(aNote => noteToSaveId.textContent == aNote.id);
    if(existing) {
        removeNoteFromListContainer(existing.id);
        const notesContentTitle = document.querySelector('.notes__content-title');
        const notesContentBody = document.querySelector('.notes__content-body');
        existing.title = notesContentTitle.value;
        existing.body = notesContentBody.value;
        existing.updated = new Date().toISOString();
        notes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
        localStorage.setItem('notesApp.note', JSON.stringify(notes));
        addNoteToListContainer(existing);
        showAlertMessage('Note has been updated!', 'success-message');
    }
    else {
        const newNote = new Note(notesContentTitle.value, notesContentBody.value);
        newNote.id = Math.floor(Math.random() * 1000000);
        newNote.updated = new Date().toISOString();
        notes.push(newNote);
        notes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
        localStorage.setItem('notesApp.note', JSON.stringify(notes));
        addNoteToListContainer(newNote);
        showAlertMessage('Note has been saved!', 'success-message');
    };
};


 