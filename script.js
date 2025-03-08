let recipeTitle = document.getElementById("recipeTitle");
let recipeImg = document.getElementById("recipeImg");
let imgContainer = document.getElementById("imgContainer");
let ingredientListContainer = document.getElementById("ingredientListContainer");
let recipeObj = {
  title: "Tomato Pasta",
  imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
  ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};


recipeTitle.textContent = recipeObj.title ;

recipeImg.setAttribute("src",recipeObj.imgSrc);
recipeImg.classList.add("w-100");
imgContainer.appendChild(recipeImg);

for(let eachItem of recipeObj.ingredients){
    let list = document.createElement("li");
    list.textContent = eachItem;
    list.classList.add("ingrediants");
    ingredientListContainer.appendChild(list);
}

