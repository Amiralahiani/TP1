function getDifficulty() {
    var difficulty = prompt("Choisissez une difficulté : Facile, Intermédiaire, Difficile").toLowerCase();
    switch (difficulty) {
        case "facile":
            return { maxAttempts: 10, range: 50 };
        case "intermédiaire":
        case "intermediaire":
            return { maxAttempts: 7, range: 100 };
        case "difficile":
            return { maxAttempts: 5, range: 200 };
        default:
            alert("Choix invalide ! Mode intermédiaire sélectionné par défaut.");
            return { maxAttempts: 7, range: 100 };
    }
}

function playGame(maxAttempts, range) {
    var hiddenNumber = Math.floor(Math.random() * range) + 1;
    var attempts = 0;
    var guessedCorrectly = false;

    while (attempts < maxAttempts) {
        var guess = parseInt(prompt(`Devinez un nombre entre 1 et ${range}:`));
        attempts++;

        if (isNaN(guess) || guess < 1 || guess > range) {
            alert("Entrée invalide ! Veuillez entrer un nombre dans la plage.");
        } else if (guess === hiddenNumber) {
            alert(`Félicitations ! Vous avez trouvé le nombre en ${attempts} essais.`);
            guessedCorrectly = true;
            break;
        } else if (guess < hiddenNumber) {
            alert("Trop bas ! Essayez encore.");
        } else {
            alert("Trop haut ! Essayez encore.");
        }
    }

    if (!guessedCorrectly) {
        alert(`Game Over ! Le bon nombre était ${hiddenNumber}.`);
    }
}

function startGame() {
    alert("Bienvenue dans le Jeu du Chiffre Caché !");
    var settings = getDifficulty();
    playGame(settings.maxAttempts, settings.range);
    if (confirm("Voulez-vous rejouer ?")) {
        startGame();
    }
}

// Lancement automatique du jeu au chargement de la page
startGame();