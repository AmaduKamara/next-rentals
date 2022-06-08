import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
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
