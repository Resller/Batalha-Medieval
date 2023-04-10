class stageOne {
    constructor(area1, area2) {
        this.area1 = area1;
        this.area2 = area2;
    }

    star() {
        this.area1.querySelector('.pvp').addEventListener('click', () => {
            this.area2.querySelector('.start').innerHTML = 'Próximo'
            this.modalP1(this.area1, this.area2);
            this.clearAndFocus(this.area2);
        })
        this.area1.querySelector('.pvb').addEventListener('click', () => {
            this.area2.querySelector('.start').innerHTML = 'Iniciar Jogo'
            this.modalP1(this.area1, this.area2);
            this.clearAndFocus(this.area2);
        })
    }

    modalP1(close, open) {
        close.style.opacity = '0'
        open.style.opacity = '0'
        open.style.display = 'flex'
        setTimeout(() => {
            close.style.display = 'none'
            open.style.opacity = '1'
        }, 500)
    }
    clearAndFocus(input) {
        let areaInput = input.querySelector('.input-name')
        areaInput.focus();
        areaInput.value = ''
    }
}

class stageTwo {
    constructor(area2P1, area2P2, area3, characterList) {
        this.area2P1 = area2P1;
        this.area2P2 = area2P2;
        this.area3 = area3;
        this.characterList = characterList
    }

    starTwo() {

        this.selectionPlayer(this.area2P1);
        this.selectionPlayer(this.area2P2);
        this.showDescription(this.area2P1);
        this.showDescription(this.area2P2);

        this.Login(
            this.area2P1,
            this.area3.querySelector('.area-p1'),
            this.characterList,
            this.area3.querySelector('.area-hp-p1'),
            this.area3.querySelector('.character-p1 img'),
            this.area3.querySelector('.attack-buttons-p1'),
            this.area2P2
        )
        this.Login(
            this.area2P2,
            this.area3.querySelector('.area-p2'),
            this.characterList,
            this.area3.querySelector('.area-hp-p2'),
            this.area3.querySelector('.character-p2 img'),
            this.area3.querySelector('.attack-buttons-p2'),
            this.area3
        )
    }

    selectionPlayer(area) {
        let charactersArea = area.querySelectorAll('.selection');
        let charactersCheckArea = area.querySelectorAll('.cb');

        for(let i = 0; i < charactersArea.length; i++) {

            charactersArea[i].addEventListener('click', () => {
                let characterSelection = i;
                this.selectionCharacter(area,characterSelection);
            });

            charactersCheckArea[i].addEventListener('change', () => {
                let characterSelection = i
                this.selectionCharacter(area,characterSelection)
            })
        }
    }

    selectionCharacter(areaC, index) {
        let characters = areaC.querySelectorAll('.selection');
        let charactersCheck = areaC.querySelectorAll('.cb');

        for (let s = 0; s < characters.length; s++) {
            characters[s].style.border = 'solid 2px transparent';
            characters[s].style.boxShadow = 'none'
            charactersCheck[s].checked = false
        }

        characters[index].style.border = 'solid 2px #4D8E2B';
        characters[index].style.boxShadow = ' 0 0 10px #4D8E2B';
        charactersCheck[index].checked = true;
    }

    Login(
        areaLogin, areaName,
        characterList, areaCharacterhp, areaCharacter, areaAttack, areaNext
    ) {

        areaLogin.querySelector('.start').addEventListener('click', () => {
            let areaErro = areaLogin.querySelector('.erro-name')

            this.upDateName(areaLogin, areaName)
            this.upDateCharacter(areaLogin, characterList, areaCharacterhp, areaCharacter, areaAttack)

            if (areaErro.classList == 'erro-name erro') {
                return
            }

            this.nextArea(areaLogin, areaNext);
        })
    }

