

window.alert("the fight has begun!")

var playerName = window.prompt("what is your robot's name ?")
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "roberto"
var enemyHealth = 50;
var enemyAttack = 12;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var fight = function () {
    window.alert("welcome to robot gladiators");
    playerAttack - enemyHealth
    console.log(playerAttack - enemyHealth)
    enemyAttack - playerHealth
    console.log(enemyAttack - playerHealth)
    console.log(playerName + "  attacked " + enemyName) + " . " + enemyName + " now has " + enemyHealth + "  health remaining "
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacked " + playerName + " . " + playerName + "  now has " + playerHealth + " health remaining ")

};



fight()