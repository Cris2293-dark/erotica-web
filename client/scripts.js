fetch('http://localhost:3000/api/stories')
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById('contenedor');
    data.forEach(story => {
      const div = document.createElement('div');
      div.className = 'story';
      div.innerHTML = `<h2>${story.title}</h2><p>${story.content}</p>`;
      contenedor.appendChild(div);
    });
  });
