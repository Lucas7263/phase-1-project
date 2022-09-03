function getPokemon(pokemon) {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=1&limit=150')
    .then(res => res.json())
    .then(data => data.pokeCard())
    }


    function pokeCard() {
        let list =  document.getElementById('btn')
        list.addEventListener('click', pokeCard())
     }
     console.log(pokeCard())






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
        

    // })

    
// }