    upDateName(areaLogin, areaName) {

        let input = areaLogin.querySelector('.input-name')
        let areaErroName = areaLogin.querySelector('.erro-name')

        if (input.value == '') {
            areaErroName.innerHTML = `Informe um NikName`
            areaErroName.classList.add('erro')
            return
        }

        areaErroName.classList.remove('erro')
        areaName.querySelector('.name').innerHTML = input.value
        input.value = ''
    }
    upDateCharacter(area, characterList, areaCharacterhp, areaCharacter, areaAttack) {
        let checkBoxList = area.querySelectorAll('.cb')
        let index = -1
        let areaErro = area.querySelector('.erro-name');

        for (let i = 0; i < checkBoxList.length; i++) {
            if (checkBoxList[i].checked) {
                index = i
            }
        }

        if (index < 0) {
            areaErro.innerHTML = `Escolha um Personagem`;
            areaErro.classList.add('erro');
            return
        }

        areaCharacterhp.querySelector('.name-character').innerHTML = characterList[index].name
        areaCharacterhp.querySelector('.area-bar-life span').innerHTML = `HP ${characterList[index].life.toFixed(2)}`
        let hp = (characterList[index].life / characterList[index].maxLife) * 100
        areaCharacterhp.querySelector('.life').style.width = `${hp}%`
        areaCharacterhp.querySelector('.area-bar-manna span').innerHTML = `MANA ${characterList[index].mana.toFixed(0)}`
        let listBarMana = areaCharacterhp.querySelectorAll('.manna');

        for (let m = 0; m < characterList[index].mana; m++) {
            listBarMana[m].style.backgroundColor ='#3e8e41'
        }
        areaCharacter.src = 'assets/imagens/personagens/' + characterList[index].img

        areaAttack.querySelector('.attack-basic button').innerHTML = characterList[index].attackBasic;
        areaAttack.querySelector('.attack-hard button').innerHTML = characterList[index].attackHard;
        areaAttack.querySelector('.attack-defense button').innerHTML = characterList[index].attackDefense;
        areaAttack.querySelector('.attack-special button').innerHTML = characterList[index].attackSpecial;
    }

    nextArea(areaClose, areaOpen,) {

        areaClose.style.opacity = '0'
        areaOpen.style.opacity = '0'
        areaOpen.style.display = 'flex'

        setTimeout(() => {
            areaClose.style.display = 'none'
            areaOpen.style.opacity = '1'
        }, 500)
    }
    showDescription(area){
        area.querySelectorAll('.area-desc i').forEach((item)=>{
            item.addEventListener('mouseenter',(el)=>{
              let desc =  el.target.nextElementSibling
              desc.style.display ="flex"
            })
            item.addEventListener('mouseleave' ,(el)=>{
                let desc =  el.target.nextElementSibling
                desc.style.display ="none"
            })
        })
    }
}

let listAttackP1 = [];
let listAttackP2 = [];
let listMsg = ''
let  typer = ''
let counterP1 = 0
let counterP2 = 0

class StageGamer {
    constructor(characterList, areaGamer,characterListP2) {
        this.characterList = characterList;
        this.areaGamer = areaGamer;
        this.characterListP2 = characterListP2
    }

    starGamer() {
        let listButtonsP1 = this.areaGamer.querySelectorAll('.attack-buttons-p1 button');
        let listButtonsP2 = this.areaGamer.querySelectorAll('.attack-buttons-p2 button');
        let listMultiplier = [1,3,0,6]
        this.showDescriptionAttack();

        for (let i = 0; i < listButtonsP1.length; i++) {
            listButtonsP1[i].addEventListener('click', () => {
                this.gamerAttack(
                    this.characterList,
                    this.areaGamer.querySelectorAll('.area-checkbox-p1 .cb'),
                    listMultiplier[i],
                    listButtonsP1,
                    this.areaGamer.querySelector('.area-p1'),
                    i,
                    listAttackP1,
                    this.areaGamer.querySelector('.area-hp-p1'),
                );
                
                if (listAttackP1.length < 3 || listAttackP2.length < 3) {      
                    clearInterval(typer);
                    this.log(listMsg,50)
                    return
                }
                this.goFigth(listButtonsP1, listButtonsP2, listAttackP1, listAttackP2,'.area-hp-p1','.area-hp-p2',this.characterList,this.characterListP2);
                clearInterval(typer);
                this.log(listMsg,50)
                listAttackP1 = [];
                listAttackP2 = [];

            });
            listButtonsP2[i].addEventListener('click', () => {
                this.gamerAttack(
                    this.characterListP2,
                    this.areaGamer.querySelectorAll('.area-checkbox-p2 .cb'),
                    listMultiplier[i],
                    listButtonsP2,
                    this.areaGamer.querySelector('.area-p2'),
                    i,
                    listAttackP2,
                    this.areaGamer.querySelector('.area-hp-p2'),
                );
                
                if (listAttackP1.length < 3 || listAttackP2.length < 3) {
                    clearInterval(typer);
                    this.log(listMsg,50)
                    return
                }
                
                this.goFigth(listButtonsP1, listButtonsP2, listAttackP1, listAttackP2,'.area-hp-p1','.area-hp-p2',this.characterList,this.characterListP2);
                clearInterval(typer);
                this.log(listMsg,50)
                listAttackP1 = [];
                listAttackP2 = [];
            });
        }
    }

