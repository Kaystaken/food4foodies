//let requestUrl = 'https://api.edamam.com/api/recipes/v2?type=any&app_id=29fea8d3&app_key=5f514c87c541768c9fc42178e830dac2&q=breakfast'
//let APP_ID = "29fea8d3"
//let API_KEY = "5f514c87c541768c9fc42178e830dac2"

let getRecipe = function (meal) {
    // formatting the api url
    let requestUrl = 'https://api.edamam.com/api/recipes/v2?type=any&app_id=29fea8d3&app_key=5f514c87c541768c9fc42178e830dac2&q=' + meal;

    // url request
    fetch(requestUrl)

        .then(function (response) {
            // request successful
            if (response.ok) {
                response.json().then(function (data) {
                    data.hits.forEach((currentRecipe) => {
                        let recipeCard = document.createElement('div');
                        recipeCard.classList.add('bg-white', 'p-4', 'shadow');
                        let img = document.createElement('img');
                        img.src = currentRecipe.recipe.image
                        recipeCard.appendChild(img);
                        let label = document.createElement('h2');
                        label.classList.add('text-xl', 'font-bold', 'mb-8');
                        label.innerHTML = currentRecipe.recipe.label;
                        recipeCard.appendChild(label);
                        let recipeUrl = document.createElement('a');
                        recipeUrl.classList.add('text-pink-500', 'hover:underline', 'font-semibold');
                        recipeUrl.href = currentRecipe.recipe.url;
                        recipeUrl.innerHTML = 'viewRecipe';
                        recipeCard.appendChild(recipeUrl);
                        document.getElementById('recipeCards').appendChild(recipeCard);
                    })
                });
                // request failed/error
            } else {
                console.log("Error: " + response.statusText);
            }
        })

        // alerts user of no response
        .catch(function (error) {
            console.log("Cannot connect to Edamam.");
        })
};



let recipeList = document.querySelector('ul')
let searchButton = document.querySelector("#breakfastSearch");
// adds event listener to button (fetchData) when clicked
searchButton.addEventListener("click", () => {
    console.log("button clicked");
    const breakfastData = getRecipe('breakfast');
})

