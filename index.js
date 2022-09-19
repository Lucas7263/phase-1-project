//Banner that pops up on page load that has a question Y/N 
//"Do you have what it takes to be a pokemon master?!"

//adds alert box on page load.
// document.addEventListener('DOMContentLoaded', () => {
    
//    alert('A Pokémon trainer has challenged you to a battle!!')
//     }); 





 async function getPokemon(ranNum) {
   
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ranNum}`);
    let data = await response.json()
       { pokeInfo = data
        
        pokeData(pokeInfo);
    
    
    }

   
    try {(error => console.log(error))}
    catch {(console.log('Error!'))}
};

async function getPokemonTwo(ranNumTwo) {
    
    let responseTwo = await fetch(`https://pokeapi.co/api/v2/pokemon/${ranNumTwo}`);
let dataTwo = await responseTwo.json()
   { pokeInfoTwo = dataTwo
  
    pokeDataTwo(pokeInfoTwo);


}
    try {(error => console.log(error))}
    catch {(console.log('Error!'))}

}
function getMove(pokeData) {
    ranMove = Math.floor(Math.random() * pokeData.moves.length)
        //console.log(ranMove, "this is the random moves")
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
            </div>`

                //  mouseEvent()
       
  
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
                </div>`
               
                          
                            
                            
            
                    // mouseEvent()
                   
        
       
        pokemonEl.innerHTML = pokeInnerHTML;
    
        poke_container.appendChild(pokemonEl)
        
         }

    //  function mouseEvent() {
       
    //     pokeCard = document.getElementById('#poke-trainer 1') returns null
      
    //     console.log(pokeCard)
    //    document.addEventListener('mouseover', (e) =>  {
    //     //    e.pokeCard.style.transform = 'scale(1.05)';
    //        e.pokeCard
          
            
            
    //     });
    //   console.log(pokeCard)
        // document.addEventListener('mouseleave', (e) =>  {
        //         e.pokeCard
        //        console.log('mouse leave')
        //    });
    // }
   
    //  }
   
    


    

    function pokeButton() {
       
        const list =  document.querySelector('#btn')
       
       
        list.addEventListener('click',   () =>  { 
          
            //let maxPokemon = 3;  // Needs to be an array
           
            for (i = 0; i < 3; i++) {
                
                    ranNum = Math.floor(Math.random() * 151);
                    ranNumTwo = Math.floor(Math.random() * 151)
                    console.log(ranNum)
                    console.log(ranNumTwo)
               
                     getPokemon(ranNum);
                     getPokemonTwo(ranNumTwo);
                     
                   
                   
              
                
                  
                   
                 
             
            
            }
            
            //pokeCard()
        }, {once : true}) // End of Event Listener
        
    }
    pokeButton();
    
            
          
            
        
       
    
    





// function darkMode() {
//     const darkLight = document.querySelector('#darkmode')
//     darkLight.classList.toggle("dark-mode").addEventListener('click')
//}


 




// CSS for dark mode 
// body {
//     padding: 25px;
//     background-color: white;
//     color: black;
//     font-size: 25px;
//   }
  
//   .dark-mode {
//     background-color: black;
//     color: white;
//   }


