import { createSlice } from '@reduxjs/toolkit'
 
const initialState = {
    pages: 0,
    pokemons: [],
    isLoading: false
}
 
export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        startLoadingPokemon: (state) => {
            state.isloading = false;
        },
        setPokemons: (state, action) => {
            console.log(action)
            state.isLoading = true;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        }
    },
})
export const { startLoadingPokemon,  setPokemons} = pokemonSlice.actions;