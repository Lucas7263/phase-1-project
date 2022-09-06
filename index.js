function getPokemon(ranNum) {
    let pokeData = document.createElement('p')
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${ranNum}`)
    .then(res => res.json())
    // want data that is pulled to select 6 or 12 random pokemon for players to choose from
    //.then(data => console.log(data))
    .then(data => { 
        pokeInfo = data
        pokeCard(pokeInfo)
        // console.log(data) 
        // //pokemon's img first
        // console.log(data.sprites.front_default)
        // //pokemon's name second
        // console.log(data.name.toUpperCase())
        // //pokemon's HP third
        // console.log(data.stats[0].stat.name)
        // console.log(data.stats[0].base_stat)
        // //pokemon's moves last
        // console.log(data.moves[1].move.name)
        // console.log(data.moves[2].move.name)
        // console.log(data.moves[3].move.name)
        // console.log(data.moves[4].move.name)

       
       
       
    })
    
    .catch(error => console.log(error))
    

    }

    function pokeCard(pokeInfo) {
        console.log(pokeInfo) 
        //pokemon's img first
        let p1 = document.createElement('img');
        p1.src = (pokeInfo.sprites.front_default);
        document.querySelector('#poke-list').appendChild(p1);
        console.log(pokeInfo.sprites.front_default);
        //pokemon's name second
        console.log(pokeInfo.name.toUpperCase())
        //pokemon's HP third
        console.log(pokeInfo.stats[0].stat.name)
        console.log(pokeInfo.stats[0].base_stat)
        //pokemon's moves last
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
        ranNum = Math.floor(Math.random() * 151)
        const list =  document.querySelector('#btn')
       
        //need to use arrow function syntax to make it where the function 
        //doesn't run without btn being clicked
        list.addEventListener('click',  () => {
            getPokemon(ranNum)})
    }
    pokeButton()
    
    





// function pokeCard() {
//     let p = document.createElement('p')
//     let btn = document.createElement('button')
//     btn.textContent = ' x'
//     //p.textContent = `${searchUser} `
//     p.appendChild(btn).addEventListener('click', deleteSearch)
//     //let p1 = document.createElement('img')    
    
    
//     document.querySelector('#user-list').appendChild(p) 
//     let userInfo = getPokemon(event1)
//     .then(res => res.json())
//     .then(data => p1.src = (data.items[0].avatar_url))
//     .catch(err => console.log(err))
    // document.querySelector('#user-list').appendChild(p1) 
    // p.addEventListener('click', (e) => {
    //     fetchRepo(searchUser)
    
   // } 


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