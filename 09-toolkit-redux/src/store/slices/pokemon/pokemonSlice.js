import { createSlice } from '@reduxjs/toolkit'
 
const initialState = {
    page: 0,
    pokemons: [],
    isLoading: false
}
 
export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        startLoadingPokemon: (state) => {
            state.isLoading = false;
        },
        setPokemons: (state, action) => {

            state.isLoading = true;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        }
    },
})
export const { startLoadingPokemon,  setPokemons} = pokemonSlice.actions;