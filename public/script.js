window.addEventListener('load', () => {
  fetch('/', {
    method: 'POST',
  }).then(res => res.json())
    .then(data => {
      setImageData(data);
  })
})

function setImageData(data){

  const imgElement = document.getElementById('nasa-image');
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  const dateElement = document.getElementById('date');
  imgElement.src = data.hdurl;
  title.innerHTML = data.title; 
  dateElement.innerHTML = data.date;
  description.innerHTML = data.explanation;
}


