const overlay =document.querySelector(".popup-overlay");
const popup =document.querySelector(".popup-box");
const btn =document.querySelector(".add-btn");

btn.addEventListener('click',function(){
    popup.style.display="block"
    overlay.style.display="block"
});

const cancel =document.querySelector("#cancel-btn");

cancel.addEventListener('click',function(event){
    event.preventDefault();

    popup.style.display="none";
    overlay.style.display="none";
});
const container =document.querySelector(".container");
const addBook =document.querySelector("#addBook");
const booktitle =document.querySelector("#book-title");
const bookAuthor =document.querySelector("#book-author");
const bookDescription=document.querySelector("#book-description");

addBook.addEventListener('click',function(event){
    event.preventDefault();

    const div =document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookAuthor.value}</h5>
    <p>${bookDescription.value}</p>
    <button class="btn" onclick="del(event)">Delete</button>`
    container.append(div);

    popup.style.display="none";
    overlay.style.display="none";
});

function del(event){
    event.target.parentElement.remove();
}