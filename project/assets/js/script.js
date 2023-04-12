//INSTANCES
let char = new Sorcerer('Humbert');
let monster = new LittleMonster();

const stage = new Stage (
    char, //fighter1
    monster, //fighter2
    document.querySelector('#char'), //fighter1El
    document.querySelector('#monster') //fighter2El
);


//TESTS
stage.start();