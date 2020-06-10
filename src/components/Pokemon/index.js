import React from 'react';

import Link from 'next/link';

import { Container, Types, Type } from './styles';

function Pokemon({ number, name, types, sprites }) {
    return (
        <Container type={types[0]?.type?.name}>
            <div className="content">
                <span className="number">
                    #{String(number).padStart(3, '0')}
                </span>
                <h2>
                    <Link
                        href={{ pathname: '/pokemon', query: { name: name } }}
                    >
                        <a>{name}</a>
                    </Link>
                </h2>
                <Types>
                    {types.map(({ type }, i) => {
                        return (
                            <Type key={i} type={type.name}>
                                <img
                                    src={
                                        `/static/images/Types/${type.name}.svg` ||
                                        `/static/images/Types/normal.svg`
                                    }
                                    alt={name}
                                />
                                <span>{type.name}</span>
                            </Type>
                        );
                    })}
                </Types>
            </div>

            <div className="photo">
                <Link href={{ pathname: '/pokemon', query: { name: name } }}>
                    <a>
                        <img src={sprites.front_default} alt={name} />
                    </a>
                </Link>
            </div>
        </Container>
    );
}

export default Pokemon;
