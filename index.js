//Banner that pops up on page load that has a question Y/N 
//"Do you have what it takes to be a pokemon master?!"

// adds alert box on page load.
// document.addEventListener('DOMContentLoaded', () => {
    
//    alert('Do you have what it takes to become a pokémon master')
//     }); 




let pokeArr = [];


function loadPokeArr(pokeInfo) {
    let pokeElement = 
                     {
                        image: pokeInfo.sprites.front_default,
                        name: pokeInfo.name.toUpperCase(),
                        health: `HP: ${pokeInfo.stats[0].base_stat}`,
                        moves: [pokeInfo.moves[getMove(pokeInfo)].move.name.toUpperCase(), 
                        pokeInfo.moves[getMove(pokeInfo)].move.name.toUpperCase(),
                        pokeInfo.moves[getMove(pokeInfo)].move.name.toUpperCase(),
                        pokeInfo.moves[getMove(pokeInfo)].move.name.toUpperCase()]
                        
                                
                    }
                    
                    pokeArr.push(pokeElement)  
                    console.log(pokeArr[0].image)
                    
}
async function  getPokemon(ranNum) {
   
   
   await fetch(`https://pokeapi.co/api/v2/pokemon/${ranNum}`)
    .then(res => res.json())
    // want data that is pulled to select 6 or 12 random pokemon for players to choose from
    //.then(data => console.log(data))
    .then(data => { 
        pokeInfo = data
        let pokeElement = 
        {
           image: pokeInfo.sprites.front_default,
           name: pokeInfo.name.toUpperCase(),
           health: `HP: ${pokeInfo.stats[0].base_stat}`,
           moves: [pokeInfo.moves[getMove(pokeInfo)].move.name.toUpperCase(), 
           pokeInfo.moves[getMove(pokeInfo)].move.name.toUpperCase(),
           pokeInfo.moves[getMove(pokeInfo)].move.name.toUpperCase(),
           pokeInfo.moves[getMove(pokeInfo)].move.name.toUpperCase()]
           
                   
       }
       
    //    pArray.push(pokeElement)  
        // pokeInfo = data
        // pokeCard(pokeInfo)
        return pokeElement
    
    })
    .catch(error => console.log(error))
   
};

function getMove(pokeData) {
    ranMove = Math.floor(Math.random() * pokeData.moves.length)
        //console.log(ranMove, "this is the random moves")
            return ranMove;
            
};


    function pokeCard() {
        
        
        //console.log(pokeArr[0])
        
        
        //didn't work for adding new pokemon to the new array
        //pokeMon.forEach(getPokemon).push()
        
        //Pokemon's Data from fetch request
        
        //pokeArr.forEach((poke) => {
        //pokemon's img first
        // let p1 = document.createElement('img');
        // p1.src = pokeArr[0].image;
        // document.querySelector('#poke-container').appendChild(p1);
        // console.log(pokeArr[0].image);
       
        //pokemon's name second
        // let p2 = document.createElement('p');
        // p2.textContent =  pokeArr[0].name;
        // document.querySelector('#poke-container').appendChild(p2);
        // console.log(pokeArr[0].name)
        
        // //pokemon's HP third
        // let p3 = document.createElement('p');
        // p3.textContent = pokeArr[0].health;
        // document.querySelector('#poke-container').appendChild(p3);
        
         
        // pokeArr[0].moves.forEach((n) => {
        //             let pMove = document.createElement('p')
        //             pMove.textContent = n;
        //             document.querySelector('#poke-container').appendChild(pMove);
        //         }) // End of moves forEach()

            //}) // End of pokeArr forEach()
       
       
       

       
        
        // console.log(pokeInfo.moves[0].move.name)
        // console.log(pokeInfo.moves[2].move.name)
        // console.log(pokeInfo.moves[3].move.name)
        // console.log(pokeInfo.moves[4].move.name)
    }
       
       
    // function pokeCard1() {
       
    // }
    //    pokeCard1()
    

    

// function fetchPokemonInfo(userName) {
//     let header = document.createElement('h2')
//     header.textContent = 'poke-list'
//     document.querySelector('#poke-list').appendChild(header) 
//     fetch(pokeData)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// } 
// fetchPokemonInfo()
    

    function pokeButton() {
       
        const list =  document.querySelector('#btn')
       
        //need to use arrow function syntax to make it where the function 
        //doesn't run without btn being clicked
        list.addEventListener('click',  () => { 
            // In order for a new number to be generated each time button is clicked. 
            //ranNum variable needs to be located inside the event listener function.
            // let maxPokemon = 3;  // Needs to be an array
           
            //for (i = 0; i < maxPokemon; i++) {
                
                    ranNum = Math.floor(Math.random() * 151)
           
                pokeArr.push(getPokemon(ranNum, pokeArr));
               
                console.log(pokeArr)
                    // let pokeElement = 
        
                
                    // {
                    //     image: pokeData.sprites.front_default,
                    //     name: pokeData.name.toUpperCase(),
                    //     health: `HP: ${pokeData.stats[0].base_stat}`,
                    //     moves: [pokeData.moves[getMove(pokeData)].move.name.toUpperCase(), 
                    //            pokeData.moves[getMove(pokeData)].move.name.toUpperCase(),
                    //            pokeData.moves[getMove(pokeData)].move.name.toUpperCase(),
                    //            pokeData.moves[getMove(pokeData)].move.name.toUpperCase()]
                        
                                
                    // }
                    // pokeArr.push(pokeElement)
                   
                 
             
                 
            // }
            pokeCard()
        }) // End of Event Listener
    }
    pokeButton();
    
            
          
            
        
        // pokeArr.push(pokeElement)
        // pokeCard(pokeInfo)
    //}
    // pokeButton()
    
    





function darkMode() {
    const darkLight = document.querySelector('#darkmode')
    darkLight.classList.toggle("dark-mode").addEventListener('click')
}


//    (e) => {
//     console.log('button works')
//     e.target.getPokemon()
    
   
// })


// Tried this with fetch
//console.log(Math.floor(Math.random(data) * 151)

// First URL tried with the fetch Method. Grabs first 150 pokemon.
//'https://pokeapi.co/api/v2/pokemon?offset=1&limit=150'

// Tried using forEach() to loop through pokemon moves array
// let moveList = pokeInfo.moves
// moveList.forEach((n) => {
//    console.log(n) 
// })

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


// function getPokemon(ranNum) {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${ranNum}`)
//     .then(res => res.json())
//     // want data that is pulled to select 6 or 12 random pokemon for players to choose from
//     //.then(data => console.log(data))
//     .then(data => { 
//         pokeInfo = data
//         pokeCard(pokeInfo)
//     })
//     .catch(error => console.log(error))
//}

