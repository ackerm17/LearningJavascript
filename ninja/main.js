class Ninja{
    constructor(name){
        this.name = name
        this.health = 100
        this.speed = 3
        this.strength = 3
    }
    sayName() {
        console.log(this.name)
    }
    showStats() {
        console.log(this.name)
        console.log("health:" + this.health)
        console.log("speed:" + this.speed)
        console.log("strength:" + this.strength)
    }
    drinkSake() {
        this.health += 10
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninja{
    constructor(){
        this.wisdom = 10
    }
    speakWisdom(){
        console.log("You Only Live Once")
    }
}