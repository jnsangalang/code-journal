/* global data */

interface FormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  photo: HTMLInputElement;
  note: HTMLTextAreaElement;
}

interface Entry {
  title: string;
  photo: string;
  note: string;
  entryId: number;
}

const $imageSubmit = document.querySelector('.image-submit');
const $photoInput = document.querySelector('.photo-input') as HTMLFormElement;

if (!$imageSubmit) throw new Error('The $imageSubmit query failed');
if (!$photoInput) throw new Error('The $photoInput query failed');

$photoInput.addEventListener('input', () => {
  if (!$imageSubmit) throw new Error('The $imageSubmit query failed');
  const eventTarget = $photoInput.value;
  $imageSubmit.setAttribute('src', eventTarget);
});

const $submit = document.querySelector('#submit');
const $formInputs = document.querySelector('#form-inputs') as HTMLFormElement;
const $title = document.querySelector('#title') as HTMLInputElement;
const $note = document.querySelector('#note') as HTMLInputElement;
const $photo = document.querySelector('#photo') as HTMLInputElement;

if (!$submit) throw new Error('The $submit query failed');
if (!$formInputs) throw new Error('The $formInputs query failed');
if (!$title) throw new Error('The $title query failed');
if (!$note) throw new Error('The $note query failed');
if (!$photo) throw new Error('The $photo query failed');

$formInputs.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const $formElements = $formInputs.elements as FormElements;
  const obj: Entry = {
    title: $formElements.title.value,
    photo: $formElements.photo.value,
    note: $formElements.note.value,
    entryId: data.nextEntryId,
  };
  const $li = document.querySelectorAll('li');
  if (!$li) throw new Error('The $li query failed');

  if (data.editing === null) {
    data.nextEntryId++;
    data.entries.unshift(obj);

    $imageSubmit.setAttribute('src', '/images/placeholder-image-square.jpg');
    if (!$ul) throw new Error('The $ul query failed');
    $ul.prepend(renderEntry(obj));
    if (data.entries.length > 0) {
      toggleNoEntries();
    }
  } else if (data.editing !== null) {
    obj.entryId = data.editing.entryId;
    for (let i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === obj.entryId) {
        data.entries[i] = obj;
      }
    }
    for (let i = 0; i < $li.length; i++) {
      const $liDataEntryId = $li[i].getAttribute('data-entry-id');
      if ($liDataEntryId === obj.entryId.toString()) {
        const $newTree = renderEntry(data.entries[i]);
        $li[i].replaceWith($newTree);
      }
    }
  }
  if (!$headerText) throw new Error('The $headerText query failed');
  $headerText.textContent = 'New Entry';
  viewSwap('entries');
  $delete?.classList.add('hidden');
  data.editing = null;
  $formInputs.reset();
});

function renderEntry(entry: Entry): HTMLLIElement {
  const $objListItem = document.createElement('li');
  $objListItem.classList.add('row');
  $objListItem.setAttribute('data-entry-id', entry.entryId.toString());

  const $columnHalfImage = document.createElement('div');
  $columnHalfImage.classList.add('column-half');

  $objListItem.append($columnHalfImage);

  const $imgUrl = document.createElement('img');
  $imgUrl.src = entry.photo;
  $imgUrl.setAttribute('alt', 'image uploaded by user');
  $imgUrl.classList.add('image-submit');

  $columnHalfImage.append($imgUrl);

  const $columnHalfText = document.createElement('div');
  $columnHalfText.classList.add('column-half');

  $objListItem.append($columnHalfText);

  const $title = document.createElement('h2');
  $title.textContent = entry.title;
  $title.classList.add('input-box');

  $columnHalfText.append($title);

  const $icon = document.createElement('i');
  $icon.setAttribute('class', 'fa-solid fa-pencil');
  $title.append($icon);

  const $note = document.createElement('p');
  $note.textContent = entry.note;
  $note.classList.add('box-notes');

  $columnHalfText.append($note);
  return $objListItem;
}

