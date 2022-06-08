import React from 'react'
import Head from 'next/head'
import axios from 'axios'

const Home = () => {

  useEffect(() => {

  }, [])

  const getProducts = () => {
    const url = 'http://localhost:3000/api/products'
    axios.get(url)
  }

  return (
    <div>
      <Head>
        <title>Next Rentals</title>
        <meta name="description" content="Next rentals for renting homes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Next Rentals</h1>
      </main>
    </div>
  )
}

export default Home