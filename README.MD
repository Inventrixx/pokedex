# Pokedex!

Hello There! This little project is about trying to build an app like [pokedex](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex) using node and react!

### Description

I tried to recreate the pokedex in the web. Writing on a search bar will lead to filter the pokemons retrieved form [pokeAPI](https://pokeapi.co/). I didn't want to do 954 requests for each pokemon, so I've added buttons for pagination. Each page retrieves a limit of 3 pokemon on mobile and up to 6 on desktop.
I am not a big fan of css, but I tried to push a little further and make a mobile first design based on the pokedex from kanto (my favorite haha). On the desktop, it is like a card-grid design.

## Instructions

To run the aplication you need to go through this steps:

```
- git clone repo
- npm install
- npm install --save-dev nodemon
- npm run dev on /back foulder to run the server
- npm start on /front foulder to run the app.
```

## Back-end

```
Structure
 /back
    |_/controllers
    |_/services
    |_routes.js
    |_server.js
```

I tried to follow the MVC model, but with only the C part. My controller consume my microservice. I've made this choice for organization purposes and to try to learn it. I've never worked with this kind of model before so I wanted to try it!

## Front-end

```
Structure
 /front
    |_/src
        |_/calls
        |_/components
            |_PaginationButtons.js
            |_Pokedex.js  <- Main logic of the app
            |_PokemonList.js
            |_SearchBar.js
        |_App.js
        |_App.css
```

Since I chose react for the front, I based my app with react boilerplate. Also, I've decided to use `hooks` for the development of this aplications since I want to keep learning from them.

## Finish!

And thats it!
