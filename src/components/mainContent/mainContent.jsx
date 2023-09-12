import React, { useState, useEffect, useRef } from 'react';
import './mainContent.css'; // Import your CSS file for the main content styles
import { Form, Button, Table } from "react-bootstrap";
import axios from "axios";

export default function AddProduct() {
  const apiKey = process.env.REACT_APP_APIKEY;
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]); // State to store product categories
  const formData = useRef();

  useEffect(() => {
    const options = {
  method: 'GET',
  url: 'https://apidojo-forever21-v1.p.rapidapi.com/categories/v2/list',
  headers: {
    'X-RapidAPI-Key': '7582768e63msh2e8459b3824b6c8p14e2cajsnfc0c87231b3b',
    'X-RapidAPI-Host': 'apidojo-forever21-v1.p.rapidapi.com'
  }
};

	axios.request(options).then((response) => {
        setCategories(response.data)
    }).catch((error) => {
        console.error(error) 
    })

    // Fetch product categories from the API
    // axios.get("https://apidojo-forever21-v1.p.rapidapi.com/categories/v2/list", {
    //   headers: {
    //     "X-RapidAPI-Host": "apidojo-forever21-v1.p.rapidapi.com",
    //     "X-RapidAPI-Key": apiKey
    //   }
    // })
    // .then((res) => {
    //     console.log(res);
    //   // Check the API response structure and modify this section accordingly
    //   // For example, if categories are nested inside a 'categories' key:
    //   const apiCategories = res.data.categories.map((category) => category.name);
    //   setCategories(apiCategories);
    // })
    // .catch((error) => {
    //   console.error('Error fetching categories:', error);
    // });
  }, []);

  const fetchData = () => {
    axios.get("https://apidojo-forever21-v1.p.rapidapi.com/categories/v2/list", {
      headers: {
        "X-RapidAPI-Host": "apidojo-forever21-v1.p.rapidapi.com",
        "X-RapidAPI-Key": '7582768e63msh2e8459b3824b6c8p14e2cajsnfc0c87231b3b'
      }
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  };

  const addProduct = (event) => {
    event.preventDefault();

    const newProduct = {
      product_type: formData.current.product_type.value,
      price: Math.max(0, formData.current.price.value),
      quantity: Math.max(0, Number(formData.current.qty.value))
    };

    setProducts([...products, newProduct]);

    formData.current.product_type.value = '';
    formData.current.price.value = '';
    formData.current.qty.value = '';
  };

  const incrementQuantity = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity += 1;
    updatedProducts[index].quantity = Math.max(0, updatedProducts[index].quantity);
    setProducts(updatedProducts);
  };

  const decrementQuantity = (index) => {
    const updatedProducts = [...products];
    if (updatedProducts[index].quantity > 0) {
      updatedProducts[index].quantity -= 1;
    }
    updatedProducts[index].quantity = Math.max(0, updatedProducts[index].quantity);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <Form onSubmit={addProduct} ref={formData}>
        <Form.Group controlId="formBasicProductType">
          <Form.Label>Product Type:</Form.Label>
          <Form.Control as="select" name="product_type" required>
            <option value="">Select Product Type</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicPrice">
          <Form.Label>Price:</Form.Label>
          <Form.Control type="number" placeholder="Ex. 300..." name="price" required />
        </Form.Group>

        <Form.Group controlId="formBasicQty">
          <Form.Label>Quantity:</Form.Label>
          <Form.Control type="number" placeholder="How many: #" name="qty" required />
        </Form.Group>

        <Button onClick={fetchData} variant="primary" type="submit">
          Add to Inventory
        </Button>
      </Form>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Index</th>
            <th>Product Type</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Add or Subtract</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{item.product_type}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <Button variant="success" onClick={() => incrementQuantity(index)}>+</Button>
                <Button variant="danger" onClick={() => decrementQuantity(index)}>-</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
