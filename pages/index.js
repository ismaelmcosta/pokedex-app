import { useEffect } from 'react';

import { Row, Col } from 'antd';

import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux';

import {
    getPokemonsRequest,
    getPokemonsPagination,
} from '../src/store/modules/pokemons/actions';

import Meta from '../src/components/Meta';
import Header from '../src/components/Header';
import Pokemon from '../src/components/Pokemon';

import { LoadingContainer, Pagination } from '../src/styles/app';

const Index = () => {
    const dispatch = useDispatch();

    const { pokemons, loading, previous, next } = useSelector(
        (state) => state.pokemonsReducer
    );

    useEffect(() => {
        dispatch(getPokemonsRequest());
    }, []);

    return (
        <>
            <Meta />
            <Header />
            <Row gutter={[30, 30]}>
                {loading ? (
                    <LoadingContainer>
                        <img src="/static/images/loading.gif" alt="" />
                        <span>Loading...</span>
                    </LoadingContainer>
                ) : (
                    pokemons.map((pokemon) => {
                        const { id, name, types, sprites } = pokemon;
                        return (
                            <Col key={id} xs={24} sm={24} md={8} lg={8} xl={8}>
                                <Pokemon
                                    number={id}
                                    name={name}
                                    types={types}
                                    sprites={sprites}
                                />
                            </Col>
                        );
                    })
                )}
            </Row>

            <Pagination>
                {previous && (
                    <button
                        onClick={() =>
                            dispatch(getPokemonsPagination(previous))
                        }
                    >
                        <ArrowLeftOutlined />
                        Previous
                    </button>
                )}
                {next && (
                    <button
                        onClick={() => dispatch(getPokemonsPagination(next))}
                    >
                        Next
                        <ArrowRightOutlined />
                    </button>
                )}
            </Pagination>
        </>
    );
};

export default Index;
