let enemyHp = 100;

function attack() {
    enemyHp = enemyHp - 10;

    if (enemyHp < 0) {
        enemyHp = 0;
    }

    document.getElementById("enemyHp").innerHTML = enemyHp;

    if (enemyHp === 0) {
        alert("🏆 Enemy Defeated!");
    }
}
