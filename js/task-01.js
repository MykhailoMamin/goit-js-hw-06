// const itemEl = document.querySelectorAll("li.item");
// console.log(`Number of categories: ${itemEl.length}`);

// const titleEl = document.querySelectorAll("h2");
// console.log(`Category: ${titleEl[0].textContent}`);

// // const categoriesEl = document.querySelector("#categories");
// // console.log(categoriesEl.children);

// const categoriesEl = document.querySelectorAll("li");
// console.log(categoriesEl);

const categoriesEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesEl.length}`);

const itemTitle = document.querySelector("h2").textContent;
const itemArrEL = document.querySelectorAll(".item ul");

itemArrEL.forEach((el) => {
  console.log(`Category: ${itemTitle}`);
  console.log(`Elements: ${el.children.length}`);
});
