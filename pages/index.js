import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <a href="surveyselector" className={styles.myButton}>Go to Surveys</a>
    </div>
  )
}
