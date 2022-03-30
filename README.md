# My Pokemon

## Description

My Pokemon is a web application to collect pokemon from the list of available pokemon. Users can catch pokemon in the pokemon list and give the pokemon a nickname. Pokemon that have been caught will be saved and can be viewed on the "My Pokemon" page.

This project can be accessed online at [https://bhaktibuana-mypokemon.netlify.app](https://bhaktibuana-mypokemon.netlify.app) or you can follow this documentation to use locally on your computer.

## What's in this app?

### Pokemon List Page

A page that displays a list of available Pokemon along with their names, images and total of Pokemon owned by the user.
### Pokemon Detail Page

A page that displays the details of a Pokemon with its name, image, types, abilities and moves. There is a button that the user can use to catch Pokemon (success probability is 50%), if success then the user can give the Pokemon a nickname and add that Pokemon to `My Pokemon List’. User can catch the same pokemon multiple times but need to give a different nickname for each pokemon.

### My Pokemon List Page

A page that display a list of Pokemon that user have caught. User also can remove/release a Pokemon from the list of this page.

### Data source

This app uses [GraphQL](https://graphql.org) ([graphql-pokeapi](https://graphql-pokeapi.vercel.app)) as data source.

## Technology used in this app

- [React](https://reactjs.org) with React Hooks and React Context
- [GraphQL](https://graphql.org) using [Apollo Client](https://www.apollographql.com)
- CSS-in-JS using [Emotion](https://emotion.sh/docs/introduction)
- Unit test using [Jest](https://jestjs.io)

## Installation

- In the root project directory run `npm install` on your terminal.

## Run the app

- In the root project directory you can run `npm start` on your terminal.
- The app will be running on [http://localhost:3000](http://localhost:3000). Enjoy :grin: