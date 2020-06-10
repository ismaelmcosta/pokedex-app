import React from 'react';

import Link from 'next/link';

import { Row, Col } from 'antd';

import { Input } from 'antd';

import { SearchOutlined } from '@ant-design/icons';

import { Container, BoxSearch } from './styles';

function Header() {
    return (
        <Container>
            <header>
                <div className="brand">
                    <h1>
                        <Link href={{ pathname: '/' }}>
                            <a>Pokédex</a>
                        </Link>
                    </h1>
                    <span>
                        Search for Pokémon by name or using the National Pokédex
                        number.
                    </span>
                </div>

                <nav>
                    <div className="buttons">
                        <button>
                            <img src="/static/images/Apps-Icon.svg" alt="" />
                        </button>
                        <button>
                            <img src="/static/images/Short-Icon.svg" alt="" />
                        </button>
                        <button>
                            <img src="/static/images/Sliders-Icon.svg" alt="" />
                        </button>
                    </div>
                </nav>
            </header>
            <Row>
                <Col span={24}>
                    <BoxSearch>
                        <Input
                            size="large"
                            placeholder="What Pokémon are you looking for?"
                            prefix={<SearchOutlined />}
                        />
                    </BoxSearch>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;
