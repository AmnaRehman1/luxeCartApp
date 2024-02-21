// import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import axios from 'axios';

// function Cards() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('https://fakestoreapi.com/products');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <>
//       <div className="container mt-4">
//         <h2 className="text-center mb-4">Let's Explore Some Products</h2>
//         <div className="row product-row">
//           {products.slice(0, 4).map((product) => (
//             <div key={product.id} className="col-sm-12 col-lg-3 col-xl-3 col-md-12">
//               <Card className="product-card">
//                 <Card.Img variant="top" src={product.image} alt={product.title} />
//                 <Card.Body>
//                   <Card.Title>{product.title}</Card.Title>
//                   <Card.Text>{product.description}</Card.Text>
//                 </Card.Body>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cards;

import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function Cards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center mb-4">Let's Explore Some Products</h2>
        <div className="row product-row">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="col-sm-12 col-lg-3 col-xl-3 col-md-12">
              <Card className="product-card" style={{ height: '100%' }}>
                <Card.Img variant="top" src={product.image} alt={product.title} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text style={{ maxHeight: '80px', overflow: 'auto' }}>
                    {product.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cards;

