
import {ParallaxProvider} from 'react-scroll-parallax'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return<ParallaxProvider scrollAxis='horizontal'>
    <Component {...pageProps} />
  </ParallaxProvider>
}
