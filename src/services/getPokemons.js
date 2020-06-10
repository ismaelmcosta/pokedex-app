import api from './api';

async function getAllPokemons(url) {
    let pokemons = [];

    const limit_offset = url && `/?${url.split('?')[1]}`;

    try {
        const response = await api.get(limit_offset || '/?limit=21');

        const { results, previous, next } = response.data;

        return Promise.all(
            results.map(async (pokemon) => {
                const result = await getPokemon(pokemon);
                pokemons.push(result);
            })
        ).then(() => {
            return { pokemons, previous, next };
        });
    } catch (e) {
        throw new Error(`Erro ao obter pokemons: ${e.response}`);
    }
}

async function getPokemon(pokemon) {
    try {
        const response = await api.get(`${pokemon.name}`);

        return response.data;
    } catch (e) {
        throw new Error(`Erro em ${pokemon.name}`);
    }
}

export { getAllPokemons };
