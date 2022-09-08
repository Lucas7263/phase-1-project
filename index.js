//Banner that pops up on page load that has a question Y/N 
//"Do you have what it takes to be a pokemon master?!"
// document.addEventListener('DOMContentLoaded', () => {
//     console.log(document.querySelector('form'))
//     let banner = document.querySelector('banner')
//     form.addEventListener('submit', (e) =>  {
//         e.preventDefault()
//         searchResult(e.target.search.value)
//         form.reset()
//     }) 
// })

function getPokemon(ranNum) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${ranNum}`)
    .then(res => res.json())
    // want data that is pulled to select 6 or 12 random pokemon for players to choose from
    //.then(data => console.log(data))
    .then(data => { 
        pokeInfo = data
        pokeCard(pokeInfo)
    
    })
    .catch(error => console.log(error))
}

    function pokeCard(pokeInfo) {
        //Pokemon's Data from fetch request
        console.log(pokeInfo) 
        
        //pokemon's img first
        let p1 = document.createElement('img');
        p1.src = (pokeInfo.sprites.front_default);
        document.querySelector('#poke-list').appendChild(p1);
        console.log(pokeInfo.sprites.front_default);
       
        //pokemon's name second
        let p2 = document.createElement('p');
        p2.textContent =  pokeInfo.name.toUpperCase();
        document.querySelector('#poke-list').appendChild(p2);
        console.log(pokeInfo.name.toUpperCase())
        
        //pokemon's HP third
        let p3 = document.createElement('p');
        p3.textContent = `HP: ${pokeInfo.stats[0].base_stat}`;
        document.querySelector('#poke-list').appendChild(p3);
        
        console.log(pokeInfo.stats[0].stat.name)
        console.log(pokeInfo.stats[0].base_stat)
       
        //pokemon's moves last
        const pokeMoves = pokeInfo.moves
        moveCounter = 0
        for (const moves of pokeMoves) {
            moveCounter++
                
            if (moveCounter <= 4){
                let p4 = document.createElement('p')
                p4.textContent = moves.move.name.toUpperCase();
                document.querySelector('#poke-list').appendChild(p4);
             }
           else {
                break
           }
            
        }
            //pokeCard.forEach(...) possible code syntax for making poke card to grab

        //Move 1
        // let p1 = document.createElement('p')
        // let p1.textContent = pokeInfo.moves[0].move.name.toUpperCase();
        // document.querySelector('#poke-list').appendChild(p5);
        
        //Move 2
        // let p6 = document.createElement('p');
        // p6.textContent = pokeInfo.moves[2].move.name.toUpperCase();
        // document.querySelector('#poke-list').appendChild(p6);
       
        //Move 3
        // let p7 = document.createElement('p');
        // p7.textContent = pokeInfo.moves[3].move.name.toUpperCase();
        // document.querySelector('#poke-list').appendChild(p7);
        
        //Move 4
        // let p8 = document.createElement('p');
        // p8.textContent = pokeInfo.moves[4].move.name.toUpperCase();
        // document.querySelector('#poke-list').appendChild(p8);
        
        console.log(pokeInfo.moves[0].move.name)
        console.log(pokeInfo.moves[2].move.name)
        console.log(pokeInfo.moves[3].move.name)
        console.log(pokeInfo.moves[4].move.name)
    }
       
       
        
       
    

    

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
            ranNum = Math.floor(Math.random() * 151)
            getPokemon(ranNum)})
    }
    pokeButton()
    
    





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

// forEach() functtion attempt for looping through moves array
// let moveCounter = 0
// function listMoves(pokeMoves) {
//     // random = Math.floor(Math.random() * pokeMoves.length)
//     // console.log(random)
//         if (moveCounter < 4) {
//             let p5 = document.createElement('p');
//         p5.textContent = pokeMoves.move.name.toUpperCase();
//         document.querySelector('#poke-list').appendChild(p5);
//         moveCounter++
//         }
        
        
//     }   