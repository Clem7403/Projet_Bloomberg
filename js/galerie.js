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

//                                GALERIE
const imageContainer = document.getElementById("galerie");

function getImage(){
    fetch("https://rickandmortyapi.com/api/character/")
    .then(res=>res.json())
    .then(function(json){
        displayImage(json.results);
    })
    .catch(error=>console.error("Erreur d'affichage de l'image", error));
}

function displayImage(characters){
    characters.forEach(character => {
        const cardImages = document.createElement("div");
        cardImages.classList.add("cardImages");
        cardImages.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        `;
        imageContainer.appendChild(cardImages);
    });
};
getImage();

const mosaique = document.getElementById("mosaique");
const colonne = document.getElementById("colonne");


mosaique.addEventListener("click", function(){
    imageContainer.classList.remove("colonne");
    imageContainer.classList.add("mosaique")
})

colonne.addEventListener("click", function(){
    imageContainer.classList.remove("mosaique");
    imageContainer.classList.add("colonne");
})

const addPic = document.getElementById("addPic");

function addPicture(){
    addPic.addEventListener("click", ()=>{
        yourPic = prompt("Entrez l'URL de l'image : ");
        const picContainer = document.createElement("div");
        picContainer.classList.add("pic");
        picContainer.innerHTML=`
        <img src="${yourPic}" alt="Votre image" >
        `;
        imageContainer.appendChild(picContainer);
    })
}
addPicture();

const deletePic = document.getElementById("deletePic");

function deletePicture(){
    deletePic.addEventListener("click", ()=>{
        const deleteBtn = document.querySelector(".pic");
        deleteBtn.remove();
    });
};
deletePicture();