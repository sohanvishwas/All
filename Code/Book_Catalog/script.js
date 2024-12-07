document.addEventListener('DOMContentLoaded', () => {
    fetchBooks();
});

function fetchBooks(query = '') {
    const apiUrl = `https://openlibrary.org/search.json?q=${query}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayBooks(data.docs);
        })
        .catch(error => {
            console.error('Error fetching books:', error);
        });
}

function searchBooks() {
    const query = document.getElementById('searchInput').value;
    fetchBooks(query);
}

function displayBooks(books) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const title = document.createElement('h2');
        title.textContent = book.title;

        const author = document.createElement('p');
        author.textContent = `Author: ${book.author_name ? book.author_name.join(', ') : 'Unknown'}`;

        const detailsButton = document.createElement('button');
        detailsButton.textContent = 'View Details';
        detailsButton.onclick = () => showBookDetails(book);

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(detailsButton);
        bookList.appendChild(bookCard);
    });
}

function showBookDetails(book) {
    const bookDetails = document.getElementById('bookDetails');
    bookDetails.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
        <p><strong>First Published:</strong> ${book.first_publish_year || 'Unknown'}</p>
        <button onclick="fetchAuthorDetails('${book.author_key ? book.author_key[0] : ''}')">View Author Details</button>
    `;
    openModal('bookModal');
}

function fetchAuthorDetails(authorKey) {
    if (!authorKey) {
        alert('Author details not available.');
        return;
    }

    const apiUrl = `https://openlibrary.org/authors/${authorKey}.json`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayAuthorDetails(data);
        })
        .catch(error => {
            console.error('Error fetching author details:', error);
        });
}

function displayAuthorDetails(author) {
    const authorDetails = document.getElementById('authorDetails');
    authorDetails.innerHTML = `
        <h2>${author.name}</h2>
        <p><strong>Birth Date:</strong> ${author.birth_date || 'Unknown'}</p>
        <p><strong>Death Date:</strong> ${author.death_date || 'Unknown'}</p>
        <p><strong>Bio:</strong> ${author.bio ? (typeof author.bio === 'string' ? author.bio : author.bio.value) : 'No bio available.'}</p>
    `;
    openModal('authorModal');
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const bookModal = document.getElementById('bookModal');
    const authorModal = document.getElementById('authorModal');
    if (event.target == bookModal) {
        closeModal('bookModal');
    } else if (event.target == authorModal) {
        closeModal('authorModal');
    }
};
