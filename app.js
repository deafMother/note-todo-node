const yargs = require('yargs');

const {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  showNote
} = require('./notes');
console.log(getNotes());

// customize yargs version
yargs.version('1.1.0');
// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note Body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: argv => {
    console.log('Title: ' + argv.title);
    console.log('Body: ' + argv.body);
    addNote(argv.title, argv.body);
  }
});

// create remove command
yargs.command({
  command: 'remove',
  describe: 'Removing a note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: argv => {
    removeNote(argv.title);
  }
});

// list the note
yargs.command({
  command: 'list',
  describe: 'List notes',
  handler: () => {
    console.log('Listing all notes!');
    listNotes();
  }
});

// reading the note
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: argv => {
    showNote(argv.title);
  }
});

yargs.parse();
