const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const ingredientsEl = ingredients.map((item) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = item;

  return liEl;
});

console.log(ingredientsEl);

listEl.append(...ingredientsEl);
