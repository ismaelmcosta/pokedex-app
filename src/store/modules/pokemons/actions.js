import types from './types';

export function getPokemonsRequest() {
    return {
        type: types.GET_POKEMONS_REQUEST,
    };
}

export function getPokemonsPagination(payload) {
    return {
        type: types.GET_POKEMONS_PAGINATION,
        url: payload,
    };
}

export function getPokemonRequest(payload) {
    return {
        type: types.GET_POKEMON_REQUEST,
        payload: payload,
    };
}

export function getPokemonFailure() {
    return {
        type: types.GET_POKEMON_FAILURE,
    };
}
