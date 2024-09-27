let books = [];

document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('bookTitle').value;
    books.push({ title: title, available: true });
    document.getElementById('bookTitle').value = '';
    updateBookList();
});

function updateBookList() {
    const list = document.getElementById('bookList');
    list.innerHTML = '';
    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.textContent = book.title + (book.available ? '' : ' (Emprestado)');
        list.appendChild(li);
    });
}

function borrowBook() {
    const title = prompt("Qual livro você quer pegar emprestado:");
    const book = books.find(b => b.title === title && b.available);
    if (book) {
        book.available = false;
        updateBookList();
        alert("Você pegou o livro emprestado");
    } else {
        alert("Livro não encontrado ou já emprestado.");
    }
}

function returnBook() {
    const title = prompt("Título do livro para devolver:");
    const book = books.find(b => b.title === title && !b.available);
    if (book) {
        book.available = true;
        updateBookList();
        alert("Livro devolvido");
    } else {
        alert("Livro não encontrado ou já devolvido.");
    }
}
