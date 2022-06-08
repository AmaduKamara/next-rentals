import React, { useEffect } from "react";
import Head from "next/head";
import axios from "axios";

const Home = ({products}) => {
  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    // const url = "http://localhost:3000/api/products";
    // const response = await axios.get(url);
    // console.log(response.data);
  };

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
  );
};

Home.getInitialProps = async (ctx) => {
  // fetch data on the server
  const url = "http://localhost:3000/api/products";
  // return response data as an object
  const response = await axios.get(url);
  // node, object will be merged with existing props
  console.log(response.data);
  return {products: response.data}
};

export default Home;
