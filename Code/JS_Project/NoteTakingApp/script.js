// Elements
const themeToggle = document.getElementById('theme-toggle');
const addNoteButton = document.getElementById('add-note');
const notesContainer = document.getElementById('notes-container');

// Theme Toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Restore Theme Preference
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

// Add Note
addNoteButton.addEventListener('click', addNewNote);

// Load Notes
document.addEventListener('DOMContentLoaded', loadNotes);

function addNewNote() {
  const note = document.createElement('div');
  note.classList.add('note');

  note.innerHTML = `
    <textarea placeholder="Start typing..."></textarea>
    <button onclick="deleteNote(this)">Delete</button>
  `;

  notesContainer.appendChild(note);
  saveNotes();
}

function deleteNote(button) {
  button.parentElement.remove();
  saveNotes();
}

function saveNotes() {
  const notes = [...document.querySelectorAll('.note textarea')].map(note => note.value);
  localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotes() {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.forEach(content => {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
      <textarea>${content}</textarea>
      <button onclick="deleteNote(this)">Delete</button>
    `;

    notesContainer.appendChild(note);
  });
}