    gamerAttack(characterList,area, indexMultiplier, listButtons, areaWinner, attackCouple, listAttack,areaHp) {
        let listChecked = area;
        let namePlayer = areaWinner.querySelector('.name').innerText
        let characterIndex = ''
        let couple = ''
        let manaAttack = ''
        let areamana = areaHp

        for (let i = 0; i < listChecked.length; i++) {
            if (listChecked[i].checked) {
                characterIndex = i
            }
        }
       
        let manaQt = characterList[characterIndex].mana
       
        switch (attackCouple) {
            case 0:
                couple = characterList[characterIndex].attackBasic
                manaAttack = 1
                break
            case 1:
                couple = characterList[characterIndex].attackHard
                manaAttack = 2
                break
            case 2:
                couple = characterList[characterIndex].attackDefense
                manaAttack = 0
                break
            case 3:
                couple = characterList[characterIndex].attackSpecial
                manaAttack = 4
                break
        }
       
        if(characterList[characterIndex].life <= 0){
            this.listMessages(`${characterList[characterIndex].name} Está derrotado e não pode atacar             `,)
           
            return
        }

        if(manaQt < manaAttack){
            this.listMessages(`${characterList[characterIndex].name} Sua quantidade de MANA insuficiente para o Ataque                `)
           
            return
        }
    
        this.manaRemove( manaAttack,characterIndex,areamana,characterList)
        
        let multiplier = ''
        let multiplierDefense = ''
        
        if(manaAttack === 0){
            multiplier = (Math.random() * 0).toFixed(2)
            multiplierDefense = (Math.random() * 4).toFixed(2);

        } else{
            multiplier = (Math.random() * indexMultiplier).toFixed(2)
            multiplierDefense = (Math.random() * 1.5).toFixed(2)
        }               
        
        

        let damagePower = (characterList[characterIndex].attack * multiplier).toFixed(2)
        let denfensePower = (characterList[characterIndex].defense * multiplierDefense).toFixed(2)
        let speed = (characterList[characterIndex].speed * multiplier).toFixed(2)

        if(manaAttack === 0){
            this.listMessages(`${namePlayer} com ${characterList[characterIndex].name} Usou a Defesa ${couple} !!!   `)

        } else{
            this.listMessages(`${namePlayer} Atacou com ${characterList[characterIndex].name} Usando ${couple} !!!     `)
        }
        
        listAttack.push(damagePower)
        listAttack.push(denfensePower)
        listAttack.push(speed)
        listAttack.push(namePlayer)
        listAttack.push(characterIndex)
        listAttack.push(couple)

        for (let b = 0; b < listButtons.length; b++) {
            listButtons[b].disabled = true;
        }
      
    }
    goFigth(listButtons01, listButtons02, listAttack01, listAttack02,areaHp01,areaHp02,characterListp1,characterListp2) {
        
        if(listAttack01[0] == 0 && listAttack02[0] == 0){
            this.upDateHP(listAttack01[4], document.querySelector(areaHp01),document.querySelector(areaHp02),characterListp1,characterListp2[listAttack02[4]])
            this.upDateHP(listAttack02[4], document.querySelector(areaHp02),document.querySelector(areaHp01),characterListp2,characterListp1[listAttack01[4]])
            this.listMessages(` Os Dois Lutadores usaram a Defesa e ganharam +1 de Mana                           `)
            this.listMessages(` Proxima Rodada                  `)
               
            for (let f = 0; f < listButtons01.length; f++) {
                listButtons01[f].disabled = false;
                listButtons02[f].disabled = false;
            }
            return
        }      

        if (listAttack01[2] > listAttack02[2]) {
            this.listMessages(`${listAttack01[3]} Atacou com ${characterListp1[listAttack01[4]].name} e foi mais Rápido               `)
            this.attackGO(listAttack01[0], listAttack02[1], listAttack01[4], listAttack02[4], listAttack01[3], listAttack01[5],characterListp1,characterListp2  )

            this.upDateHP(listAttack02[4], document.querySelector(areaHp02),document.querySelector(areaHp01),characterListp2,characterListp1[listAttack01[4]])
            
            if(characterListp2[listAttack02[4]].life <= 0){
                this.counterWinner(document.querySelector('.area-p1'),counterP1);
                for (let f = 0; f < listButtons01.length; f++) {
                    listButtons01[f].disabled = true;
                    listButtons02[f].disabled = true;
                }


                return
            }
            
            this.attackGO(listAttack02[0], listAttack01[1], listAttack02[4], listAttack01[4], listAttack02[3], listAttack02[5],characterListp2,characterListp1)
            this.upDateHP(listAttack01[4], document.querySelector(areaHp01),document.querySelector(areaHp02),characterListp1,characterListp2[listAttack02[4]])
            
            if(characterListp1[listAttack01[4]].life <= 0){
                this.counterWinner(document.querySelector('.area-p2'),counterP2);
              for (let f = 0; f < listButtons01.length; f++) {
                listButtons01[f].disabled = true;
                listButtons02[f].disabled = true;
              }
              return
            }
        } else {
            this.listMessages(`${listAttack02[3]} Atacou com ${characterListp2[listAttack02[4]].name} e foi mais Rápido              `         )
            this.attackGO(listAttack02[0], listAttack01[1], listAttack02[4], listAttack01[4], listAttack02[3], listAttack02[5],characterListp2,characterListp1)
            this.upDateHP(listAttack01[4], document.querySelector(areaHp01),document.querySelector(areaHp02),characterListp1,characterListp2[listAttack02[4]])
            
            if(characterListp1[listAttack01[4]].life <= 0){
                this.counterWinner(document.querySelector('.area-p2'),counterP2);
                for (let f = 0; f < listButtons01.length; f++) {
                    listButtons01[f].disabled = true;
                    listButtons02[f].disabled = true;
                }
                return
            }
            
            this.attackGO(listAttack01[0], listAttack02[1], listAttack01[4], listAttack02[4], listAttack01[3], listAttack01[5],characterListp1,characterListp2  )
            this.upDateHP(listAttack02[4], document.querySelector(areaHp02),document.querySelector(areaHp01),characterListp2,characterListp1[listAttack01[4]])
       
            if(characterListp2[listAttack02[4]].life <= 0){
                this.counterWinner(document.querySelector('.area-p1'),counterP1);
                for (let f = 0; f < listButtons01.length; f++) {
                    listButtons01[f].disabled = true;
                    listButtons02[f].disabled = true;
                    
                }
                return
            }
       
        }
        for (let f = 0; f < listButtons01.length; f++) {
            listButtons01[f].disabled = false;
            listButtons02[f].disabled = false;
        }
        this.listMessages(` Os Dois lutadores Ganharam +1 de Mana               `)
        this.listMessages(` Proxima Rodada                   `)
    }

