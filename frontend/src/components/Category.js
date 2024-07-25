// src/components/Category.js
// import React from 'react';
// import '../assets/css/Category.css';

// const Category = ({ name }) => {
//   return (
//     <div className="category">
//       <h4>{name}</h4>
//     </div>
//   );
// };

// export default Category;
import React from 'react'
import './Category.css'
import img1 from '../../assets/images/pi-1.jpg'
import img2 from '../../assets/images/pi-2.jpg'
import img3 from '../../assets/images/pi-3.jpg'
import img4 from '../../assets/images/pi-4.jpg'

const Category = () => {
  return (
    <div className='Category'>
      <div className='container'>
        <img src={img1} alt='img1' />
        <div className='content'>
          <h1>
            Organic rice and wheat 
          </h1>
          <p>Farm fresh</p>
        </div>
      </div>
      <div className='container'>
        <img src={img2} alt='img2' />
        <div className='content'>
          <h1>
            nourish your skin 
          </h1>
          <p> Shop now</p>
        </div>
      </div>
      <div className='container'>
        <img src={img3} alt='img3' />
        <div className='content'>
          <h1>
          A makeover for your laundry
          </h1>
          <p> Shop now</p>
        </div>
      </div>
      <div className='container'>
        <img src={img4} alt='img4' />
         <div className='content'>
          <h1>
          Open a bag of deliciousness
          </h1>
          <p> Shop now</p>
        </div>
      </div>
    </div>
  )
}

export default Category
