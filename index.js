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
        //console.log(pokeInfo)
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
           image: pokeInfo.sprites.front_default,
           name: pokeInfo.name.toUpperCase(),
           health: `HP: ${pokeInfo.stats[0].base_stat}`,
           moves: 
           [pokeInfo.moves[getMove(pokeInfo)].move.name.toUpperCase(), 
           pokeInfo.moves[getMove(pokeInfo)].move.name.toUpperCase(),
           pokeInfo.moves[getMove(pokeInfo)].move.name.toUpperCase(),
           pokeInfo.moves[getMove(pokeInfo)].move.name.toUpperCase()],
           
           };
          
                    
                  createPokeCardOne(pokeElement);
                


    }

    function pokeDataTwo(pokeInfoTwo) {
         const pokeElementTwo = 
        {
           image: pokeInfoTwo.sprites.front_default,
           name: pokeInfoTwo.name.toUpperCase(),
           health: `HP: ${pokeInfoTwo.stats[0].base_stat}`,
           moves: 
           [pokeInfoTwo.moves[getMove(pokeInfoTwo)].move.name.toUpperCase(), 
           pokeInfoTwo.moves[getMove(pokeInfoTwo)].move.name.toUpperCase(),
           pokeInfoTwo.moves[getMove(pokeInfoTwo)].move.name.toUpperCase(),
           pokeInfoTwo.moves[getMove(pokeInfoTwo)].move.name.toUpperCase()],
           
           };
           
                  
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
                            
  
        pokemonEl.innerHTML = pokeInnerHTML;

        poke_container.appendChild(pokemonEl)
        
     }

    function createPokeCardTwo(pokeElementTwo) {  

        const poke_container = document.getElementById('poke-trainer 2');
        const pokemonEl = document.createElement('div');
        pokemonEl.classList.add('pokemon');
        
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
                
       
        pokemonEl.innerHTML = pokeInnerHTML;
    
        poke_container.appendChild(pokemonEl)
       
        
         };
       
        //  let mouseEventCounter = 0;
     function mouseEvent() {
        const pokeCard =  document.querySelectorAll('.card');
        

    //    for (let i = 0; i < pokeCard.length; i++) {
            //    if(i = mouseEventCounter) {
                // console.log('if state working')}
                    pokeCard.forEach(card => {
                        card.addEventListener('mouseover', () =>  {
           
                            card.style.transform = 'scale(1.10)';
                     })
                        card.addEventListener('mouseout', () =>  {
                
                            card.style.transform = 'scale(1.05)';
                    });
                });  // end of forEach 
           
          
           
   
        // }  //end of for loop
    };      
    
    // function pokeScale(cardId) {
    //     let pokeCard = document.getElementsByClassName('card') 
        
    //     pokeCard[cardId].style.transform = 'scale(1.10)';
            
    // };
    
    // function pokeNormal(cardId) {
    //     let pokeCard = document.getElementsByClassName('card') 
        
    //     pokeCard[cardId].style.transform = 'scale(1.05)';
            
    // };
    
    function grabCard() {
        //add event listeners to drag and drop pokemon cards to the "battle container"
        // where they fight.

    }

    

    function pokeButton() {
       
        const list =  document.querySelector('#btn')
       
       
        list.addEventListener('click',   () =>  { 
          
            //let maxPokemon = 3;  // Needs to be an array
           
            for (i = 0; i < 6; i++) {
                    //mouseEventCounter = i;
                    ranNum = Math.floor(Math.random() * 151) // get request fails when number is 0
                    ranNumTwo = Math.floor(Math.random() * 151) // get request fails when number is 0
                    console.log(ranNum)
                    console.log(ranNumTwo)
               
                     getPokemon(ranNum, ranNumTwo);  
                    //  getPokemonTwo(ranNumTwo);

            }
            
        }, {once : true}) // End of Event Listener
        
    };
    pokeButton();
    // , {once : true}