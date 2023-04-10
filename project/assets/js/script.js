//INSTANCES
let char = new Sorcerer('Humbert');
let monster = new LittleMonster();

const stage = new Stage (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);


//TESTS
stage.start();