const fs = require("fs");

const newNote = (title, body) => {
  const notes = uploadNotes();
  notes.push({ title, body });
  fs.writeFileSync("notepad.json", JSON.stringify(notes));
};

const uploadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notepad.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const deleteNote = (title) => {
  const notes = uploadNotes();
  const remaning = notes.filter((note) => {
    return note.title !== title;
  });
  fs.writeFileSync("notepad.json", JSON.stringify(remaning));
};

const allNotes = () => {
  const notes = uploadNotes();
  notes.forEach((note) => console.log(note.title));
};

const findNote = (title) => {
  const notes = uploadNotes();
  const note = notes.find((note) => note.title === title);
  debugger;
  if (note) {
    console.log("Title ->>>", note.title);
    console.log("Body ->>>", note.body);
  } else {
    console.log("Note not found");
  }
};

module.exports = { newNote, deleteNote, allNotes, findNote };
