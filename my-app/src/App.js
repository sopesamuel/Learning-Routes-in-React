import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import './App.css';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import Product from './components/Product';
import NewFeatures from './components/NewFeatures';
import NewProducts from './components/NewProducts';
import { Users } from './components/Users';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}>  </Route>
      <Route path='about' element={<About/>}>  </Route>
      <Route path='order-summary' element={<OrderSummary/>}></Route>
      <Route path='product' element={<Product/>}>
        <Route index element={<NewProducts />}/> 
        <Route path='featured' element={<NewFeatures />}/>
        <Route path='new' element={<NewProducts />}/>
      </Route>
      <Route path='user/:userId' element={<Users />}></Route>
    </Routes>
    </>
  ); 
}


export default App;
