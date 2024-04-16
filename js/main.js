'use strict';
/* global data */
const $imageSubmit = document.querySelector('.image-submit');
const $photoInput = document.querySelector('.photo-input');
if (!$imageSubmit) throw new Error('The $imageSubmit query failed');
if (!$photoInput) throw new Error('The $photoInput query failed');
$photoInput.addEventListener('input', () => {
  if (!$imageSubmit) throw new Error('The $imageSubmit query failed');
  const eventTarget = $photoInput.value;
  $imageSubmit.setAttribute('src', eventTarget);
});
const $submit = document.querySelector('#submit');
const $formInputs = document.querySelector('#form-inputs');
const $title = document.querySelector('#title');
const $note = document.querySelector('#note');
const $photo = document.querySelector('#photo');
if (!$submit) throw new Error('The $submit query failed');
if (!$formInputs) throw new Error('The $formInputs query failed');
if (!$title) throw new Error('The $title query failed');
if (!$note) throw new Error('The $note query failed');
if (!$photo) throw new Error('The $photo query failed');
$formInputs.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $formInputs.elements;
  const obj = {
    title: $formElements.title.value,
    photo: $formElements.photo.value,
    note: $formElements.note.value,
    entryId: data.nextEntryId,
  };
  data.nextEntryId++;
  data.entries.unshift(obj);
  $imageSubmit.setAttribute('src', '/images/placeholder-image-square.jpg');
  $formInputs.reset();
});
