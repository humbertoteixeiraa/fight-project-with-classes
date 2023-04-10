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
    
    //ACTIONS
    
    //GETTERS
    get life() {
        return this._life
    }

    //SETTERS
    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Knight extends Character {
    //VARIABLES
    

    //CONSTRUCTIVE FUNCTION
    constructor(name) {
        super(name);

        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
    
    //ACTIONS
    
    //GETTERS
    

    //SETTERS
   
}

class Sorcerer extends Character {
    //VARIABLES
    

    //CONSTRUCTIVE FUNCTION
    constructor(name) {
        super(name);

        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;
    }
    
    //ACTIONS
    
    //GETTERS
    

    //SETTERS
   
}

class LittleMonster extends Character {
    //VARIABLES
    

    //CONSTRUCTIVE FUNCTION
    constructor(name) {
        super('Little Monster');

        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;
    }
    
    //ACTIONS
    
    //GETTERS
    

    //SETTERS
   
}

class BigMonster extends Character {
    //VARIABLES
    

    //CONSTRUCTIVE FUNCTION
    constructor(name) {
        super('Big Monster');

        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;
    }
    
    //ACTIONS
    
    //GETTERS
    

    //SETTERS
   
}

