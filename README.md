# phase-1-project: ### Pokémon Card Battle simiulator

![Pokemon battle gif](https://user-images.githubusercontent.com/107516857/193417375-51b2ffa3-62ef-4d67-94c6-63beced06364.gif)

## UI

Create an app that simulates a pokémon card style battle.

Create a page that has seven items.
   
	• Create a h2 tag with "Pokémon Card Battle" inside.
	• Below that create a button that displays the text "Get Pokémon" inside of it.
        When the user clicks the button it triggers the pokeButton function which then calls the getPokemon function.
	• Create an empty div with an id and class of "poke-trainer 1". 
        Create a second div with an id and class of "poke-trainer 2". 
        These will contain the pokémon that are generated from the Get Pokémon button above.
	• Create a third div with an id of "battle-container" and a  class of "container". 
        This will serve as the "battleground" for the users chosen pokémon to fight in. 
	• Create a h3 tag inside the container that displays the text "Place pokémon here!" 
        This tells user what to do with the generated pokémon.
	• Below that create a second button that displays the text "Fight!". 
        When the user clicks this button the pokeFight function is called and a winner of the pokémon battle is chosen. 
      
The Get Pokémon button should only be clickable once. When the user clicks the button the following should occur.
  
  	• The pokeButton function is invoked which calls the PokéAPI api/v2/pokemon/${ranNum} endpoint 
        with two randomly generated numbers that you pass through the getPokemon function. 
        This is looped through six times for each fetch and will display a total of twelve random pokémon cards.
	• Each pokémon card needs the following information displayed.
	• The Pokémon's sprite.
	• The Pokémon's name.
	• The Pokémon's HP stat.
	• The names of four randomly generated moves from the Pokémon's move list.
	
After the pokémon cards have been displayed the user should be able to mouse over each card 
and have the selected card lift from the page slightly. 

The user should also be able to click on a card and be able to drag it into the container in the middle of the page. 

After the user chooses two cards and drags them into the container they should be able to click the fight button 
and have a winner of the battle randomly chosen. This process should be repeatable until one side has no pokémon 
cards left.

## Endpoint

The API of this application is located at https://pokeapi.co
The endpoint that will be most useful for this app is api/v2/pokemon 
endpoint documented at https://pokeapi.co/api/v2/pokemon

### Endpoint notes

As of 10/01/2022 there are a total of 1154 pokémon. This application was limited to using only the first 150 pokémon 
but you are able to change this property.

The HP base stat can be found within the 'stats' json field.

## Styling
The styling for this application can be found here https://codepen.io/FlorinPop17/pen/gOYZxyE








  
