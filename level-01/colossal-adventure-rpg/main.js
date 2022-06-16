
const readline = require('readline-sync')
let isAlive = true;

// 1. Console must greet player with a fun message
console.log(`Welcome to Colossal Adventure RPG!`)

// 2. Console must ask for the player's name and store it
const name = readline.question('What is your name? \n')
class Hero{
    constructor(name, health, attack, inventory){
        this.name = name
        this.health = health
        this.attack = attack
        this.inventory = ['Knuckle-Sandwich', ]
    }
}

const player = new Hero(name, 200, 50, 'fist')

class Enemy {
    constructor(name, weapon, health, attack){
        this.name = name;
        this.weapon = weapon;
        this.health = health;
        this.attack = attack;
    }
}

const killMonger = new Enemy("Kill-Monger", " Black Panther Suit", 50, 50)
const thanos = new Enemy("Thanos", " Gauntlet", 75, 50)
const darthMaul = new Enemy("Darth Maul", " Double Sided Light-Saber", 50, 25)
const enemies = [darthMaul, killMonger, thanos]

// - Use a while loop to control this flow.
while(isAlive){
    const action = readline.keyIn('\nWould you like to [w] Walk, \n[p] Print Inventory, \nor [q] Quit? \n', {limit: 'wqp'})
// - The console will ask the user to enter a "w" to walk
    if (action === 'w'){
        walk()
    } else if (action === 'p'){
        printInventory()
    } else if (action === 'q'){
       isAlive = false
       console.log('\nYou quit the game \n') 
    }
}

// 3. Walking:
// - Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
function walk(){
    const random = Math.floor(Math.random()*4)
    if(random === 0){
        enemyEncounter()
    } else if (random === 1,2,3){
        console.log('\nYou walk safely \n')
    } else{
        console.log('error')
    }
}

// 1. Inventory
// - If the user enters 'Print' or 'p' in the console, the console will print the players name, health, and each item in their inventory
function printInventory(){
    console.log(`\nHealth: ${player.health} \nInventory: ${player.inventory}`)
}

// - If running, there will be a 50% chance of escaping
function flight(){
    const escape = Math.floor(Math.random() *2)
        if (escape === 0){
        console.log(`you escaped from ${enemy.name} successfully`)
        walk()
        } else {
        console.log(`you did not escape ${enemy.name}.`)
        fight()
    }
}

// 1. If a wild enemy appears:
function enemyEncounter(){
    // - The enemy is random (can be chosen out of a minimum of 3 different enemy names)
    const random = Math.floor(Math.random() * enemies.length)
    const enemy = enemies[random]

    // - The user can decide to attack or run
    const fightOrFlight = readline.keyIn(`\nYou've encountered ${enemy.name}. \nPress [a] to attack. \nPress [r] to run \n`, {limit: 'ar'})
    
    if (fightOrFlight === 'r'){
        flight()
    } else if (fightOrFlight === 'a'){
        fight(enemies[random])
    } else if (fightOrFlight !== 'a' || fightOrFlight !== 'r'){
        console.log('your entry is invalid. Try again')
    }
}

    
function fight(enemy){
    combatEngaged = true
    console.log(`\nYou attacked ${enemy.name}`);
        // - If attacking, a random amount of damage will be delt between a min and max
    while (combatEngaged === true){
        let attackEnemy = Math.floor(Math.random() * enemy.health);
        enemy.health = enemy.health -attackEnemy -1
        console.log(`${enemy.name} now has ${enemy.health} health left` )


        // IF THE ENEMY IS KILLED BY PLAYER
        if (enemy.health <= 0){
            let victoryHealth = Math.floor(Math.random() *40)
            player.health = player.health + victoryHealth
            player.inventory = player.inventory + enemy.weapon
            // - If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory. After this, the player will continue walking.
            const victoryMessage = readline.keyIn(`\nCongratulations! You defeated ${enemy.name}. \
            \nYou've been rewarded ${victoryHealth} Health Points. \n${enemy.weapon} from ${enemy.name} has been stashed in your inventory.\ 
            \n \nPress [w] to continue your jorney \
            \nPress [p] to view your inventory and health \nPress [q] to quit `, {limit:`wpq`})

                if (victoryMessage === 'p'){
                    printInventory()
                } else if (victoryMessage === `w`){
                    walk()
                } else if (victoryMessage === 'q'){
                    isAlive = false
                    console.log('\nYou quit the game \n') 
                }                
            break;
        }
        
        // - After the player attacks or runs the enemy attacks back for a random damage amount
        let defend = Math.floor(Math.random() * player.health);
        player.health = player.health -defend -1
        console.log(`\n${enemy.name} delt ${defend} damage. \nYou now have ${player.health} health remaining`);

        // IF THE PLAYER IS KILLED BY THE ENEMY
        if (player.health <= 0){
            combatEngaged = false
            console.log(`${enemy.name} defeated you. Better luck next time, ${player.name}.`)
            isAlive = false
            break;
        }

        // - The player and enemy will attack each other in a loop until one of them passes out or dies.
        runOrFight = readline.keyIn(`\nPress [a] to attack ${enemy.name}.\nOr press [r] to run away`)
        if(runOrFight === 'a'){
            fight()
        } else if (runOrFight === 'r'){
            flight()
        }
        break;
    }
} 


