// bottone genera una griglia quadrata
// 100 caselle con num progressivo 10x10
// utente clicca cellasi colora di azzurro e in console vedo num cella
    // select con 3 difficoltà  
    // E = 100 (10x10) - M = 81 (9x9) - H = 49 (7x7) 

    let button = document.querySelector('button');
    let difficulty = document.querySelector('select');
    let structure = document.querySelector('#section');
    let grid;
    
    // click per iniziare partita
    button.addEventListener('click', function(){
        game();
    })
    
    function game(){
        let level = parseInt(difficulty.value);
     
        let GameOver = false;
        let score = 0;
        let bombs = explosions(level);
        // se voglio vedere bombe aggiungo console.log(bombs)
        
        grid = document.createElement('div');
        grid.classList.add('grid');
    
        structure.innerHTML = "";
        structure.classList.remove('easy', 'medium', 'hard');
        structure.append(grid);
    
        for(let i = 1; i <= level; i++){
    
            let box = document.createElement('div');
            if(level == 100){
                box.classList.add('box', 'box-100');
                structure.classList.add('easy')
            } else if (level == 81){
                box.classList.add('box', 'box-81');
                structure.classList.add('medium')
            } else{
                box.classList.add('box', 'box-49');
                structure.classList.add('hard')
            }
            box.innerText = i;
    
            document.querySelector('.grid').append(box);
    
            box.addEventListener('click', function(){
                console.log(i);
                if(!GameOver){
                    if (!bombs.includes(i)){
                        this.classList.add('played');
                        score++;
                    } else {
                        this.classList.add('bomb');
                        this.innerHTML = `<i class="fa-solid fa-bomb"></i>`;
                        GameOver = true;
                        scoreBox = document.createElement('div2');
                        document.querySelector('.grid').append(scoreBox);
                        scoreBox.classList.add('score');
                        scoreBox.innerHTML = `<h2> GAME OVER</h2>` + `<h3> IL TUO PUNTEGGIO: ${score}</h3>`
                    }
                } else {
                    structure.innerHTML = '';
                }
            })
        }
    }
    // bombe
    function explosions(howHard){
        let bombsArray = []

        while( bombsArray.length < 16 ){
            let bomb = rNum( 1, howHard );
             if( !bombsArray.includes( bomb )){
                 bombsArray.push( bomb )
             }
        }
        return bombsArray
    }

function rNum( min, max ){
    return Math.floor( Math.random()  * max ) + min
}