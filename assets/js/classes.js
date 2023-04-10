class Character {
   life = 1;
   maxLife = 1;
   attack = 0 ;
   defense = 0;
   speed = 0;
   id = 0 ;
   mana = 1
   img = 'img.png'
    
   constructor(name,attackBasic,attackHard,attackDefense,attackSpecial){
        this.name = name
        this.attackBasic = attackBasic;
        this.attackHard = attackHard;
        this.attackDefense = attackDefense;
        this.attackSpecial = attackSpecial
    }
}

class Barbarian extends Character{
    constructor(name,attackBasic,attackHard,attackDefense,attackSpecial){
        super(name,attackBasic,attackHard,attackDefense,attackSpecial);
        this.life = 180
        this.maxLife = this.life
        this.attack = 15
        this.defense = 13
        this.speed = 9
        this.id = 0
        this.mana = 1
        this.img = 'superbarbaro.png'
    }
}
class Mage extends Character{
 
    constructor(name,attackBasic,attackHard,attackDefense,attackSpecial){
        super(name,attackBasic,attackHard,attackDefense,attackSpecial);
        this.life = 120
        this.maxLife = this.life
        this.attack = 19
        this.defense = 9
        this.speed = 12
        this.id = 1
        this.mana = 1
        this.img = 'super-mago.png'
    }
}
class Prince extends Character{
   
    constructor(name,attackBasic,attackHard,attackDefense,attackSpecial){
        super(name,attackBasic,attackHard,attackDefense,attackSpecial);
        this.life = 150
        this.maxLife = this.life
        this.attack = 17
        this.defense = 11
        this.speed = 15
        this.id = 2
        this.mana = 1
        this.img = 'principe-1.png'
    }
}
class Archer extends Character{ 
    constructor(name,attackBasic,attackHard,attackDefense,attackSpecial){
        super(name,attackBasic,attackHard,attackDefense,attackSpecial);
        this.life = 100
        this.maxLife = this.life
        this.attack = 21
        this.defense = 7
        this.speed = 17
        this.id = 3
        this.mana = 1
        this.img = 'arqueira.png'
    }
}
