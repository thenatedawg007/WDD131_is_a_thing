let recipeContainer = document.getElementById("recipe-book");

const recipeForm = document.getElementById("recipe-form-details");

const input = document.getElementById("search-input");

const recipes = [];

recipeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const recipeData = new FormData(recipeForm);
    const recipeTitle = recipeData.get("recipe-name");
    const youtubeEmbed = recipeData.get("recipe-video");
    const recipeImage = recipeData.get("recipe-instructions");

    const imageUrl = URL.createObjectURL(recipeImage);
    
    const card = `
        <article class="recipe-box">
            <h1 class="recipe-title">${recipeTitle}</h1>
            ${youtubeEmbed}
            <img class="recipe-image" src="${imageUrl}" alt="${recipeTitle}">
        </article>
    `;
    recipes.push({recipeTitle: recipeTitle, youtubeEmbed: youtubeEmbed, imageUrl: imageUrl});
    document.getElementById("recipe-book").innerHTML += card;
});

function renderRecipe(recipe) {
    const card = `
        <article class="recipe-box">
            <h1 class="recipe-title">${recipe.recipeTitle}</h1>
            ${recipe.youtubeEmbed}
            <img class="recipe-image" src="${recipe.imageUrl}" alt="${recipe.recipeTitle}">
        </article>
    `;
  recipeContainer.innerHTML += card;
}
input.addEventListener('keypress', handleEnter);
function handleEnter(event) {
  if (event.key === 'Enter') search();
}


function search() {
  const userInput = input.value.toLowerCase();

  const filteredRecipes = userInput
    ? recipes.filter(recipe =>
        recipe.recipeTitle.toLowerCase().includes(userInput)
      )
    : recipes;

  const sortedRecipes = [...filteredRecipes];

  recipeContainer.innerHTML = '';

  if (sortedRecipes.length === 0) {
    recipeContainer.innerHTML = '<p style="color:#888;margin-top:24px;">No recipes found.</p>';
    return;
  }
    sortedRecipes.forEach(recipe => renderRecipe(recipe));
}
const modal = document.getElementById("image-modal");
const modalImage = modal.querySelector(".modal-image");
const closeBtn = modal.querySelector(".close");

// Click any image to open modal
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("recipe-image")) {
    modalImage.src = e.target.src;
    modal.classList.add("active");

    const recipeTitle = e.target.closest(".recipe-box").querySelector(".recipe-title").textContent;
    const imageUrl = e.target.src;
    
    let downloadContainer = modal.querySelector(".download-area");
    if (!downloadContainer) {
      downloadContainer = document.createElement("div");
      downloadContainer.className = "download-area";
      modal.appendChild(downloadContainer);
    }

    downloadContainer.innerHTML = `<a href="${imageUrl}" download="${recipeTitle}.jpg"><img class="download-image" src="download.png"></a>`;
  }
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  const downloadArea = modal.querySelector(".download-area");
  if (downloadArea) downloadArea.innerHTML = '';
});