import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { initiateCheckout } from '../lib/payments.js'

import products from '../shared/products.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="//db.onlinewebfonts.com/c/9018951d09e68064bad94817e0d176d1?family=AkzidenzGrotesk" rel="stylesheet" type="text/css"/>
      </Head>

      <main className={styles.main}>
        <h1 id="express" className={styles.title}>
          Bukhara Express
        </h1>

        <p id="exotic" className={styles.description}>
        Exotic Gifts of the Ancient World
        </p>

        <ul className={styles.grid}>
          {products.map(product => {
            const { id, title, image, description, price } = product;
            return (
              <li key={id} className={styles.card}>
                <a href="#">
                  <img id="the" src={image} alt={title} />
                  <h3>{ title }</h3>
                  <p>${ price }</p>
                  <p>{ description }</p>
                  {/**
                    * @lesson-08-solution Exercise 1
                    * We can use the native button HTML element which comes
                    * with some predefined styles and important accessibility
                    * properties for clickable elements.
                    *
                    * @lesson-08-solution Exercise 3
                    * The button element, similar to other elements, takes an
                    * onClick prop where we can pass in a custom function
                    *
                    * @lesson-08-solution Exercise 6
                    * Inside of the onClick prop, we can dynamically create a new
                    * function that still triggers our initiateCheckout function
                    * but additionally passes in unique lineItems which includes
                    * the specific data for our products.
                    */}
                  <p>
                    <button className={styles.button} onClick={() => {
                      initiateCheckout({
                        lineItems: [
                          {
                            price: id,
                            quantity: 1
                          }
                        ]
                      })
                    }}>Buy</button>
                  </p>
                </a>
              </li>
            )
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
