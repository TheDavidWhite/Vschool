class Player {
    constructor(name , status, totalCoins, hasStar, gameActive = true) {
        this.name = name;
        this.status = status;
        this.totalCoins = totalCoins;
        this.gameActive = gameActive;
        this.hasStar = hasStar;
    }
    setName(namePicked) {
        console.log(`Name Picked: ${namePicked}`)
        this.name = namePicked;
    }
    gotHit() {
        if (this.hasStar) {
            console.log("You used your Star power!");
            this.hasStar = false;
        } else {
            this.status = (this.status === "PowerUp") ? "Big" :
                (this.status === "Big") ? "Small" : this.endGame();
        }
    }
    gotPowerUp() {
        if (this.status === "PowerUp") this.hasStar = true;
        else if (this.status === "Big") this.status = "PowerUp";
        else this.status = "Big";
    }
    addCoin() {
        this.totalCoins++
    }

    print() {
        console.log(`\n Name: ${this.name} \n Status: ${this.status} \n Coins: ${this.totalCoins} \n StarPower: ${this.hasStar}`);
    }

    endGame() {
        this.gameActive = false;
        console.log(`\n ${this.name} Died, \n Game Over `);
        clearInterval(runTime);
    }
}


let player = new Player(0, "Big", false);
player.setName("Mario");



let runTime = setInterval(() => {
    player.print();
    let randomEvent = Math.floor((Math.random() * 3));
    console.log(`Random Event(s): ${randomEvent}`)
    if (randomEvent === 0) {
        player.gotHit();
    } else if (randomEvent === 1) {
        player.gotPowerUp();
    } else player.addCoin();
}, 1000);


