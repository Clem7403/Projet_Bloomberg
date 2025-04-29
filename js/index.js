// fetch('https://www.dnd5eapi.co/api/monsters')
//     .then(res => res.json())
//     .then(data => {
//     data.results.forEach(monster => {
//         fetch('https://www.dnd5eapi.co' + monster.url)
//         .then(res => res.json())
//         .then(monstre=> console.log(monstre));
//     });
//     })
//     .catch(err => console.error("Erreur :", err));


fetch('https://www.dnd5eapi.co/api/monsters')
    .then(res => res.json())
    .then(data => {
    data.results.forEach(monster => {
        fetch('https://www.dnd5eapi.co' + monster.url)
        .then(res => res.json())
        .then(monstre=> afficherMonstre(monstre));
    });
    })
    .catch(err => console.error("Erreur :", err));


function afficherMonstre(monstre){
//Création d'un élément HTML pour afficher les infos
    const hero = document.createElement('div');
//Selection d'un élément du DOM par l'ID
    const card = document.getElementById("heros-feed");
    hero.classList.add("monstre-card");

hero.innerHTML = `
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



    card.appendChild(hero)
}

