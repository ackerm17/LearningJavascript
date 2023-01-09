class Card{
    constructor(name, cost){
        this.name = name
        this.cost = cost
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name,cost)
        this.power = power
        this.res = res
    }
    attack(target){
        target.res -= this.power
    }
}

class Effect extends Card{
    constructor(name, cost, raise, resilience, count){
        super(name,cost);
        this.raise = raise
        this.resilience = resilience
        this.count = count
    }
    play(target){
        if(target instanceof Unit){

            if(this.raise == true){
                if(this.resilience == true){
                    target.res += this.count
                }
                else{
                    target.power += this.count
                }
            }
            else{
                if(this.resilience == true){
                    target.res -= this.count
                }
                else{
                    target.power -= this.count
                }
            }
        }
        else{
            throw new Error("target must be a unit!");
        }
    }
}

RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
HardAlgorithm = new Effect("Hard Algorithm", 2, true, true, 3);
HardAlgorithm.play(RedBeltNinja);
BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
UnhandledPromiseRejection = new Effect("Unhandled Prome Rejection", 1, false, true, 2);
UnhandledPromiseRejection.play(RedBeltNinja);
PairProgramming = new Effect("Pair Programming", 3, true, false, 2)
PairProgramming.play(RedBeltNinja);
console.log(BlackBeltNinja.res);
RedBeltNinja.attack(BlackBeltNinja);
console.log(BlackBeltNinja.res);