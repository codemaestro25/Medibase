import React, {  } from 'react'
import './css/HospitalPage.css'
import { Link } from 'react-router-dom'




const HospitalPage = () => {



  return (
    <div className='pageContainer'>
      <h2>Data</h2>
      <Link to={'/hospitalPage/addData'}> <button className='pageButton'>Add </button></Link>
        <button className='pageButton'>View</button>
    </div>

  )
}

export default HospitalPage