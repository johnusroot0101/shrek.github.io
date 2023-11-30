// script.js

function toggleHiddenText() {
  var hiddenText = document.getElementById('hiddenText');
  if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
    hiddenText.style.display = 'block';
  } else {
    hiddenText.style.display = 'none';
  }
}
