
import Head from 'next/head'


export default function Tester() {
    return (
        <>
        <Head><link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link></Head>
        <div className="theBox">
        <div className="element">ABOUT</div>
<div className="element">CONTACT</div>
<div className="element">HOME</div>
</div>
               
                <div className="hero-img">

              
            <div className="container">
                <div className="inside-container">
                    <div className="hero-content">
                        <h2>Traditional Italian rolling pins</h2>
                        <p>Built by a working-class couple for decent working-class people!</p>
                        <a href="#">Start rolling pasta now!</a>
                    </div>
               
                    <div class="icons">
                        <li><i className="fab fa-facebook-square"></i></li>
                        <li><i className="fab fa-instagram"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                    </div>
                </div>
            </div>
        </div>

    <style jsx>{`
    
    
    .hero-img{
        background-image: url(https://i.pinimg.com/originals/b0/43/c1/b043c1be7ed0d4f085e356e159250c69.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 100vh;
        width:100%;
        position: relative;
    }
    .inside-container{
        display: flex;
        height: 100vh;
        justify-content:flex-start;
        align-items: center;
    }
    .hero-content{
        color:#fff;
        line-height: 1.5;
        position: relative;
        z-index: 2;
    }
    h2{
        font-weight: 400;
        font-size: 3.25rem;
        letter-spacing: 1px;
    }
    p{
        font-weight: 400;
        font-size: 1.25rem;
        letter-spacing: 1px;
        margin-bottom: 2.25rem;
    }
    .hero-content a{
        text-decoration: none;
        color:#000;
        font-weight: 400;
     
        background-image: linear-gradient(to bottom, white, gray);
        padding:15px 25px;
        font-size: 1rem;
        margin: 0;
        display:inline-block;
        letter-spacing: 1px;
        text-transform: initial;
        border-radius: .5em;
        box-shadow: 5px 5px 5px 0px #00000070;
    }
    .hero-content a:hover{
        background-image: linear-gradient(to bottom, #dddddd, #777777);
        box-shadow: 5px 5px 200px 30px #ffffff10;
        filter: brightness(150%);
    }
    .hero-img::after{
        content: "";
        background-color: rgba(0, 0, 0, 0.342);
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
    }
    li{
        list-style-type:none;
    }
    .icons{
        display: flex;
        color: #fff;
        font-size:25px;
        position: absolute;
        z-index: 2;
        color: #CCCCCC;
        bottom: 0;
        padding:25px 0px;
    }


      .theBox {
        align-items: center;

        display: flex;

  
     
  
    

      }

      .element {
        align-items: center;
        background: linear-gradient(-45deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25));
        box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
         -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
        border-radius: 0px;
        display: flex;
       height: 100px;
        justify-content: center;
        width: 200px;
        padding: 2em;
        margin: 2em;
        background: linear-gradient(-45deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25));
        color: white;
        font-size: 14px;
      
      }

    
    
    `}</style>
        </>
    )
}