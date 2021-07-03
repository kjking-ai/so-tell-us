
import Layout from '../components/Layout'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
// own css files here
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp
