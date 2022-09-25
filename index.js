//Banner that pops up on page load that has a question Y/N 
//"Do you have what it takes to be a pokemon master?!"

//adds alert box on page load. Needs to be async for page to load first or use setTimeout? 
// document.addEventListener('DOMContentLoaded', () => {
    
//    alert('A Pokémon trainer has challenged you to a battle! Quick get your Pokémon and battle')
//     }); 





 async function getPokemon(ranNum, ranNumTwo) {
   
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ranNum}`);
    let data = await response.json()
    
       pokeInfo = data
        // console.log(pokeInfo)
        pokeData(pokeInfo)
        
        let responseTwo = await fetch(`https://pokeapi.co/api/v2/pokemon/${ranNumTwo}`);
        let dataTwo = await responseTwo.json()
        
       pokeInfoTwo = dataTwo
        //console.log(pokeInfoTwo)
        pokeDataTwo(pokeInfoTwo);
    
   
    try {(error => console.log(error))}
    catch {(error => console.log(error))}
};

// async function getPokemonTwo(ranNumTwo) { dead code. not needed to run program
    
//     let responseTwo = await fetch(`https://pokeapi.co/api/v2/pokemon/${ranNumTwo}`);
//     let dataTwo = await responseTwo.json()
    
//    pokeInfoTwo = dataTwo
//     console.log(pokeInfoTwo)
//     pokeDataTwo(pokeInfoTwo);

//     try {(error => console.log(error))}
//     catch {(error => console.log(error))}

// };

