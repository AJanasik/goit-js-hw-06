const categoriesList = document.getElementById("categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const header = item.querySelector("h2");
  const itemsList = item.querySelectorAll("li");

  console.log(`Category: ${header.textContent} 
  Elements: ${itemsList.length} `);
});
