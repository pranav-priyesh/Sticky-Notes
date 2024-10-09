alert("hiii")
const mainHeading=document.createElement('h1');
mainHeading.innerText="Sticky Notes";
document.querySelector('body').appendChild(mainHeading);

//text area
const typeNote= document.createElement('textarea');
typeNote.placeholder="Type a new note...";
document.querySelector('body').appendChild(typeNote);

//button

const addButton= document.createElement('button');
addButton.innerText="+";
document.querySelector('body').appendChild(addButton);

addButton.onclick=()=>{
    const noteContent= typeNote.value;
    if(noteContent){
        console.log(noteContent)
    }
    else{
        alert("wrong doing");
    }
}