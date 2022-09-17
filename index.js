//Banner that pops up on page load that has a question Y/N 
//"Do you have what it takes to be a pokemon master?!"

//adds alert box on page load.
// document.addEventListener('DOMContentLoaded', () => {
    
//    alert('A Pokémon trainer has challenged you to a battle!!')
//     }); 



let pokeArr = [];

 async function getPokemon(ranNum) {
   
   
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ranNum}`);
    let user = await response.json()
    
   
    //.then(data => { 
       { pokeInfo = user
        
        pokeData(pokeInfo);
    
    
    }
    try {(error => console.log(error))}
    catch {(console.log('Error!'))}

   
};

function getMove(pokeData) {
    ranMove = Math.floor(Math.random() * pokeData.moves.length)
        //console.log(ranMove, "this is the random moves")
            return ranMove;
            
};


    function pokeData(pokeInfo) {
        let pokeElement = 
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
         
                    // pokeArr.push(pokeElement);
                    // console.log(pokeArr[0].image);
                    // console.log(pokeElement.name);

                    // pokeArr.forEach((n) => {
                    //     printCard(n)
                    // })
                  createPokeCard(pokeElement);

                    console.log(pokeArr)

                   


        
        
        
        
       
        
        //pokeArr.forEach((poke) => {
        //pokemon's img first
        // let p1 = document.createElement('img');
        // p1.src = pokeElement.image;
        // document.querySelector('#poke-list').append(p1);
        // console.log(pokeElement.image);
       
        //pokemon's name second
        // let p2 = document.createElement('p');
        // p2.textContent =  pokeElement.name;
        // document.querySelector('#poke-list').appendChild(p2);
        //console.log(pokeElement.name)
        
        // //pokemon's HP third
        // let p3 = document.createElement('p');
        // p3.textContent = pokeElement.health;
        // document.querySelector('#poke-list').appendChild(p3);
        
         
        // pokeArr[0].moves.forEach((n) => {
                    // let moveOne = document.createElement('p')
                    // moveOne.textContent = pokeElement.moves[0]
                    // document.querySelector('#poke-list').appendChild(moveOne);

                    // let moveTwo = document.createElement('p')
                    // moveTwo.textContent = pokeElement.moves[1];
                    // document.querySelector('#poke-list').appendChild(moveTwo);
        //         }) // End of moves forEach()

            //}) // End of pokeArr forEach()
       
       
       

       
        
        // console.log(pokeInfo.moves[0].move.name)
        // console.log(pokeInfo.moves[2].move.name)
        // console.log(pokeInfo.moves[3].move.name)
        // console.log(pokeInfo.moves[4].move.name)
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
   
    function createPokeCard(pokeElement) {
       
       
        

    const poke_container = document.getElementById('poke-container');
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    
    const poke_types = pokeInfo.types.map(type => type.type.name);
	const type = main_types.find(type => poke_types.indexOf(type) > -1);
    const color = colors[type];

    pokemonEl.style.backgroundColor = color;
   
    const pokeInnerHTML = `
    <div class="img-container">
            <img src= ${pokeElement.image}
						}.png"/>
        </div>
        <div class="info">
             <h3 class="name">${pokeElement.name}</h3>
             <h4 class="health">${pokeElement.health}</h4>
             
             <h5 class="moves">${pokeElement.moves[0]}</h5>           
             <h5 class="moves">${pokeElement.moves[1]}</h5>            
            
             </div>             
    `;
    pokemonEl.innerHTML = pokeInnerHTML;

    poke_container.appendChild(pokemonEl)
           
     }
    

    


    

    function pokeButton() {
       
        const list =  document.querySelector('#btn')
       
       
        list.addEventListener('click',   () =>  { 
          
            //let maxPokemon = 3;  // Needs to be an array
           
            for (i = 0; i < 12; i++) {
                
                    ranNum = Math.floor(Math.random() * 151)
           
               
                     getPokemon(ranNum)
                   
              
                
                  
                   
                 
             
            
            }
            
            //pokeCard()
        }) // End of Event Listener
        
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




