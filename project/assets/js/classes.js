class Character {
    //VARIABLES
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    //CONSTRUCTIVE FUNCTION
    constructor(name) {
        this.name = name;
    }
    
    //GETTERS
    get life() {
        return this._life
    }

    //SETTERS
    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Stage {
    //CONSTRUCTIVE FUNCTION
    constructor(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1; //char
        this.fighter2 = fighter2; //monster
        this.fighter1El = fighter1El; //char elements
        this.fighter2El = fighter2El; //monster elements
    }

    //ACTION
    start() {
        this.update();

        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));
    }

    update() {
        /* FIGHTER 1 */
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;

        /* FIGHTER 2 */
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`;
    }

    doAttack(attacking, attacked) {
        if(attacking.life <= 0 || attacked.life <= 0) {
            console.log(`Attacking dead dog!`);
            return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2);
        let actualAttack = attacking.attack * attackFactor;
        
        console.log(actualAttack);

        this.update();
    }

}

class Knight extends Character {
    //CONSTRUCTIVE FUNCTION
    constructor(name) {
        super(name);

        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class Sorcerer extends Character {
    //CONSTRUCTIVE FUNCTION
    constructor(name) {
        super(name);

        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;
    }
}

class LittleMonster extends Character {
    //CONSTRUCTIVE FUNCTION
    constructor(name) {
        super('Little Monster');

        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

class BigMonster extends Character {
    //CONSTRUCTIVE FUNCTION
    constructor(name) {
        super('Big Monster');

        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;
    }
}

