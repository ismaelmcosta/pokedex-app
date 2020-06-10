import Head from 'next/head';
import GlobalStyle from '../src/styles/global';

import { Provider } from 'react-redux';

import { Container } from '../src/styles/app';

import { store } from '../src/store';

import 'antd/dist/antd.less';

function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Container>
                <Component {...pageProps} />
                <GlobalStyle />
                <style global jsx>
                    {`
                        body {
                            font-family: 'Source Sans Pro', sans-serif;
                        }
                    `}
                </style>
            </Container>
        </Provider>
    );
}

export default App;
