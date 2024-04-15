'use strict';
/* global data */
const $imageSubmit = document.querySelector('.image-submit');
const $photoInput = document.querySelector('.photo-input');
if (!$imageSubmit) throw new Error('The $imageSubmit query failed');
if (!$photoInput) throw new Error('The $photoInput query failed');
$photoInput.addEventListener('input', (event) => {
  // $photoUrl.textContent = $photoInput.textContent;
  if (!$imageSubmit) throw new Error('The $imageSubmit query failed');
  const eventTarget = $photoInput.value;
  $imageSubmit.setAttribute('src', eventTarget);
});
