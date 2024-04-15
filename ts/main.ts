// /* global data */
// const $imageSubmit = document.querySelector(".image-submit");
// const $photoInput = document.querySelector(".photo-input") as HTMLFormElement;

// if (!$imageSubmit) throw new Error('The $imageSubmit query failed');
// if (!$photoInput) throw new Error('The $photoInput query failed');

// $photoInput.addEventListener('input' , (event:Event)=>{
//   // $photoUrl.textContent = $photoInput.textContent;
//   if (!$imageSubmit) throw new Error('The $imageSubmit query failed');
//      const eventTarget= $photoInput.value;
//       $imageSubmit.setAttribute('src' , eventTarget);
//   }
// )

// const $submit = document.querySelector("#submit");
// const $formInputs = document.querySelector("#form-inputs") as HTMLFormElement;
// const $title = document.querySelector("#title");
// const $note = document.querySelector("#note");
// const $photo = document.querySelector("#photo");

// if (!$submit) throw new Error('The $submit query failed');
// if (!$formInputs) throw new Error('The $formInputs query failed');
// if (!$title) throw new Error('The $title query failed');
// if (!$note) throw new Error('The $note query failed');
// if (!$photo) throw new Error('The $photo query failed');

// interface FormElements extends HTMLFormControlsCollection {
//   title: HTMLInputElement;
//   photo: HTMLInputElement;
//   note: HTMLTextAreaElement;
// }

// $formInputs.addEventListener('submit' , (event:Event) =>{
//     event.preventDefault();
//     const $formElements = $formInputs.elements as FormElements;
//     const obj = {
//       title : $formElements.title.value,
//       photo: $formElements.photo.value,
//       note: $formElements.note.value
//     }
//     let nextEntryId = 1;
//     Object.assign(obj, {entryID:nextEntryId});
//     nextEntryId++;
//     const dataArr = [];
//     dataArr.push(obj);
//     console.log('obj', obj);
//     console.log('arr', dataArr);
//     $imageSubmit.setAttribute('src', '/images/placeholder-image-square.jpg');

//     const resetForm:HTMLFormElement = <HTMLFormElement>document.getElementById('form-inputs');
//     if(resetForm){
//     resetForm.reset();
//     }

// })
