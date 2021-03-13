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

    

       
<div className="flex">
  <div className="box"><img src="/images/don.png"/></div>
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
                <div style={{fontSize: "28px", color: "gray", paddingTop: "0em", marginTop: "0"}}>{ title }</div>
                <p style={{fontSize: "22px", color: "gray", marginTop: "0"}}>${ price }</p>
                  <img id="the" src={image} alt={title} />
                 
                  <p style={{fontSize: "calc(18px + .5vw)"}}>This is our only product. Inspired by the long rolling pins of Italy, it is cut to approximately 3 feet in length and sanded to just under 2 inches in diameter. Please do not hesitate to contact us with questions.</p>
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
                    }}>Buy</button>  
                    
                 
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
