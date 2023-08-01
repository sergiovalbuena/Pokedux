//action creator: function that returns an action

import { SET_POKEMONS } from './types';

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
})