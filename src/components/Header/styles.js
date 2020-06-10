import styled from 'styled-components';

export const Container = styled.div`
    color: #17171b;
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        @media (max-width: 700px) {
            flex-direction: column-reverse;
        }

        div.brand {
            padding-top: 30px;
            h1 {
                font-style: normal;
                font-weight: bold;
                font-size: 32px;
                line-height: 32px;
                color: #17171b;
                a {
                    color: #17171b;
                }
            }
            span {
                font-style: normal;
                font-weight: normal;
                font-size: 16px;

                color: #747476;
            }
        }
        nav {
            div.buttons {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                button {
                    border: none;
                    background-color: transparent;
                    margin-left: 25px;
                }
            }
        }
    }
`;

export const BoxSearch = styled.div`
    padding: 40px 0;

    .ant-input-affix-wrapper {
        padding: 12px 20px;
        color: rgba(0, 0, 0, 0.65);
        background-color: #f2f2f2;
        border: none;
        border-radius: 10px;
    }

    .ant-input {
        background-color: #f2f2f2;
    }

    input {
        &:focus {
            border: none;
        }
    }
`;
