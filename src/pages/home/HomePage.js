import React from 'react';
import Hero from './Hero.js'
import TopProducts from './TopProducts.js'
import "../../pages/home/homepage.scss";

const HomePage = () => {
  return (
    <>
      <Hero />
      <TopProducts heading="Featured Products" all={false}/>
    </>
  )
}

export default HomePage