    attackGO(powerAttack0, defense, characterIndexp01, characterIndexp02, name, couple, characterList001,characterList002) {
        if(powerAttack0 == 0){
            return
        }
        
        if (powerAttack0 > defense) {
            characterList002[characterIndexp02].life -= powerAttack0
            this.listMessages(`${name} Atacou com ${characterList001[characterIndexp01].name} Usando ${couple} e causo ${powerAttack0} Dano!!!                             `)
            
        } else {
            this.listMessages(`${name} Atacou com ${characterList001[characterIndexp01].name} Usando ${couple}. Más ${characterList002[characterIndexp02].name} conseguiu Defende                     `)
            
        }

    }

    upDateHP(characterIndex, areaHp,areaMana,characterB,characterMana) {
      
        characterMana.mana += 1
      
        
        if( characterB[characterIndex].life <= 0){
            characterB[characterIndex].life = 0
            this.manaRemove( characterB[characterIndex].mana,characterIndex,areaHp,characterB)
            this.listMessages(`${characterB[characterIndex].name} Está Derrotado               `)
            
        }
       
        areaHp.querySelector('.area-bar-life span').innerHTML = `HP ${characterB[characterIndex].life.toFixed(2)}`;
        let hp = (characterB[characterIndex].life / characterB[characterIndex].maxLife) * 100;
        areaHp.querySelector('.life').style.width = `${hp}%`;
      
        if( characterMana.mana >= 4){
           
            characterMana.mana = 4
        }
       
        
        areaMana.querySelector('.area-bar-manna span').innerHTML = `MANA ${characterMana.mana.toFixed(0)}`;
        let listBarMana = areaMana.querySelectorAll('.manna');
        
     
        for (let m = 0; m < characterMana.mana; m++) {
           listBarMana[m].style.backgroundColor ='#3e8e41';
        };
    }
    manaRemove(mana,characterIndex,areaHp,characterList){
        
        characterList[characterIndex].mana -= mana;
        
        if( characterList[characterIndex].mana >= 4){
    
           characterList[characterIndex].mana = 4
        }
       
        areaHp.querySelector('.area-bar-manna span').innerHTML = `MANA ${characterList[characterIndex].mana.toFixed(0)}`;
        let listBarMana = areaHp.querySelectorAll('.manna');

        for(let i = 0; i < listBarMana.length;i++ ){
            listBarMana[i].style.backgroundColor ='transparent'
           
        };

        for(let c = 0; c < characterList[characterIndex].mana;c++ ){
            
            listBarMana[c].style.backgroundColor ='#3e8e41'
        }
    }

