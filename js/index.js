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

const dropdownMenu = document.getElementById("dropdown-menu");
dropdownMenu.addEventListener('click', displayDropdownMenu)

menuContent = {
    'Accueil' : 'index.html',
    'Galerie' : 'galerie.html',
    'Jeux' : 'jeux.html'
}

isMenuDisplay = false;

function displayDropdownMenu(){
if(!isMenuDisplay){
    const dropdownDisplay = document.createElement('div')
    dropdownMenu.appendChild(dropdownDisplay);
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

