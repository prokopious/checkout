import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { initiateCheckout } from '../lib/payments.js'

import products from '../shared/products.json';

const mystyle = {
  marginBottom: "-.1em",
  fontSize: "1.2em"



};



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


        <div style={{fontSize: "20px", marginBottom: "-.1em", color: "darkgray",  marginTop: "-2px"}}>
        Traditional rolling pins
        </div>

       
        </div>
       


        <ul className={styles.grid}>
     
          {products.map(product => {
            const { id, title, image, price } = product;
            return (
              <div id="tain"><li key={id} className={styles.card}>
                <a href="#">
                <div style={{fontSize: "22px"}}>{ title }</div>
                <p style={{fontSize: "22px", color: "black"}}>${ price }</p>
                  <img id="the" src={image} alt={title} />
                 
                  <p style={{fontSize: "20px"}}>This is our only product. Inspired by the long rolling pins of Italy, it is 3 feet in length and approximately 2 inches in diameter.</p>
                  {/**
                    * @lesson-08-solution Exercise 1
                    * We can use the native button HTML element which comes
                    * with some predefined styles and important asibility
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
                    }}>Buy</button>      <a className={styles.contact}>FAQ</a> <a className={styles.contact}>Contact</a>
                  </p>
                </a>
              </li></div>
            )
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
     <b>© 2021 doubleZero, Inc.</b>
      </footer>
    </div>
  )
}
