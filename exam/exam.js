
// PRACTICAL EXAM ===>

let recipes = [];

// Load recipes from localStorage
function loadRecipes() {
    let data = localStorage.getItem('recipes');
    recipes = data ? JSON.parse(data) : [];
}

// Save recipes to localStorage
function saveRecipes() {
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

function renderCuisineOptions() {
    let cuisines = [...new Set(recipes.map(r => r.cuisine))];
    let filterCuisine = document.getElementById('filter-cuisine');
    filterCuisine.innerHTML = '<option value="">All Cuisines</option>';
    cuisines.forEach(cuisine => {
        let opt = document.createElement('option');
        opt.value = cuisine;
        opt.textContent = cuisine;
        filterCuisine.appendChild(opt);
    });
}

function renderRecipes(list = recipes) {
    let ul = document.getElementById('recipe-list');
    ul.innerHTML = '';
    if (list.length === 0) {
        ul.innerHTML = '<li>No recipes found.</li>';
        return;
    }
    list.forEach((recipe, idx) => {
        let li = document.createElement('li');
        li.className = 'recipe-item';
        li.innerHTML = `
            <span class="recipe-title">${recipe.name}</span>
            <div class="recipe-meta">
                Cuisine: ${recipe.cuisine} | Time: ${recipe.time} min | Diet: ${recipe.diet}
            </div>
            <div>Ingredients: ${recipe.ingredients.join(', ')}</div>
            <button class="edit-btn" data-idx="${idx}">Edit</button>
            <button class="delete-btn" data-idx="${idx}">Delete</button>
        `;
        ul.appendChild(li);
    });

    // Attach event listeners for edit and delete
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.onclick = function() {
            let idx = this.getAttribute('data-idx');
            recipes.splice(idx, 1);
            saveRecipes();
            renderCuisineOptions();
            filterRecipes();
        };
    });

    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.onclick = function() {
            let idx = this.getAttribute('data-idx');
            let recipe = recipes[idx];
            document.getElementById('name').value = recipe.name;
            document.getElementById('cuisine').value = recipe.cuisine;
            document.getElementById('ingredients').value = recipe.ingredients.join(', ');
            document.getElementById('time').value = recipe.time;
            document.getElementById('diet').value = recipe.diet;
            // Remove the old recipe after loading for edit
            recipes.splice(idx, 1);
            saveRecipes();
            renderCuisineOptions();
            filterRecipes();
        };
    });
}

function filterRecipes() {
    let search = document.getElementById('search').value.toLowerCase();
    let cuisine = document.getElementById('filter-cuisine').value;
    let diet = document.getElementById('filter-diet').value;
    let maxTime = document.getElementById('filter-time').value;

    let filtered = recipes.filter(r => {
        let matchesSearch = r.name.toLowerCase().includes(search) ||
            r.ingredients.some(ing => ing.toLowerCase().includes(search));
        let matchesCuisine = !cuisine || r.cuisine === cuisine;
        let matchesDiet = !diet || r.diet === diet;
        let matchesTime = !maxTime || r.time <= parseInt(maxTime, 10);
        return matchesSearch && matchesCuisine && matchesDiet && matchesTime;
    });
    renderRecipes(filtered);
}

document.getElementById('recipe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value.trim();
    let cuisine = document.getElementById('cuisine').value.trim();
    let ingredients = document.getElementById('ingredients').value.split(',').map(i => i.trim()).filter(i => i);
    let time = parseInt(document.getElementById('time').value, 10);
    let diet = document.getElementById('diet').value || 'none';

    if (!name || !cuisine || ingredients.length === 0 || isNaN(time)) return;

    recipes.push({ name, cuisine, ingredients, time, diet });
    saveRecipes();
    renderCuisineOptions();
    filterRecipes();
    this.reset();
});

document.getElementById('search').addEventListener('input', filterRecipes);
document.getElementById('filter-cuisine').addEventListener('change', filterRecipes);
document.getElementById('filter-diet').addEventListener('change', filterRecipes);
document.getElementById('filter-time').addEventListener('input', filterRecipes);
document.getElementById('clear-filters').addEventListener('click', function() {
    document.getElementById('search').value = '';
    document.getElementById('filter-cuisine').value = '';
    document.getElementById('filter-diet').value = '';
    document.getElementById('filter-time').value = '';
    filterRecipes();
});

// Initialize from localStorage
loadRecipes();
renderCuisineOptions();
renderRecipes(recipes);


