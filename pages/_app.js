import '../styles/globals.css'
import '../styles/styles.css'
import Layout from '../components/Layout'
import {Provider} from 'react-redux'
import myStore from '../Redux/store'
function MyApp({ Component, pageProps }) {
  return(
  <Provider store={myStore}>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </Provider>
  )
}

export default MyApp
