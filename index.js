createNewNote=()=>{
    const noteContainer= document.createElement('div');
    noteContainer.classList.add('sticky-notes');

    const randomColor='#'+Math.floor(Math.random()*16777215).toString(16);
    noteContainer.style.backgroundColor=randomColor;

    const noteText= document.createElement('p');
    noteText.innerText= typeNote.value;
    noteContainer.appendChild(noteText);

      // Append the new note to the notes section
      document.querySelector('.notes-section').appendChild(noteContainer);

      // Clear the textarea
      typeNote.value = '';
}


alert("hiii")
const divContainer=document.createElement('div');
divContainer.classList.add('container')

const mainHeading=document.createElement('h1');
mainHeading.innerText="Sticky Notes";
divContainer.appendChild(mainHeading);


//text area
const typeNote= document.createElement('textarea');
typeNote.placeholder="Type a new note...";
divContainer.appendChild(typeNote);
document.querySelector('body').appendChild(divContainer)
//button

const addButton= document.createElement('button');
addButton.innerText="+";
divContainer.appendChild(addButton);

addButton.onclick=()=>{
    const noteContent= typeNote.value;
    if(noteContent){
        createNewNote();
    }
    else{
        alert("wrong doing");
    }
}

// Create a notes section to display sticky notes
const notesSection = document.createElement('div');
notesSection.classList.add('notes-section');
divContainer.appendChild(notesSection);