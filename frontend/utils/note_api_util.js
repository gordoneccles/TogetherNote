const NoteApiUtil = {
  fetchNote(id, callback) {
    $.ajax({
      url: `/api/notes/${id}`,
      method: 'GET',
      success(note) {
        callback(note);
      }
    });
  },

  pushNote(note, callback) {
    $.ajax({
      url: `/api/notes/${note.id}`,
      method: 'PATCH',
      data: { note: note },
      success(note) {
        callback(note);
      }
    });
  },

  newNote(notebookId, callback) {
    $.ajax({
      url: '/api/notes',
      method: 'POST',
      data: { note: { title: "Title Here Please", body: "", notebookId: notebookId }},
      success(note) {
        callback(note);
      }
    });
  },

  deleteNote(id, callback) {
    console.log(`API says: deleting note with id ${id}`);

    $.ajax({
      url: `/api/notes/${id}`,
      method: 'DELETE',
      success(note) {
        callback(note);
      }
    });
  }
};

module.exports = NoteApiUtil;