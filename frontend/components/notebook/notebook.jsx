const React = require('react');
const SessionStore = require('../../stores/session_store');
const hashHistory = require('react-router').hashHistory;
const NotebookStore = require('../../stores/notebook_store');
const NotebookActions = require('../../actions/notebook_actions');
const NoteIndex = require('./note_index');
const NoteActions = require('../../actions/note_actions');
const Sidebar = require('./sidebar');
const Note = require('./note');
const NotebookDrawer = require('./notebook_drawer');
const TagDrawer = require('./tag_drawer');

const Notebook = React.createClass({
  componentDidMount(){
    this.id = this.props.params.id || SessionStore.currentUser().open_notebook_id;
    NotebookActions.fetchNotebook(this.id);
  },
  render () {
    return (
      <div id="notebook">
        <Sidebar />
        <NotebookDrawer />

        <TagDrawer />

        <NoteIndex />

        <Note />
      </div>
    );
  }
});

module.exports = Notebook;
