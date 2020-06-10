import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
    loading: true,
    pokemons: null,
    previous: null,
    next: null,
};

export default function pokemons(state = INITIAL_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case types.GET_POKEMON_REQUEST: {
                const { pokemons, previous, next } = action.payload;
                draft.pokemons = pokemons;
                draft.previous = previous;
                draft.next = next;
                draft.loading = false;

                break;
            }

            case types.GET_NEXT_POKEMONS_REQUEST: {
                draft.loading = true;
                break;
            }

            default:
        }
    });
}
