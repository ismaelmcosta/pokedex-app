import { takeLatest, call, put, all } from 'redux-saga/effects';

import types from './types';

import { getAllPokemons } from '../../../services/getPokemons';

export function* getPokemons() {
    try {
        const payload = yield call(getAllPokemons);

        yield put({ type: types.GET_POKEMON_REQUEST, payload });
    } catch (e) {
        yield put({ type: types.GET_POKEMON_FAILURE });
    }
}

export function* getPokemonsPagination({ url }) {
    try {
        const payload = yield call(getAllPokemons, url);

        yield put({ type: types.GET_POKEMON_REQUEST, payload });
    } catch (e) {
        yield put({ type: types.GET_POKEMON_FAILURE });
    }
}

export default all([
    takeLatest(types.GET_POKEMONS_REQUEST, getPokemons),
    takeLatest(types.GET_POKEMONS_PAGINATION, getPokemonsPagination),
]);
