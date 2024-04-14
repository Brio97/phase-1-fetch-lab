function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((data) => renderBooks(data))
    .catch(error => console.log(error));
  
}

function renderBooks(books) {
  const bookList = document.querySelector('main');
  bookList.innerHTML = '';
  books.forEach(book => {
    const title = book.name;
    const bookItem = document.createElement('h2');
    bookItem.innerHTML = title;
    bookList.appendChild(bookItem);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
