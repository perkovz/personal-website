import Layout from '../comps/Layout'
import '../styles/globals.scss'
import '../styles/grid.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
