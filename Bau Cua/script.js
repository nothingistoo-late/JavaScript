let diceFaces = ["🦀", "🦐", "🐟", "🍐", "🐓", "🦌"];
let bets = { "Cua": 0, "Tôm": 0, "Cá": 0, "Bầu": 0, "Gà": 0, "Nai": 0 };
let playerMoney = 100000;
let bankerMoney = 500000;

document.querySelectorAll(".bet").forEach(el => {
    el.addEventListener("click", () => {
        let animal = el.id;
        if (playerMoney <= 0)
            alert("You Have No Money");
        if (playerMoney >= 10000) {
            bets[animal] += 10000;
            playerMoney -= 10000;
            updateUI();
        }
    });
});

document.getElementById("rollButton").addEventListener("click", function () {
    let results = [
        diceFaces[Math.floor(Math.random() * diceFaces.length)],
        diceFaces[Math.floor(Math.random() * diceFaces.length)],
        diceFaces[Math.floor(Math.random() * diceFaces.length)]
    ];
    document.getElementById("dice1").innerText = results[0];
    document.getElementById("dice2").innerText = results[1];
    document.getElementById("dice3").innerText = results[2];
    calculateWinnings(results);
});

function calculateWinnings(results) {
    let winnings = 0;
    results.forEach(face => {
        for (let key in bets) {
            if (face === getAnimalEmoji(key)) {
                winnings += bets[key] * 2;
            }
        }
    });
    playerMoney += winnings;
    bankerMoney -= winnings;
    resetBets();
    checkVictory();
    alert(`Bạn ${winnings > 0 ? "thắng" : "thua hết"} ${winnings}đ!`);
}

function resetBets() {
    for (let key in bets) {
        bets[key] = 0;
    }
    updateUI();
}

function updateUI() {
    document.getElementById("playerMoney").innerText = playerMoney;
    document.getElementById("bankerMoney").innerText = bankerMoney;
    for (let key in bets) {
        document.getElementById(key).querySelector("span").innerText = bets[key] + "đ";
    }
}

function getAnimalEmoji(name) {
    return { "Cua": "🦀", "Tôm": "🦐", "Cá": "🐟", "Bầu": "🍐", "Gà": "🐓", "Nai": "🦌" }[name];
}

function checkVictory() {
    if (bankerMoney <= 0) {
        document.getElementById("victoryScreen").style.display = "flex";
    }
}