function getMove(pokeData) {
    ranMove = Math.floor(Math.random() * pokeData.moves.length)
            return ranMove;
            
};


    function pokeData(pokeInfo) {
        const pokeElement = 
        {
           id: pokeInfo.id,
           image: pokeInfo.sprites.front_default,
           name: pokeInfo.name.toUpperCase(),
           health: `HP: ${pokeInfo.stats[0].base_stat}`,
           moves: 
           [pokeInfo.moves[getMove(pokeInfo)].move.name.toUpperCase(), 
           pokeInfo.moves[getMove(pokeInfo)].move.name.toUpperCase(),
           pokeInfo.moves[getMove(pokeInfo)].move.name.toUpperCase(),
           pokeInfo.moves[getMove(pokeInfo)].move.name.toUpperCase()],
           
           };
          console.log(pokeElement.id)
                    
                  createPokeCardOne(pokeElement);
                


    }

    function pokeDataTwo(pokeInfoTwo) {
         const pokeElementTwo = 
        {
           id: pokeInfoTwo.id,
           image: pokeInfoTwo.sprites.front_default,
           name: pokeInfoTwo.name.toUpperCase(),
           health: `HP: ${pokeInfoTwo.stats[0].base_stat}`,
           moves: 
           [pokeInfoTwo.moves[getMove(pokeInfoTwo)].move.name.toUpperCase(), 
           pokeInfoTwo.moves[getMove(pokeInfoTwo)].move.name.toUpperCase(),
           pokeInfoTwo.moves[getMove(pokeInfoTwo)].move.name.toUpperCase(),
           pokeInfoTwo.moves[getMove(pokeInfoTwo)].move.name.toUpperCase()],
           
           };
           console.log(pokeElementTwo.id)
                  
                  createPokeCardTwo(pokeElementTwo);

           
    }
    
    
    const colors = {
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5'
    };

    const main_types = Object.keys(colors);
   

    
    function createPokeCardOne(pokeElement) {

        const poke_container = document.getElementById('poke-trainer 1');
        const pokemonEl = document.createElement('div');
        pokemonEl.classList.add('pokemon');
        pokemonEl.setAttribute('id',  `${pokeElement.id}`);
        pokemonEl.setAttribute('draggable', true)
        
        const poke_types = pokeInfo.types.map(type => type.type.name);
        const type = main_types.find(type => poke_types.indexOf(type) > -1);
        const color = colors[type];

        pokemonEl.style.backgroundColor = color;
        
        let pokeInnerHTML = `
        <div class="card">
        <div class="img-container">
                <img src= ${pokeElement.image}
                            }.png"/>
            </div>
            <div class="info">
                <h3 class="name">${pokeElement.name}</h3>
                <h4 class="health">${pokeElement.health}</h4>
                <h5 class="moves">${pokeElement.moves[0]}</h5>           
                <h5 class="moves">${pokeElement.moves[1]}</h5>
                <h5 class="moves">${pokeElement.moves[2]}</h5>
                <h5 class="moves">${pokeElement.moves[3]}</h5>   

                    
                </div>
                </div>`;
                mouseEvent()
                grabCard()                 
                        
  
        pokemonEl.innerHTML = pokeInnerHTML;

        poke_container.appendChild(pokemonEl)
        
     }

    function createPokeCardTwo(pokeElementTwo) {  

        const poke_container = document.getElementById('poke-trainer 2');
        const pokemonEl = document.createElement('div');
        pokemonEl.classList.add('pokemon');
        pokemonEl.setAttribute('id', `${pokeElementTwo.id}`)
        pokemonEl.setAttribute('draggable', true)
       
        const poke_types = pokeInfoTwo.types.map(type => type.type.name);
        const type = main_types.find(type => poke_types.indexOf(type) > -1);
        const color = colors[type];
    
        pokemonEl.style.backgroundColor = color;
        
        let pokeInnerHTML = `
        <div class="card">
        <div class="img-container">
                <img src= ${pokeElementTwo.image}
                            }.png"/>
            </div>
            <div class="info">
                 <h3 class="name">${pokeElementTwo.name}</h3>
                 <h4 class="health">${pokeElementTwo.health}</h4>
                 <h5 class="moves">${pokeElementTwo.moves[0]}</h5>           
                 <h5 class="moves">${pokeElementTwo.moves[1]}</h5>
                 <h5 class="moves">${pokeElementTwo.moves[2]}</h5>
                 <h5 class="moves">${pokeElementTwo.moves[3]}</h5>   
    
                       
                </div>
                </div>`;                         
                mouseEvent()
                grabCard()
       
        pokemonEl.innerHTML = pokeInnerHTML;
    
        poke_container.appendChild(pokemonEl)
       
        
         };
       
      
     function mouseEvent() {
        const pokeCard =  document.querySelectorAll('.pokemon');
        

    
                    pokeCard.forEach(card => {
                        card.addEventListener('mouseover', () =>  {
           
                            card.style.transform = 'scale(1.05)';
                     })
                        card.addEventListener('mouseout', () =>  {
                
                            card.style.transform = 'scale(1.00)';
                    });
                });  // end of forEach 
    };      
    
    function grabCard(pokeElement, pokeElementTwo) {
            const draggable = document.querySelectorAll('.pokemon')
            const container = document.querySelectorAll('.container')
            // console.log(draggable)
            draggable.forEach(draggable => {
                draggable.addEventListener('dragstart', () => {
                    draggable.classList.add('dragging')
                    console.log('drag start')
                })
                draggable.addEventListener('dragend', () => {
                    draggable.classList.remove('dragging')
                  })
            })

            container.forEach(container => {
                container.addEventListener('dragover', e => {
                    e.preventDefault()
                    console.log('drag over')
                    const draggable = document.querySelector('.dragging')
                    
                    container.appendChild(draggable)
                   
                })
                
            })
            
    }

    

    function pokeButton() {
       
        const list =  document.querySelector('#btn')
       
       
        list.addEventListener('click',   () =>  { 
          
            
           
            for (i = 0; i < 6; i++) {
                    //mouseEventCounter = i;
                    ranNum = Math.floor(Math.random() * 151) // get request fails when number is 0
                    ranNumTwo = Math.floor(Math.random() * 151) // get request fails when number is 0
                    // console.log(ranNum)
                    // console.log(ranNumTwo)
               
                     getPokemon(ranNum, ranNumTwo);  
                    //  getPokemonTwo(ranNumTwo);

            }
            
        }, {once : true}) // End of Event Listener
        
    };
    pokeButton();
   