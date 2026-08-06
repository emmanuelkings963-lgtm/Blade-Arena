let enemyHp = 100;

function attack() {
    enemyHp -= 10;

    if (enemyHp < 0) {
        enemyHp = 0;
    }

    document.getElementById("enemyHp").textContent = enemyHp;

    if (enemyHp === 0) {
        alert("🏆 Enemy Defeated!");

        enemyHp = 100;
        document.getElementById("enemyHp").textContent = enemyHp;
    }
}
