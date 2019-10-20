const fs = require('fs');
const getNotes = () => {
  return 'Your note...';
};

// add note
const addNote = function(title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(
    note => note.title === title
  );
  debugger
  if (duplicateNotes.length > 0) {
    console.log('Note already exists');
    return;
  }
  notes.push({
    title,
    body
  });
  console.log('New Note added');
  saveNotes(notes);
};

// remove note
const removeNote = function(title) {
  const notes = loadNotes();
  // check if the notes exists or not
  const duplicateNotes = notes.find(note => {
    return note.title === title;
  });
  // if note exists then remove it
  if (duplicateNotes) {
    const newNotes = notes.filter(note => {
      return note.title !== title;
    });
    console.log(newNotes);
    saveNotes(newNotes);
  } else {
    console.log('Note not present');
  }

};

// show individual notes

const showNote = function(title) {
  const notes = loadNotes();
  // check if the notes exists or not
  const duplicateNotes = notes.find(note => {
    return note.title === title;
  });
  // if note exists then show it
  if (duplicateNotes) {
    console.log('Title: ' + duplicateNotes.title);
    console.log('Body: ' + duplicateNotes.body);
  } else {
    console.log('Note not present');
  }
};

// list notes
const listNotes = () => {
  const notes = loadNotes();
  notes.forEach(note => {
    console.log(' ');
    console.log('Title: ' + note.title);
    console.log('Body: ' + note.body);
  });
};

// save notes
const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

// load the notes
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  showNote: showNote
};