    listMessages(msg){
        listMsg += '*'+msg
         
        
    }
    log(list,interval){
        listMsg = ''
        let areaLog = document.querySelector('.area-log .info');
        let next =''
      
       let newListMsg = list.split('')
    
        typer = setInterval(()=>{
       
        if(!newListMsg.length){
            clearInterval(typer);
            return
        }
        if(!newListMsg[0].length){
            newListMsg.shift();
          
        }
            next = newListMsg.shift();
            if(next == '*'){
                areaLog.innerHTML = ''
            }else{
                areaLog.innerHTML += next
            }
            
        },interval)
             
    }
    counterWinner(area,counter){
        counter++;
        area.querySelector('.number').innerHTML = counter;
    }
    showDescriptionAttack(){ 
       this.areaGamer.querySelectorAll('.info-desc-control').forEach((item)=>{
            item.addEventListener('mouseenter',(el)=>{
                let desc =  el.target.nextElementSibling
                desc.style.display ="flex"
            })
            item.addEventListener('mouseleave' ,(el)=>{
                let desc =  el.target.nextElementSibling
                desc.style.display ="none"
            })
        })
    }
}

class Rest {
    constructor(characterList, areaGamer,characterList02,areaLog,stageOne) {
        this.characterList = characterList;
        this.areaGamer = areaGamer;
        this.characterList02 = characterList02
        this.areaLog = areaLog
        this.stageOne = stageOne
    }
    
