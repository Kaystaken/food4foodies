//let requestUrl = 'https://api.edamam.com/api/recipes/v2?type=any&app_id=29fea8d3&app_key=5f514c87c541768c9fc42178e830dac2&q=breakfast'
//let APP_ID = "29fea8d3"
//let API_KEY = "5f514c87c541768c9fc42178e830dac2"

let getRecipe = function (meal) {
    // save to localStorage
    localStorage.setItem('lastVisited', meal);
    // formatting the api url
    let requestUrl = 'https://api.edamam.com/api/recipes/v2?type=any&app_id=29fea8d3&app_key=5f514c87c541768c9fc42178e830dac2&q=' + meal;

    // url request
    fetch(requestUrl)

        .then(function (response) {
            // request successful
            if (response.ok) {
                response.json().then(function (data) {
                    document.getElementById('recipeCards').replaceChildren();
                    data.hits.forEach((currentRecipe) => {
                        // creating cards to display each HIT from the api
                        let recipeCard = document.createElement('div');
                        // image hit to display
                        recipeCard.classList.add('bg-white', 'p-4', 'shadow');
                        let img = document.createElement('img');
                        img.src = currentRecipe.recipe.image
                        recipeCard.appendChild(img);
                        // label hit to display
                        let label = document.createElement('h2');
                        label.classList.add('text-xl', 'font-bold', 'mb-8');
                        label.innerHTML = currentRecipe.recipe.label;
                        recipeCard.appendChild(label);
                        // link to external url (original recipe url)
                        let recipeUrl = document.createElement('a');
                        recipeUrl.classList.add('text-pink-500', 'hover:underline', 'font-semibold');
                        recipeUrl.href = currentRecipe.recipe.url;
                        recipeUrl.innerHTML = 'View Recipe';
                        recipeCard.appendChild(recipeUrl);
                        document.getElementById('recipeCards').appendChild(recipeCard);
                    })
                });
                // request failed/error logged in console
            } else {
                console.log("Error: " + response.statusText);
            }
        })

        // logs no response in console
        .catch(function (error) {
            console.log("Cannot connect to Edamam servers.");
        })
};




let getCanadian = function () {
    // save to localStorage
    localStorage.setItem('lastVisited', 'canadian');
    // 2nd api url
    let foodDbUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian'

    fetch(foodDbUrl)

        .then(function (response) {
            //request successful
            if (response.ok) {
                response.json().then(function (data) {
                    document.getElementById('recipeCards').replaceChildren();
                    //console.log(data);
                    data.meals.forEach((currentRecipe) => {
                        let recipeCard = document.createElement('div');
                        //image hit to display
                        recipeCard.classList.add('bg-white', 'p-4', 'shadow');
                        let img = document.createElement('img');
                        img.src = currentRecipe.strMealThumb;
                        recipeCard.appendChild(img);
                        //meal label to display
                        let label = document.createElement('h2');
                        label.classList.add('text-xl', 'font-bold', 'mb-8');
                        let strMeal = currentRecipe.strMeal;
                        label.innerHTML = strMeal;
                        recipeCard.appendChild(label);
                        //link to external url (original recipe url)
                        let id = currentRecipe.idMeal;
                        let mealDbUrl = 'https://themealdb.com/meal/' + id + '-' + strMeal;
                        let recipeUrl = document.createElement('a');
                        recipeUrl.classList.add('text-pink-500', 'hover:underline', 'font-semibold');
                        recipeUrl.innerHTML = 'View Recipe';
                        recipeUrl.href = mealDbUrl;
                        recipeCard.appendChild(recipeUrl);
                        document.getElementById('recipeCards').appendChild(recipeCard);
                    })
                });
                //request failed/errror logged in console
            } else {
                console.log("Error: " + response.statusText);
            }
        })

        // logs no response in console
        .catch(function (error) {
            console.log("Cannot connect to MealDB servers.");
        })
};

//loads user's last visited recipes (breakfast, lunch, dinner, canadian)
window.onload = function () {
    let lastVisited = localStorage.getItem('lastVisited');
    if (lastVisited == 'canadian') {
        getCanadian(lastVisited);
    } else if (lastVisited == 'breakfast' || lastVisited == 'lunch' || lastVisited == 'dinner') {
        getRecipe(lastVisited);
    }
};