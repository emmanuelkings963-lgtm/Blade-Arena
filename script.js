let enemyHp = 100;
let xp = 0;
let level = 1;
function attack() {
    enemyHp = enemyHp - 10;

    if (enemyHp < 0) {
        enemyHp = 0;
    }

    document.getElementById("enemyHp").innerHTML = enemyHp;

    if (enemyHp === 0) {
    xp = xp + 50;
    document.getElementById("xpText").innerHTML = xp;
    alert("🏆 Enemy Defeated!\n⭐ +50 XP");
    }
enemyHp = 100;
document.getElementById("enemyHp").innerHTML = enemyHp;