const $ul = document.querySelector('ul');
if (!$ul) throw new Error('The $ul query failed');

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < data.entries.length; i++) {
    if (data.entries[i] !== null) {
      $ul.append(renderEntry(data.entries[i]));
    }
  }
  viewSwap(data.view);
  if (data.entries.length > 0) {
    toggleNoEntries();
  }
});

const $noEntries = document.querySelector('.no-entries');

function toggleNoEntries(): void {
  if (!$noEntries) throw new Error('the $noEntries query failed');
  if ($noEntries.classList.contains('no-entries') && data.entries.length > 0) {
    $noEntries.classList.add('hidden');
  } else if (
    $noEntries.classList.contains('no-entries') &&
    data.entries.length === 0
  ) {
    $noEntries.classList.remove('hidden');
  }
}

const $view = document.querySelectorAll('.view');
if (!$view) throw new Error('The $view query failed');

function viewSwap(string: string): void {
  for (let i = 0; i < $view.length; i++) {
    const dataView = $view[i].getAttribute('data-view');
    if (dataView === string) {
      $view[i].classList.remove('hidden');
      data.view = string;
    } else {
      $view[i].classList.add('hidden');
    }
  }
}

const $headerEntry = document.querySelector('.header-entry');
if (!$headerEntry) throw new Error('The $entries query failed');

$headerEntry.addEventListener('click', () => {
  viewSwap('entries');
});

const $newButton = document.querySelector('.new-button');

if (!$newButton) throw new Error('The $newButton query failed');
$newButton.addEventListener('click', () => {
  if (!$headerText) throw new Error('The $headerText query failed');
  $headerText.textContent = 'New Entry';
  $delete?.classList.add('hidden');
  $formInputs.reset();
  viewSwap('entry-form');
});

const $headerText = document.querySelector('.header-text');
if (!$headerText) throw new Error('The $headerText query failed');

const $delete = document.querySelector('.button-delete');
if (!$delete) throw new Error('The $delete query failed');

$ul.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLElement;
  const $classIcon = $eventTarget.tagName;
  const $dataEntryId = $eventTarget
    .closest('li')
    ?.getAttribute('data-entry-id');
  if (!$dataEntryId) throw new Error('The $dataEntryId query failed');
  if ($classIcon === 'I') {
    viewSwap('entry-form');
    for (let i = 0; i < data.entries.length; i++) {
      if ($dataEntryId === data.entries[i].entryId.toString()) {
        data.editing = data.entries[i];
      }
    }
    if (!data.editing) throw new Error('The data.editing failed');
    $title.value = data.editing.title;
    $photo.value = data.editing.photo;
    $note.value = data.editing.note;
  }
  $delete.classList.remove('hidden');
  $headerText.textContent = 'Edit Entry';
});

const $openModal = document.querySelector('.open-modal');
const $dialog = document.querySelector('dialog');
const $confirm = document.querySelector('.confirm');
const $cancel = document.querySelector('.cancel');

if (!$openModal) throw new Error('The $openModal query failed');
if (!$dialog) throw new Error('The $dialog query failed');
if (!$confirm) throw new Error('The $confirm query failed');
if (!$cancel) throw new Error('The $cancel query failed');

$openModal.addEventListener('click', (event: Event) => {
  event.preventDefault();
  $dialog.showModal();
});

$cancel.addEventListener('click', () => {
  $dialog.close();
});

$confirm.addEventListener('click', () => {
  const currentId = data.editing?.entryId;

  for (let i = 0; i < data.entries.length; i++) {
    if (currentId === data.entries[i].entryId) {
      data.entries.splice(i, 1);
    }
  }
  const $li = document.querySelectorAll('li');
  if (!$li) throw new Error('The $li query failed');

  for (let i = 0; i < $li.length; i++) {
    const $liDataEntryId = $li[i].getAttribute('data-entry-id');
    if ($liDataEntryId === data.editing?.entryId.toString()) {
      $li[i].remove();
    }
  }
  if (data.entries.length === 0) {
    toggleNoEntries();
  }
  $dialog.close();
  viewSwap('entries');
});
