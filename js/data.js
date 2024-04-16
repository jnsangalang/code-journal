'use strict';
let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};
window.addEventListener('beforeunload', () => {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('Data', dataJSON);
});
const previousDataJSON = localStorage.getItem('Data');
if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}
