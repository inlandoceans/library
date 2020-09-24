const container = document.getElementById('container'); 
const formSubmit = document.querySelector('#bookForm');

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

// Book.prototype.toggleRead = function(){
//   const readTog = document.querySelector('.readBtn');
//   readTog.addEventListener('change', function(){
//   if(readTog.checked = true){
//     this.read = false;
//   }
//   else {
//     this.read = true;
//   }
// })
// }

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  
// Refreshes nodes to avoid duplicates
  refresh ();
}

// Function to init remove button
function removeBtn(){
  delBtn = document.querySelectorAll('button.delBook');
  delBtn.forEach(button => {
    button.addEventListener('click', remove)
  })
  }

// Removes item from array and refreshes screen
function remove(){
  const index = this.parentNode.dataset.index;
  myLibrary.splice(index, 1);
  
  refresh();
}

// Ensures no duplicates
function refresh(){
  while (container.hasChildNodes()){
    container.removeChild(container.firstChild)
  }
  myLibrary.forEach(displayBook)
}


// Inserting book content into HTML
function displayBook(item){
  
  const div = document.createElement('div');
  div.classList.add('card-book');
  
  let h2 = document.createElement('h2');
  h2.classList.add('book-title');
  h2.textContent = item['title'];
  div.appendChild(h2);

  let h3 = document.createElement('h3');
  h3.classList.add('book-author');
  h3.textContent = item['author'];
  div.appendChild(h3);

  let pPages = document.createElement('p');
  pPages.classList.add('book-pages');
  pPages.textContent = `# of pages: ${item['pages']}`;
  div.appendChild(pPages);

  let pRead = document.createElement('p');
  let readButton = document.createElement('input');
  pRead.classList.add('book-read');
  readButton.classList.add('readBtn');
  readButton.type = "checkbox";
     
  pRead.textContent = `Status: ${item['read']}`;
  div.appendChild(pRead);
  div.appendChild(readButton);


  //button to remove books
  let delBook = document.createElement('button');
  delBook.classList.add('delBook')
  delBook.textContent = 'Remove book'
  div.appendChild(delBook);

  container.appendChild(div);
  removeBtn()
  checkToggle()

  function checkToggle(){
    if(this.read){
      readButton.checked = true
    }
  }
}




// Get input from form and adds it to library
formSubmit.addEventListener('submit', (e) => {
  e.preventDefault();
 
  const title = formSubmit.querySelector('#title').value;
  const author = formSubmit.querySelector('#author').value;
  const pages = formSubmit.querySelector('#pages').value;
  let read = formSubmit.querySelector('#read').checked;
    
  addBookToLibrary(title, author, pages, read);

});

//test books
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295', true);
addBookToLibrary('1984', 'G. Orwell', '184', false);