const btn = document.getElementById('fetch');
const list = document.getElementById('list');

const fetchPost = () => {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(posts => {
      posts.forEach(post => {
        const card = document.createElement('div');
        const li = document.createElement('p');
        const img = document.createElement('img');
        const price = document.createElement('p')
        li.innerText = post.title;
        img.src = post.image;
        card.appendChild(li);
        card.appendChild(img);
        list.appendChild(card);
        card.classList.add('list1');
      });
    });
};

fetchPost();
