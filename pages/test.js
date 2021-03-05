import Head from 'next/head';

export default function Test() {
    return (
        <><Head><title>this is the title</title></Head>

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
<style jsx>{`

.flex-container {
    display: flex;
    background-color: DodgerBlue;
  }
  
  .flex-container > div {
    background-color: #f1f1f1;
    margin: 10px;
    padding: 20px;
    font-size: 30px;
  }

`}</style>
        </>
    )
}