const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
/*let notes = document.querySelectorAll(".input-box"); */
function showNotes()
{
  /*  notesContainer.innerHTML = localStorage.getItem("notes"); */
  const storedNotes = localStorage.getItem("notes");
  if (storedNotes) {
        notesContainer.innerHTML = JSON.parse(storedNotes).join('');
    }
}
showNotes();
function updateStorge(){
   /* localStorage.setItem("notes",notesContainer.innerHTML); */
   const notes = document.querySelectorAll(".input-box");
    const notesArray = Array.from(notes).map((note) => note.outerHTML);
    localStorage.setItem("notes", JSON.stringify(notesArray));

}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className ="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src= "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorge();
})
notesContainer.addEventListener("click", function(e){
   if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    updateStorge();
   } 
   else if(e.target.tagName === "P"){
    notes = document.querySelectorAll(".input-box");
   notes.forEach((nt) =>{
      nt.onkeyup = function(){
        updateStorge();
      }
   })
}
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
        updateStorge();
    }
})