    restGamer(){
    let listlife = []
        
        for (let i = 0; i < this.characterList.length; i++) {
        listlife.push( this.characterList[i].life) 
        }

        document.querySelector('.new-characters').addEventListener('click',()=>{
            let listChecked01 = document.querySelectorAll('.area-checkbox-p1 .cb');
            let listChecked02 = document.querySelectorAll('.area-checkbox-p2 .cb');
            let index01 = '';
            let index02 ='';
            clearInterval(typer);
            for (let i = 0; i < listChecked01.length; i++){
                     if(listChecked01[i].checked){
                         index01 = i
                     }
                     if(listChecked02[i].checked){
                         index02 = i
                     }
            }
           let inputp1 = document.querySelector('.area-name-p1 .input-name')
           let inputp2 = document.querySelector('.area-name-p2  .input-name')
           let namep1 = document.querySelector('.area-p1 .name').innerText
           let namep2 = document.querySelector('.area-p2 .name').innerText
           
           inputp1.value = namep1
           inputp2.value = namep2
           inputp1.display = 'none'
           inputp2.display = 'none'
           
            this.stageOne.modalP1(document.querySelector('.area-gamer-3'),document.querySelector('.area-gamer-2-p1'))

            for(let l = 0; l < this.characterList.length; l++){
          
                this.characterList[l].life = listlife[l];
                this.characterList02[l].life = listlife[l];
                this.characterList[l].mana = 1;
                this.characterList02[l].mana = 1;
           }
            
           let buttons = document.querySelectorAll('.area-attack button')
           for (let b = 0; b < buttons.length;b++){
            buttons[b].disabled = false
           }

        })
    
        this.areaGamer.querySelector('.new-gamer').addEventListener('click',()=>{
          
           let listChecked01 = document.querySelectorAll('.area-checkbox-p1 .cb');
           let listChecked02 = document.querySelectorAll('.area-checkbox-p2 .cb');
           let index01 = '';
           let index02 ='';
           clearInterval(typer);
           let buttons = document.querySelectorAll('.area-attack button')
           for (let b = 0; b < buttons.length;b++){
            buttons[b].disabled = false
           }
           for (let i = 0; i < listChecked01.length; i++){
                    if(listChecked01[i].checked){
                        index01 = i
                    }
                    if(listChecked02[i].checked){
                        index02 = i
                    }
            }

            if(this.characterList[index01].life > 0 && this.characterList02[index02].life > 0){
                this.areaLog.listMessages('Nova Batalha Está disponivel somente quando um guerreiro estiver Derrotado.                  ')
                this.areaLog.listMessages('Lutem até o Fim.                  ')
                this.areaLog.log(listMsg,50)
                return
            }

            for(let l = 0; l < this.characterList.length; l++){
          
                this.characterList[l].life = listlife[l];
                this.characterList02[l].life = listlife[l];
                this.characterList[l].mana = 1;
                this.characterList02[l].mana = 1;
           }

           this.restArea(document.querySelector('.area-figth'));
           
            setTimeout(() => {
                this.upDate(document.querySelector('.area-hp-p1'),this.characterList,index01);
                this.upDate(document.querySelector('.area-hp-p2'),this.characterList02,index02);
            }, 500);

        
         this.areaLog.listMessages(' Inicie os Ataques.                  ');
         this.areaLog.log(listMsg,50);
        })
    }

    upDate(area,listCharacter,index){
    
        area.querySelector('.area-bar-life span').innerHTML = `HP ${listCharacter[index].life.toFixed(2)}`
        let hp = (listCharacter[index].life / listCharacter[index].maxLife) * 100
        area.querySelector('.life').style.width = `${hp}%`
        area.querySelector('.area-bar-manna span').innerHTML = `MANA ${listCharacter[index].mana.toFixed(0)}`
        let listBarMana = area.querySelectorAll('.manna');

        for (let t = 0; t <  listBarMana.length; t++) {
            listBarMana[t].style.backgroundColor ='transparent'
        }
        for (let m = 0; m < listCharacter[index].mana; m++) {
            listBarMana[m].style.backgroundColor ='#3e8e41'
        }
    }
    restArea(area) {
        area.style.opacity = '0'
        setTimeout(() => {
           area.style.opacity = '1'
        }, 1000)
    }
    
}


