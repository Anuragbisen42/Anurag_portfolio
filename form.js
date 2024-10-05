const form = document.querySelector('form'); // Ensure this is a form element
const formData = new FormData(form); // Correct usage



// Correctly select the form element
const formElement = document.querySelector('form'); // Ensure you're selecting the correct form
if (formElement) {
   const formData = new FormData(formElement);
   // Continue with form submission...
} else {
   console.error('Form element not found!');
}
