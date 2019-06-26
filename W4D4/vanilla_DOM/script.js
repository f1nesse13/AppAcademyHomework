document.addEventListener('DOMContentLoaded', () => {
  // toggling restaurants

  const toggleLi = e => {
    const li = e.target;
    if (li.className === 'visited') {
      li.className = '';
    } else {
      li.className = 'visited';
    }
  };

  document.querySelectorAll('#restaurants li').forEach(li => {
    li.addEventListener('click', toggleLi);
  });

  // adding SF places as list items

  // --- your code here!
  document.querySelector('.favorite-submit').addEventListener('click', function(event) {
    event.preventDefault();
    const ul = document.querySelector('#sf-places');
    const input = document.querySelector('.favorite-input');
    let li = document.createElement('li');
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = '';
  });

  // adding new photos

  // --- your code here!
});
