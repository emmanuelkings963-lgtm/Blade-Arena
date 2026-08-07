let enemyHp = 100;

function attack() {
    enemyHp -= 10;

    if (enemyHp < 0) {
        enemyHp = 0;
    }

    document.getElementById("enemyHp").textContent = enemyHp;
document.getElementById("hpBar").style.width = enemyHp + "%";
   let enemy = document.querySelector(".enemy");

enemy.classList.add("enemy-hit");

setTimeout(() => {
    enemy.classList.remove("enemy-hit");
}, 300);
    if (enemyHp === 0) {
        alert("🏆 Enemy Defeated!");
document.querySelector(".enemy").style.display = "none";
    }
        
}
