import React, { useEffect } from 'react'
import Head from 'next/head'
import axios from 'axios'

const Home = () => {

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const url = 'http://localhost:3000/api/products'
    const response = await axios.get(url)
    console.log(response.data)
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