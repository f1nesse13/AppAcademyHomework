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
  document.querySelector('.photo-show-button').addEventListener('click', e => {
    e.preventDefault();
    const photoContainer = document.querySelector('.photo-form-container');
    photoContainer.style.display = photoContainer.style.display === 'block' ? 'none' : 'block';
  });

  const createImage = e => {
    e.preventDefault();
    const input = document.querySelector('.photo-url-input');
    const src = input.value;
    const img = document.createElement('img');
    const li = document.createElement('li');
    img.src = src;
    li.appendChild(img);
    document.querySelector('.dog-photos').appendChild(li);
    input.value = '';
  };

  document.querySelector('.photo-url-submit').addEventListener('click', createImage);
});
