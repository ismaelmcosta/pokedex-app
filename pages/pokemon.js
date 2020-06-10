import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';

import { Row, Col, Progress } from 'antd';

import { ArrowLeftOutlined } from '@ant-design/icons';

import { useSelector } from 'react-redux';

import {
    BackButton,
    Subtitle,
    PokemonStats,
    PokemonAbilities,
} from '../src/styles/app';

import { TypeColors } from '../src/components/Pokemon/styles';

import Meta from '../src/components/Meta';
import Header from '../src/components/Header';
import Pokemon from '../src/components/Pokemon';

const PokemonPage = () => {
    const router = useRouter();
    const { name } = router.query;
    const { pokemons } = useSelector((state) => state.pokemonsReducer);

    const [pokemonSelected, setPokemonSelected] = useState(null);

    useEffect(() => {
        console.log('pokemonSelected', pokemonSelected);
    }, [pokemonSelected]);

    useEffect(() => {
        if (pokemons) {
            setPokemonSelected(
                pokemons.filter((pokemon) => pokemon.name === name)[0]
            );
        }
    }, []);

    return (
        <>
            <Meta />
            <Header />
            <BackButton onClick={() => router.push('/')}>
                <ArrowLeftOutlined size={30} />
            </BackButton>

            {pokemonSelected && (
                <>
                    <Row gutter={[30, 30]}>
                        {pokemonSelected && (
                            <Col span={24}>
                                <Pokemon
                                    number={pokemonSelected.id}
                                    name={pokemonSelected.name}
                                    types={pokemonSelected.types}
                                    sprites={pokemonSelected.sprites}
                                />
                            </Col>
                        )}
                    </Row>

                    <Row gutter={[30, 30]}>
                        <Col span={24}>
                            <Subtitle
                                type={`${pokemonSelected.types[0]?.type?.name}`}
                            >
                                Pokédex Data
                            </Subtitle>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <p>
                                <b>Abilities</b>
                            </p>
                        </Col>
                    </Row>

                    <PokemonAbilities>
                        {pokemonSelected.abilities.map(({ ability }, i) => {
                            const { name } = ability;
                            return (
                                <span key={i}>
                                    - {String(name).split('-').join(' ')}{' '}
                                </span>
                            );
                        })}
                    </PokemonAbilities>

                    <Row>
                        <Col span={24}>
                            <p>
                                <b>Stats</b>
                            </p>
                        </Col>
                    </Row>
                    <PokemonStats>
                        {pokemonSelected.stats.map((_stat, i) => {
                            const { base_stat, stat } = _stat;

                            return (
                                <div key={i}>
                                    <span>
                                        {String(stat.name).split('-').join(' ')}
                                    </span>
                                    <div>
                                        <Progress
                                            strokeColor={{
                                                '0%': `${
                                                    TypeColors[
                                                        `${pokemonSelected.types[0]?.type?.name}`
                                                    ]
                                                }`,
                                                '100%': `${
                                                    TypeColors[
                                                        `${pokemonSelected.types[0]?.type?.name}`
                                                    ]
                                                }`,
                                            }}
                                            type="circle"
                                            percent={base_stat}
                                            format={(percent) => ` ${percent} `}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </PokemonStats>
                </>
            )}
        </>
    );
};

export default PokemonPage;
