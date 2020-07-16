let addToy = false;
const toyCollection = document.getElementById('toy-collection')

url = "http://localhost:3000/toys"
fetch(url).then(response => response.json()).then(toy => renderToy(toy))

function renderToy(e){
// const likeBtn = document.querySelectorAll(".like-btn")
// console.log(likeBtn)

  for (var i = 0; i < e.length; i++ ){
      const card = document.createElement('div')
      card.className = ('card')
      card.innerHTML = `<h2>${e[i].name}</h2> <img src="${e[i].image}" alt="${e[i].name}"/><p> Amount of Likes ${e[i].likes}
      <button class='like-btn'>like</button>` 

      toyCollection.append(card)
      console.log(card)
  }

const likeBtn = document.querySelector(".like-btn")
console.log(likeBtn)
//const newLikes = likeBtn.parentElement.innerHTML + 1
console.log(newLikes)
//likeBtn.addEventListener('click', (e) {
  //let newLikes = likeBtn.parentElement.innerHTML + 1
//})
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

//function postUserInput() {
  const allInputs = document.querySelectorAll("input[type='text']")

  const submitBtn = document.querySelector("input.submit")

  const newInput = allInputs[0]
  const newToyName = allInputs[1]
 
  document.addEventListener("submit", (event) => {
    event.preventDefault();
   
   const name = event.target[0].value
   const image =  event.target[1].value
   newToy(name, image);
  })


  function newToy(name, image) {
  fetch("http://localhost:3000/toys", { 
  
    method: "POST", 
   
    body: JSON.stringify({ 
      "name": name,
      "image": image,
      "likes": 0
    }), 
      
   
    headers: { 
        "Content-type": "application/json; charset=UTF-8"
  
    } 
}) 

.then(response => response.json()) 

.then(json => renderToy());
}


// const likeBtn = document.querySelector("card.like-btn")
// console.log(likeBtn)

// function increaseToyLikes() {
//   fetch("http://localhost:3000/toys/:id", {
//     method: "Patch",

//     body: JSON.stringify({
//       //"likes": <new number>

// {
//   "Content-Type": "application/json",
//   Accept: "application/json"
// }
//   })
// }