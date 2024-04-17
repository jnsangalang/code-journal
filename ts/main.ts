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
const $title = document.querySelector('#title');
const $note = document.querySelector('#note');
const $photo = document.querySelector('#photo');

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
  data.nextEntryId++;
  data.entries.unshift(obj);

  $imageSubmit.setAttribute('src', '/images/placeholder-image-square.jpg');

  if (!$ul) throw new Error('The $ul query failed');
  $ul.prepend(renderEntry(obj));
  viewSwap('entries');

  if (data.entries.length > 0) {
    toggleNoEntries();
  }
  $formInputs.reset();
});

function renderEntry(entry: Entry): HTMLLIElement {
  const $objListItem = document.createElement('li');
  $objListItem.classList.add('row');

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
    data.entries === null
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
  viewSwap('entry-form');
});
