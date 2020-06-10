import styled from 'styled-components';

import { TypeColors } from '../components/Pokemon/styles';

export const Container = styled.div`
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 18px 24px;
`;

export const LoadingContainer = styled.div`
    width: 100%;
    max-width: 1024px;
    padding: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const BackButton = styled.button`
    background-color: transparent;
    padding: 20px;
    margin-top: -50px;
    margin-left: -20px;
    border: none;
    font-size: 20px;
`;

export const Subtitle = styled.h4`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    margin-top: 30px;
    color: ${(props) => TypeColors[`${props.type}`]};
`;

export const PokemonStats = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    @media (max-width: 780px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        text-align: center;
    }
    span {
        font-weight: 500;
        font-size: 13px;
        color: #17171b;
        display: block;
        margin-bottom: 10px;
        text-transform: capitalize;
    }
    > div {
        margin-bottom: 30px;
    }
`;

export const PokemonAbilities = styled.div`
    padding-bottom: 30px;
    padding-left: 10px;
    span {
        text-transform: capitalize;
        display: block;
    }

    span + span {
        margin-right: 20px;
    }
`;

export const Pagination = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: #ea5d60;
        color: #fff;
        border-radius: 7px;
        border: none;
        padding: 10px 20px;
        margin: 20px;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 19px;

        color: #ffffff;

        svg {
            margin: 5px;
        }
    }
`;
