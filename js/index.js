let noteTitle;
let noteText;
let saveNoteBtn;
let newNoteBtn;
let noteList;

if(window.location.pathName==='/notes'){
    noteTitle = document.querySelector('.note-title');
    noteText=document.querySelector('.note-textarea');
    saveNoteBtn=document.querySelector('.save-note');
    newNoteBtn=document.querySelector('.new-note');
    notelist=document.querySelector('.list-container .list-group');
}

//show elements 
const show= (elem)=>{
    elem.style.display='inline';
};
//Hide an element
const hide=(elem)=>{
    elem.style.display='none';
};

//activeNote is used to keep track of the note inthe textarea
let activeNote ={};
const getNotes=()=>
fetch('/api/notes', {
    method:'GET',
    headers:{
        'Content-Type': 'application/json',
    }
});
const saveNote=(note)=>
fetch('/api/notes', {
    method:'POST',
    headers:{
        'Content-Type': 'application/json',
},
body:JSON.stringify(note),
});
const deleteNote=(id)=>
fetch('/api/notes.${id}',{
    method:'DELETE',
    headers:{
        'Content-Type': 'application/json',
    },
});

const renderActiveNote=()=>{
    hide(saveNoteBtn);

    if(activeNote.id){
        noteTitle.setAttribute('readonly', true);
        noteText.setAttribute('readonly', true);
        noteTitle.value=activeNote.title;
    }
}
