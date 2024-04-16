'use strict';
// /* global data */
// interface FormElements extends HTMLFormControlsCollection {
//   title: HTMLInputElement;
//   photo: HTMLInputElement;
//   note: HTMLTextAreaElement;
// }
// interface Entry {
//   title: string;
//   photo: string;
//   note: string;
//   entryId: number;
// }
// const $imageSubmit = document.querySelector('.image-submit');
// const $photoInput = document.querySelector('.photo-input') as HTMLFormElement;
// if (!$imageSubmit) throw new Error('The $imageSubmit query failed');
// if (!$photoInput) throw new Error('The $photoInput query failed');
// $photoInput.addEventListener('input', () => {
//   if (!$imageSubmit) throw new Error('The $imageSubmit query failed');
//   const eventTarget = $photoInput.value;
//   $imageSubmit.setAttribute('src', eventTarget);
// });
// const $submit = document.querySelector('#submit');
// const $formInputs = document.querySelector('#form-inputs') as HTMLFormElement;
// const $title = document.querySelector('#title');
// const $note = document.querySelector('#note');
// const $photo = document.querySelector('#photo');
// if (!$submit) throw new Error('The $submit query failed');
// if (!$formInputs) throw new Error('The $formInputs query failed');
// if (!$title) throw new Error('The $title query failed');
// if (!$note) throw new Error('The $note query failed');
// if (!$photo) throw new Error('The $photo query failed');
// $formInputs.addEventListener('submit', (event: Event) => {
//   event.preventDefault();
//   const $formElements = $formInputs.elements as FormElements;
//   const obj: Entry = {
//     title: $formElements.title.value,
//     photo: $formElements.photo.value,
//     note: $formElements.note.value,
//     entryId: data.nextEntryId,
//   };
//   data.nextEntryId++;
//   data.entries.unshift(obj);
//   $imageSubmit.setAttribute('src', '/images/placeholder-image-square.jpg');
//   $formInputs.reset();
// });
// function renderEntry(entry:Entry):HTMLLIElement{
//   const $objListItem = document.createElement("li");
//     $objListItem.classList.add('row');
//   const $columnHalfImage = document.createElement('div');
//     $columnHalfImage.classList.add("column-half");
//     $objListItem.append($columnHalfImage);
//     const $imgUrl = document.createElement("img");
//     $imgUrl.src = entry.photo;
//     $columnHalfImage.append($imgUrl);
//   const $columnHalfText = document.createElement("div");
//     $columnHalfText.classList.add("column-half");
//     const $title = document.createElement("h2");
//     $title.textContent = entry.title;
//     $columnHalfText.append($title);
//     const $note = document.createElement("p");
//     $note.textContent = entry.note;
//     $columnHalfText.append($note);
//     return $objListItem;
// }
