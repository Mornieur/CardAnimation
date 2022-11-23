import '../global/styles/globals'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '../global/styles/globals'

export default function App({ Component, pageProps }: AppProps) {
   return (
   <>
  <GlobalStyle />
  <Component {...pageProps} />
  </> 
   )
  
 
}
