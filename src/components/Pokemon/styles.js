import styled, { css } from 'styled-components';

export const TypeBG = {
    bug: '#8BD674',
    dark: '#6F6E78',
    dragon: '#7383B9',
    electric: '#F2CB55',
    fairy: '#EBA8C3',
    fighting: '#EB4971',
    fire: '#FFA756',
    flying: '#83A2E3',
    ghost: '#8571BE',
    grass: '#8BBE8A',
    ground: '#F78551',
    ice: '#91D8DF',
    normal: '#B5B9C4',
    poison: '#9F6E97',
    psychic: '#FF6568',
    rock: '#D4C294',
    steel: '#4C91B2',
    water: '#58ABF6',
    magneton: '#266583',
};

export const TypeColors = {
    bug: '#8CB330',
    dark: '#6F6E78',
    dragon: '#0F6AC0',
    electric: '#EED535',
    fairy: '#ED6EC7',
    fighting: '#D04164',
    flying: '#748FC9',
    fire: '#FD7D24',
    ghost: '#556AAE',
    grass: '#62B957',
    ground: '#DD7748',
    ice: '#61CEC0',
    normal: '#9DA0AA',
    poison: '#A552CC',
    psychic: '#EA5D60',
    rock: '#BAAB82',
    steel: '#417D9A',
    water: '#4A90DA',
    magneton: '#266583',
};

export const Container = styled.div`
    width: 100%;
    height: 115px;
    background-color: ${(props) => TypeBG[`${props.type}`] || '#266583'};
    background-image: url('/static/images/pattern-points.svg');
    background-repeat: no-repeat;
    background-position-x: 80px;
    background-position-y: 5px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;

    div.content {
        width: 60%;
        padding: 15px 20px;
        span.number {
            font-style: normal;
            font-weight: bold;
            font-size: 13px;
            line-height: 14px;
            color: rgba(23, 23, 27, 0.6);
        }
        h2 {
            font-style: normal;
            font-weight: bold;
            font-size: 26px;
            line-height: 20px;
            color: #ffffff;
            text-transform: capitalize;
            a {
                color: #ffffff;
            }
        }
    }
    div.photo {
        width: 40%;
        position: relative;
        background-image: url('/static/images/pokeball-bg-card.svg');
        background-repeat: no-repeat;
        background-position-x: right;
        img {
            position: absolute;
            right: 0;
            top: -25px;
            width: 130px;
            height: 130px;
        }
        @media (max-width: 780px) {
            background-position-x: 50px;
        }
    }
`;

export const Types = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;

    div + div {
        margin-left: 15px;
    }
`;

export const Type = styled.div`
    height: 25px;
    padding: 0 10px;
    background-color: ${(props) => TypeColors[`${props.type}`]};
    border-radius: 3px;
    display: flex;
    flex-direction: row;
    img {
        margin-right: 5px;
    }
    span {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #ffffff;
        text-transform: capitalize;
    }
`;
