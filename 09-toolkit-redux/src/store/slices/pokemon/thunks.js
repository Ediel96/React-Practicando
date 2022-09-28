import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemon } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return  async (dispatch, getState) => {
        dispatch( startLoadingPokemon() );

        //TODO: realizar peticion http
        // const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`;
        // const resp = await fetch(url);
        // const data = await resp.json();
         
        const resp = await pokemonApi.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
        console.log(resp);

        dispatch( setPokemons({ pokemons: data.results, page: page + 1 }) );
    }
}