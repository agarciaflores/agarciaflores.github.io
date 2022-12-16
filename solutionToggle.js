// Get references to the elements
const buttons = document.querySelectorAll('button');

// Add an event listener to the button that listens for clicks
buttons.forEach((button) => {
  const textId = button.id.replace('button', 'text');
  const text = document.getElementById(textId);
  button.addEventListener('click', () => {
    // Toggle the visibility of the text
    if (text.classList.contains('slideout')) {
      text.classList.remove('slideout');
      text.classList.add('slidein');
    } else {
      text.classList.remove('slidein');
      text.classList.add('slideout');
    }
  });
});
