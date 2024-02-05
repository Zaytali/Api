import React from 'react'
import { API_URL } from '../../components/Products/Products'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './SingleRoute.css'


function SingleRoute() {

  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(API_URL)
      .then(res => setData(res.data.users))
      .catch(err => console.log(err))
  }, [])

  const params = useParams()
  console.log(params);

  const item = data.find(el => el.id == params.id)
  if (!item) {
    return <h1>Not Fount</h1>
  }

  console.log(item);

  return (
    <div className='single'>
      <img className='imk' src={item.image} alt="" />


      <div className='malumot'>
        <h1>Information About Myself</h1>
        <p>Address : {item.address.address}</p>
        <p>LastName : {item.lastName}</p>
        <p>Phone : {item.phone}</p>
        <p>SSN : {item.ssn}</p>
        <p>University : {item.university}</p>
        <h2>Job Information</h2>
        <p>CompanyName : {item.company.name}</p>
        <p>Department : {item.company.department}</p>
        <p>Title : {item.company.title}</p>
        <h2>My Work Address</h2>
        <p>CompanyAddress : {item.company.address.address}</p>
        <p>CompanyCity : {item.company.address.city}</p>
        
        <p></p>
        
      <Link className='btn-link' to={'/'}><button className='btn'>Back</button></Link>
      </div>
    </div>
  )
}

export default SingleRoute