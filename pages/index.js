import Head from 'next/head'
import HomePage from './component/home/home'


function Home( {data} ) {
    // console.log(data)
    return (
        <div>
            <Head>
                <title>CepyKun - Website created using Next Js</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            
          <HomePage news={data}/>
        </div>
    )
}


  export async function getServerSideProps(context) {
    const res = await fetch(`https://marifatussalaam.org/Rest_api`)
    const data = await res.json()
    return {
      props: {data}, // will be passed to the page component as props
    }
  }

export default Home