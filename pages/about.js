import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { initiateCheckout } from '../lib/payments.js'

import products from '../shared/products.json';
import Link from "next/link";

const mystyle = {
  marginBottom: "-.1em",
  fontSize: "1.2em"



};



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Italian Mattarello Rolling Pins</title>
        <meta name="description" content="Buy mattarello rolling pins. Cheap price."/>

        <link rel="icon" href="/favicon.ico" />
        <link href="//db.onlinewebfonts.com/c/37b29158c68de167677fa4a3087d7188?family=Tiempos+Text+Regular" rel="stylesheet" type="text/css"/>
      </Head>

      <div className={styles.head}><h1 className={styles.title}>
        <span id="double">Don</span><span id="z">R</span><span id="zero">ossi</span>
        </h1>


        <div style={{fontSize: "calc(10px + .5em);", marginBottom: "-.1em", color: "darkgray", marginLeft: ".1em",  marginTop: "calc(-.4em + 1px)"}}>
     
        </div>

       
        </div>
  
        <div className="flex-container">
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/about">
          <a>ABOUT</a>
        </Link>
        <Link href="/contact">
          <a>CONTACT</a>
        </Link>
        <Link href="/contact">
          <div id="rossi"></div>
        </Link>
      
 
</div>
<main className={styles.main}>
<ul className={styles.grid}>
          {products.map(product => {
            const { id, title, image, price } = product;
            return (
              <li key={id} className={styles.card}>
                <a href="#">


               
                <h3 style={{fontSize: "calc(21px);", marginBottom: "-.1em", paddingTop: "20px", color: "white",  marginTop: "-2px"}}>How we got into rolling pins:</h3>
                  <p style={{fontSize: "calc(18px)"}}>This project arose to meet our own need for a rolling pin. My wife and I simply didn't have the cash to pay an Italian craftsman to make one for us, and with few other options, we decided to manufacture them ourselves in exchange for a modest fee. In choosing raw materials, we opted for pine due to its affordability (and it smells good when you sand it).  Every one of our rolling pins is cut from handpicked wood, patiently sanded, and gently treated with mineral oil. Do not wash your mattarello and always keep it in a dry place.</p>
                  {/**
                    * @lesson-08-solution Exercise 1
                    * We can use the native button HTML element which comes
                    * with some predefined styles and important asibility
                    * properties for clickable elements.
                    *
                    * @lesson-08-solution Exercise 3
                    * The button element, similar to other elements, takes an
                    * onClick prop where we can pass in a custom function
                    
                    * @lesson-08-solution Exercise 6
                    * Inside of the onClick prop, we can dynamically create a new
                    * function that still triggers our initiateCheckout function
                    * but additionally passes in unique lineItems which includes
                    * the specific data for our products.
                    */}
                  <p>
            
                    
                 
                  </p>
                </a>
              </li>
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