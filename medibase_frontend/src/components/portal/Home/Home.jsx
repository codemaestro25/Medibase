import React from 'react'
import Banner from './components/Banner'
import Logins from './components/Logins'
import './css/Home.css'

const Home = () => {
  return (
    <>
      <div className='section' ><Banner/></div>
      <div style={{ overflow: "hidden"}}><Logins/></div>
    </>
  )
}

export default Home