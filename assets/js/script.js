let magoP1 = new Mage('Super Mago','Disparo Mágico','Bola de Fogo','Escudo Mágico','Prisão Sombria');
let principeP1 = new Prince ('Príncipe','Golpe Brutal','Lança Fulminante','Escudo Aço','Espada Dourada');
let barbaroP1 = new Barbarian ('Bárbaro','Instinto Selvagem','Força Indomável','Parede de Escudos','Fúria Implacável ')
let arqueiroP1 = new Archer('Arqueiro','Flecha Rápida','Flecha Duplo','Esquiva Rápida','Chuva de flechas');

let magoP2 = new Mage('Super Mago','Disparo Mágico','Bola de Fogo','Escudo Mágico','Prisão Sombria');
let principeP2 = new Prince ('Príncipe','Golpe Brutal','Lança Fulminante','Escudo Aço','Espada Dourada');
let barbaroP2= new Barbarian ('Bárbaro','Instinto Selvagem','Força Indomável','Parede de Escudos','Fúria Implacável ')
let arqueiroP2 = new Archer('Arqueiro','Flecha Rápida','Flecha Duplo','Esquiva Rápida','Chuva de flechas');

let characterListP1 = [barbaroP1,magoP1,principeP1,arqueiroP1];
let characterListP2 = [barbaroP2,magoP2,principeP2,arqueiroP2];

let etapa1 = new stageOne(
    document.querySelector('.area-gamer-1'),
    document.querySelector('.area-gamer-2-p1'),
)
let etapa2 = new stageTwo(
    document.querySelector('.area-gamer-2-p1'),
    document.querySelector('.area-gamer-2-p2'),
    document.querySelector('.area-gamer-3'),
    characterListP1,
    characterListP2
)
let stageEnd = new StageGamer(
    characterListP1,
    document.querySelector('.area-gamer'),
    characterListP2

)
let stageRest = new Rest (
    characterListP1,
    document.querySelector('.area-gamer'),
    characterListP2,
    stageEnd,
    etapa1
)

etapa1.star()
etapa2.starTwo()
stageEnd.starGamer()
stageRest.restGamer();


 
