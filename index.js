function getPokemon(ranNum) {
    let pokeData = document.createElement('p')
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${ranNum}`)
    .then(res => res.json())
    // want data that is pulled to select 6 or 12 random pokemon for players to choose from
    //.then(data => console.log(data))
    .then(data => { 
        
       console.log(data.sprites.front_default)
       
       
    })
    // pokeCard() tried invoking pokeCard function in here...didn't work
    .catch(error => console.log(error))
    

    }


    // function getUniqueNumber() {
    //     ranNum = Math.floor(Math.random() * 151)
    //     return ranNum
    // } 

    

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
    

    function pokeCard() {
        ranNum = Math.floor(Math.random() * 151)
        const list =  document.querySelector('#btn')
       
        
        list.addEventListener('click',  () => {
            getPokemon(ranNum)})
    }
    pokeCard()
    
    





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