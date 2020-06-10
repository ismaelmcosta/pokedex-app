import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fff;
    background-image: url('/static/images/pokeball-bg.svg');
    background-position-x: center;
    background-repeat: no-repeat;
    color: #FFF;
    -webkit-font-smoothing: antialiased;

  }

  body, input, button {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }
`;
