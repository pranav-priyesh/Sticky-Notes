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
        console.log(noteContent)
    }
    else{
        alert("wrong doing");
    }
}