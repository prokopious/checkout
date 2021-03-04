import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { initiateCheckout } from '../lib/payments.js'

import products from '../shared/products.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Traditional Rolling Pins of Italy</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="//db.onlinewebfonts.com/c/37b29158c68de167677fa4a3087d7188?family=Tiempos+Text+Regular" rel="stylesheet" type="text/css"/>
      </Head>

      <main className={styles.main}>
        <div className={styles.head}><h1 className={styles.title}>
        <span id="double">don</span><span id="z">R</span><span id="zero">ossi</span>
        </h1>

        <p id="exotic" className={styles.description}>
        Traditional rolling pins of Italy
        </p></div>
       
        <ul className={styles.grid}>
     
          {products.map(product => {
            const { id, title, image, description, price } = product;
            return (
              <div id="tain"><li key={id} className={styles.card}>
                <a href="#">
                <h3>{ title }</h3>
                <p>${ price }</p>
                  <img id="the" src={image} alt={title} />
                 
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
              </li></div>
            )
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
     <b>© 2021 Winchester Typography, Inc.</b>
      </footer>
    </div>
  )
}
