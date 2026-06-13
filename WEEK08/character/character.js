const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 8,
    health: 100,
    maxHealth: 100,
    image: "https://andejuli.github.io/wdd131/character_card/snortleblat.webp"
};

function renderCharacter(char) {
    document.querySelector(".image").src = char.image;
    document.querySelector(".image").alt = char.name;
    document.querySelector(".name").textContent = char.name;
    document.querySelector("#class").textContent = char.class;
    document.querySelector("#level").textContent = char.level;
    document.querySelector("#health").textContent = char.health;
}

function attacked() {
    character.health -= 10;
    if (character.health < 0) {
        character.health = 0;
    }
    renderCharacter(character);
}

function levelUp() {
    character.level++;
    character.maxHealth += 10;
    character.health = character.maxHealth;
    renderCharacter(character);
}

renderCharacter(character);

document.querySelector("#attackBtn").addEventListener("click", attacked);
document.querySelector("#levelUpBtn").addEventListener("click", levelUp);