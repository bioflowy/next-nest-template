import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {MantineProvider} from '@mantine/core'
import {Provider} from 'urql'
import { client } from '../lib/urql';

function MyApp({ Component, pageProps }: AppProps) {
  return  <Provider value={client}>
        <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      ><Component {...pageProps} />
      </MantineProvider>
    </Provider>
}

export default MyApp
