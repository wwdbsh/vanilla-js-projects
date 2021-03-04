let search = null;
let submit = null;
let random = null;
let mealsEl = null;
let resultHeading = null;
let singleMealEl = null;

export const setVarialbe = () => {
    search = document.getElementById("search");
    submit = document.getElementById("submit");
    random = document.getElementById("random");
    mealsEl = document.getElementById("meals");
    resultHeading = document.getElementById("result-heading");
    singleMealEl = document.getElementById("single-meal");
};

export const bindEvents = () => {
    submit.addEventListener("submit", searchMeal);
    random.addEventListener("click", getRandomMeal);
    mealsEl.addEventListener("click", e => {
        const mealInfo = e.path.find(item => {
            if(item.classList){
                return item.classList.contains("meal-info");
            }else{
                return false;
            }
        });
        if(mealInfo){
            const mealID = mealInfo.getAttribute("data-mealid");
            getMealById(mealID);
        }
    });
};

const getMealById = async (mealID) => {
    const data = await (await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)).json();
    const meal = data.meals[0];
    addMealToDOM(meal);
};

const getRandomMeal = async () => {
    mealsEl.innerHTML = "";
    resultHeading.innerHTML = "";
    const data = await (await fetch("https://www.themealdb.com/api/json/v1/1/random.php")).json();
    addMealToDOM(data.meals[0]);
};

const addMealToDOM = (meal) => {
    const ingredients = [];
    for(let i = 1; i <= 20; i++){
        if(meal[`strIngredient${i}`]){
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
        }else{
            break;
        }
    }
    singleMealEl.innerHTML = `
        <div class="single-meal">
            <h1>${meal.strMeal}</h1>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
            <div class="single-meal-info">
                ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ""}
                ${meal.strArea ? `<p>${meal.strArea}</p>` : ""}
            </div>
            <div class="main">
                <p>${meal.strInstructions}</p>
                <h2>Ingredients</h2>
                <ul>
                    ${ingredients.map(ing => `<li>${ing}</li>`).join("")}
                </ul>
            </div>
        </div>
    `;
};

const searchMeal = async (e) => {
    e.preventDefault();
    
    singleMealEl.innerHTML = "";
    
    const term = search.value;
    if(term.trim()){
        const data = await (await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)).json();
        resultHeading.innerHTML = `
            <h2>Search results for '${term}':</h2>
        `;
        if(data.meals === null){
            resultHeading.innerHTML = `<p>There are no search results. Try again!</p>`;
        }else{
            mealsEl.innerHTML = data.meals.map(meal => `
                <div class="meal">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                    <div class="meal-info" data-mealID="${meal.idMeal}">
                        <h3>${meal.strMeal}</h3>
                    </div>
                </div>
            `)
            .join("");
        }
        search.value = "";
    }else{
        alert("please enter a search term");
    }

};