import logo from './logo.svg';
import './App.css';
import Card from './card';
import Cart from './cart';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

  const [details,setdetails] = useState([{
    id:'1',
    name:'iphone 14',
    price:140000,
    img:"https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-silver-220907_inline.jpg.large.jpg"
  },{
    id:'2',
    name:'Samsung Galaxy S22 Ultra',
    price:89000,
    img:"https://www.91-img.com/pictures/145160-v6-samsung-galaxy-s22-ultra-mobile-phone-medium-1.jpg?tr=q-80"
  },{
    id:'3',
    name:'Samsung Galaxy Z Fold 4 5G',
    price:137000,
    img:"https://www.91-img.com/pictures/148006-v6-samsung-galaxy-z-fold-4-5g-mobile-phone-medium-1.jpg?tr=q-80"
  },{
    id:'4',
    name:'Samsung Galaxy Z Flip 4 5G',
    price:75000,
    img:"https://www.91-img.com/pictures/148003-v6-samsung-galaxy-z-flip-4-5g-mobile-phone-medium-1.jpg?tr=q-80"
  },{
    id:'5',
    name:'vivo X80 Pro Plus 5G',
    price:83000,
    img:"https://www.91-img.com/pictures/147557-v1-vivo-x80-pro-plus-5g-mobile-phone-medium-1.jpg?tr=q-80"
  },{
    id:'6',
    name:'Xiaomi 12 Pro 5G',
    price:55000,
    img:"https://www.91-img.com/pictures/145393-v6-xiaomi-mi-12-pro-mobile-phone-medium-1.jpg?tr=q-80"
  },{
    id:'7',
    name:'OnePlus 10 Pro',
    price:57000,
    img:"https://www.91-img.com/pictures/144234-v7-oneplus-10-pro-mobile-phone-medium-1.jpg?tr=q-80"
  },{
    id:'8',
    name:'iQOO 9 Pro 5G',
    price:58000,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw0KpTFSNF7eBiblZy0FbhedCvvPI2C_jPtg&usqp=CAU"
  },{
    id:'9',
    name:'vivo X70 Pro Plus',
    price:80000,
    img:"https://www.91-img.com/pictures/143837-v4-vivo-x70-pro-plus-mobile-phone-medium-1.jpg?tr=q-80"
  }])

  const [cartitems,setcartitems]=useState([])

  let addToCart = (detail)=>{
    setcartitems([...cartitems,detail])
  }

  let removeCartItems = ((detail)=>{
    var IndexVal = cartitems.findIndex(obj=>obj.price==detail.price);
    cartitems.splice(IndexVal,1);
    setcartitems([...cartitems])
  })
  return <>
    <div className='container'>
      <div className='row' style={{marginTop:"40px"}}>
        <div className='col-md-8'>
          <div className='row'>
            {
              details.map((detail)=>{
                return <Card detail={detail} addToCart={addToCart} cartitems={cartitems}/>
              })
            }
          </div>
        </div>
        <div className='col-md-4'>
          <div className='row'>
            <Cart cartitems={cartitems} removeCartItems={removeCartItems}></Cart>
          </div>
        </div>
      </div>
    </div>
    
  </>
}

export default App;
