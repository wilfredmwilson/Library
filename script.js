const myLibrary = [];

function Book(name,author,read,pages,price) {
 this.name=name;
 this.author=author;
 this.pages=pages;
 this.read=read;
 this.price=price;
}

function addBookToLibrary() {
    
    const name=document.getElementById('name').value;
    const author=document.getElementById('author').value;
    const pages=document.getElementById('pages').value;
    const price=document.getElementById('price').value;
    const newbook=new Book(name,author,pages,price);
    myLibrary.push(newbook);
    displayBook();
    }


function displayBook()
{  
    var table=document.getElementById("book-table");
    if(myLibrary.length === 0)
    {
        table.style.display = "none";
    }
    else
    {
    table.style.display = '';
    const eachBook = document.getElementById('book-details');
    eachBook.innerHTML='';
    myLibrary.forEach((value,index)=> {
        const row=document.createElement('tr');
        row.innerHTML=`  
                        <td>${value.name}</td>
                        <td>${value.author}</td>
                        <td>${value.pages}</td>
                        <td>${value.price}</td>
                        <td>${value.read ? "NOT YET" : "READED"}</td>
                        <td><button onclick="ToggleRead(${index}); ToggleButton();" id="read">Read</button></td>
                        <td><button id="remove" onclick="removeBook(${index})">REMOVE</button></td>`;
        eachBook.appendChild(row);
    });
}
}

function removeBook(index)
{
    myLibrary.splice(index,1);
    displayBook();
}
var button1=document.getElementById('add-book-button');
button1.addEventListener('click', function(event){
    event.preventDefault();
    addBookToLibrary();
    document.getElementById("add-book-form").style.display = "none";
  })
var button2=document.getElementById('adding-details');
button2.addEventListener('click', ()=>{
    document.getElementById("add-book-form").style.display = "block";
  })

  function ToggleButton() {
    var element = document.getElementById("read");
    element.classList.toggle("mystyle");
 }


Book.prototype.ToggleRead=function(){
    this.read=!this.read;
}

function ToggleRead(index){
    myLibrary[index].ToggleRead();
    displayBook();
}
// Dummy entry
const newbookfirst=new Book("fredy","wilson",50,450);
myLibrary.push(newbookfirst);
displayBook();
