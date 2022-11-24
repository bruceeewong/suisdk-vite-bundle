import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useSuiProvider} from 'suisdk-vite-bundle'  // once import the vite bundled library, errors show up

export default function App({ Component, pageProps }: AppProps) {
  const provider = useSuiProvider('')
  return <Component {...pageProps} />
}
