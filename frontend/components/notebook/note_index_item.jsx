const React = require('react');
const hashHistory = require('react-router').hashHistory;
const NoteActions = require('../../actions/note_actions');

const NoteIndexItem = React.createClass({
  openNote (event) {
    NoteActions.fetchNote(this.props.note.id);
  },
  delete(event) {
    event.stopPropagation();
    NoteActions.deleteNote(this.props.note.id);
  },
  render () {
    return (
      <li className="note-index-item" onClick={this.openNote}>
        <header className="clearfix">
          <h3>{this.props.note.title}</h3>
          <button onClick={this.delete}>delete</button>
        </header>
        <div className="note-index-item-body">
          {this.props.note.body}
        </div>
      </li>
    );
  }
});

module.exports = NoteIndexItem;
