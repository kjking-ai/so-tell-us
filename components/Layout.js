import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'


const Layout = ({children}) => {
    return (
        <>
        <div className={styles.pageContainer}>
        <Nav />
        <div className={styles.container}>
            <main className={styles.main}>
                <Header />
                {children}
                </main>
        </div>
        <Footer />
        </div>
        </>
    )
}

export default Layout
