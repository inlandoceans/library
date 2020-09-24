const container = document.getElementById('container'); 
const delBook = document.querySelectorAll('button.delBook')


let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book)
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295', 'Not read yet.');
addBookToLibrary('1984', 'G. Orwell', '184', 'Read.');

function displayBook(item){
  // Inserting book content into HTML
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
  pRead.classList.add('book-read');
  pRead.textContent = `Status: ${item['read']}`;
  div.appendChild(pRead);

  //button to remove books
  let delBook = document.createElement('button');
  delBook.classList.add('delBook')
  delBook.textContent = 'Remove book'
  div.appendChild(delBook);

  container.appendChild(div);
}

myLibrary.forEach(displayBook);

console.table(myLibrary)
