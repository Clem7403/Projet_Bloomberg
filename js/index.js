//Création d'un élément HTML pour afficher les infos

const card = document.getElementById("heros-feed");

function fetchMonster(){
fetch('https://www.dnd5eapi.co/api/monsters')
    .then(res => res.json())
    .then(data => {
        const shuffled = data.results.sort(()=>0.5 - Math.random());
        const selected = shuffled.slice(0,10);
    selected.forEach(monster => {
        fetch('https://www.dnd5eapi.co' + monster.url)
        .then(res => res.json())
        .then(monstre=> afficherMonstre(monstre));
    });
    })
    .catch(err => console.error("Erreur :", err));
}

function afficherMonstre(monstre){
    const container = document.createElement('div');
//Selection d'un élément du DOM par l'ID

    container.classList.add("monstre-card");

container.innerHTML = `
    <h2>${monstre.name}</h2>
    <p>Type: ${monstre.type}</p>
    <p>Taille: ${monstre.size}</p>
    <div id="img-container"><img src="https://www.dnd5eapi.co${monstre.image}"/><div>
    <table>
        <thead>
            <tr>
                <th>Force</th>
                <th>Constitution</th>
                <th>Point de vie</th>
                <th>Dextérité</th>
                <th>Charisme</th>
                <th>Sagesse</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>${monstre.strength}</th>
                <th>${monstre.constitution}</th>
                <th>${monstre.hit_points}</th>
                <th>${monstre.dexterity}</th>
                <th>${monstre.charisma}</th>
                <th>${monstre.wisdom}</th>
            </tr>
        </tbody>
    </table>
    
    `;



    card.appendChild(container)
}

fetchMonster();


//bouton reroll page feed
const bouton = document.getElementById("bouton-reroll");
bouton.addEventListener('click', function() {
    card.innerHTML =``;
    fetchMonster();
})

// DropDown Menu

const dropdownMenu = document.getElementById("dropdown-menu-img");
dropdownMenu.addEventListener('click', displayDropdownMenu)

menuContent = {
    'Accueil' : 'index.html',
    'Galerie' : 'galerie.html',
    'Jeux' : 'jeux.html'
}

isMenuDisplay = false;

function displayDropdownMenu(){
if(!isMenuDisplay){
    const dropdownZone = document.getElementById("dropdown-menu")
    const dropdownDisplay = document.createElement('div')
    dropdownZone.appendChild(dropdownDisplay);
    dropdownDisplay.classList.add('dropdown-menu-display');
    for(element in menuContent){
        const menuChoice = document.createElement('div');
        menuChoice.innerHTML = `<a href="${menuContent[element]}">${element}</a>`;
        
        
        dropdownDisplay.appendChild(menuChoice);
    }
    isMenuDisplay = true;
} else {
    const dropdownDisplay = document.querySelector('.dropdown-menu-display');
    dropdownDisplay.remove();
    isMenuDisplay=false;
}
};

//                          FOMULAIRE 

const dropdownForm = document.getElementById("formulaire-img")
dropdownForm.addEventListener('click', displayForm);

isFormDisplay = false;

function displayForm(){
    if(!isFormDisplay){
        const dropFormZone = document.getElementById("drop-form");
        const dropFormDisplay = document.createElement("div");
        dropFormZone.appendChild(dropFormDisplay);
        dropFormDisplay.classList.add('drop-form-display')
        dropFormDisplay.innerHTML = `
        <form action="" method="GET" id="form">
            <label for="name">Nom du monstre : </label>
            <input type="text" id="name" name="name" required>
            <br><br>
            
            <label for="type">Choisissez le type : </label>
            <select name="type" id="type" required>
                <option value="dragon">dragon</option>
                <option value="beast">beast</option>
                <option value="fey">fey</option>
                <option value="monstrosity">monstrosity</option>
                <option value="aberration">aberration</option>
                <option value="swarm of tiny beast">swarm of Tiny beasts</option>
                <option value="humanoid">humanoid</option>
                <option value="construct">construct</option>
                <option value="giant">giant</option>
                <option value="fiend">fiend</option>
                <option value="undead">undead</option>
            </select>
            <br><br>

            <label for="taille">Choisissez la taille : </label>
            <select name="taille" id="taille" required>
                <option value="gigantic">Gigantic</option>
                <option value="huge">Huge</option>
                <option value="large">Large</option>
                <option value="medium">Medium</option>
                <option value="small">Small</option>
                <option value="tiny">Tiny</option>
            </select>
            <br><br>
            
            <label for="image">Choisissez une image à téléverser :</label><br><br>
            <input type="file" id="image"  name="image" accept="image/*"><br><br>
              

            <p>Choisissez les caractéristiques :</p>
            <label for="strength">Force</label>
            <input type="number" id="strength" name="strength" required><br>
            <label for="constitution">Constitution</label>
            <input type="number" id="constitution" name="constitution" required><br>
            <label for="hit_points">Points de vie</label>
            <input type="number" id="hit_points" name="hit_points" required><br>
            <label for="dexterity">Dextérité</label>
            <input type="number" id="dexterity" name="dexterity" required><br>
            <label for="charisma">Charisme</label>
            <input type="number" id="charisma" name="charisma" required><br>
            <label for="wisdom">Sagesse</label>
            <input type="number" id="wisdom" name="wisdom" required><br>

            <input type="submit" value="Ajouter le monstre">
        </form>
        `
        isFormDisplay = true;

        form.addEventListener('submit', function(event){
            event.preventDefault();

        const resultDiv = document.createElement("div");
        resultDiv.classList.add("addForm");
        const container = document.querySelector(".container")
        container.appendChild(resultDiv)
        const form = document.getElementById("form");
        const result = document.querySelector(".addForm");

        const formData = new FormData(form);

        const name = formData.get("name");
        const type = formData.get("type");
        const taille = formData.get("taille");
        const image = formData.get("image");
        const strength = formData.get("strength");
        const constitution = formData.get("constitution");
        const hit_points = formData.get("hit_points");
        const dexterity = formData.get("dexterity");
        const charisma = formData.get("charisma");
        const wisdom = formData.get("wisdom");

        
        
        result.innerHTML = `
            <h2>${name}</h2>
            <p>Type: ${type}</p>
            <p>Taille: ${taille}</p>
            <div id="img-container"><img src="${image}"/><div>
            <table>
                <thead>
                    <tr>
                        <th>Force</th>
                        <th>Constitution</th>
                        <th>Point de vie</th>
                        <th>Dextérité</th>
                        <th>Charisme</th>
                        <th>Sagesse</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>${strength}</th>
                        <th>${constitution}</th>
                        <th>${hit_points}</th>
                        <th>${dexterity}</th>
                        <th>${charisma}</th>
                        <th>${wisdom}</th>
                    </tr>
                </tbody>
            </table>
        `;
        const dropFormDisplay = document.querySelector(".drop-form-display");
        dropFormDisplay.remove();
        isFormDisplay = false;
    })}else{
        const dropFormDisplay = document.querySelector(".drop-form-display");
        dropFormDisplay.remove();
        isFormDisplay = false;
    }
}


