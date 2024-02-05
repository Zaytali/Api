import './App.css';
import React from 'react';
import Products from './components/Products/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleRoute from './router/SingleRouter';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/product/:id' element={<SingleRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


// function App() {
//   const [data, setData] = useState([])
//   const [loading, setLoading] = useState([])



//   useEffect(() => {
//     axios
//       .get(API_URL)
//       .then(res => setData(res.data.products))
//       .catch(err => console.log(err))
//       .finally(() => setLoading(false))
//   }, [])


//   let productCard = data.map(el => <div key={el.id}>
//     <img src={el.images[0]} width={100} alt="" />
//     <h3>{el.title}</h3>
//   </div>)


//   return (
//     <div className='App'>
//       <h2>Axios vs fetch</h2>
//       {loading && <h1>Loading..</h1>}
//       <div className='wrapper'>
//         {productCard}
//       </div>
//     </div>
//   );
// }

export default App;
