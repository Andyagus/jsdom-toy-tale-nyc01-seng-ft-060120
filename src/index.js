let addToy = false;
const toyCollection = document.getElementById('toy-collection')


url = "http://localhost:3000/toys"
fetch(url).then(response => response.json()).then(toy => renderToy(toy))

function renderToy(e){

  for (var i = 0; i < e.length; i++ ){
      const card = document.createElement('div')
      card.className = ('card')
      card.innerHTML = `<h2>${e[i].name}</h2> <img src="${e[i].image}" alt="${e[i].name}"/><p> Amount of Likes ${e[i].likes}
      <button class='like-btn'>like</button>` 

      toyCollection.append(card)
      console.log(card)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
