import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export const API_URL = 'https://dummyjson.com/users'


function Products() {


  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setData(res.data.users))
  }, [])


  console.log(data);



  return (
    <div className='card__wrapper'>
      {
        data.map((value, index) => {
          return (
            <div key={value.id} className='card'>
                <img className='imn' src={value.image} alt="" />
              
              {/* <h2>{`Name: ${value.firstName}`}</h2> */}
              <h2>{`Name: ${value.firstName} ${value.lastName}`}</h2>
              <h3>{`City: ${value.address.city}`}</h3>
              <h3>{`Age: ${value.age}`}</h3>
              <Link to={`/product/${value.id}`}>
                <button className='btn1'>Complete Information</button>
              </Link>
              
            </div>
          )
        })
      }
    </div>
  )
}

export default Products