import React from 'react';
import ItemList from '../itemList/itemList'; // Import your InventoryList component
import ItemForm from '../itemForm/itemForm'; // Import your ItemDetails component
import AddNewItemForm from '../addNewItemForm/addNewItemForm'; // Import your AddNewItemForm component
import './mainContent.css'; // Import your CSS file for the main content styles
import { Form, Button, Table } from "react-bootstrap";
import { useState, createRef } from 'react';
import Axios from "axios";

// const MainContent = () => {
//   return (
//     <div className="main-content">
//       <h1 className="main-heading">Clothing Inventory</h1>

//       <div className="content-container">
//         {/* Inventory List */}
//         <div className="item-list">
//           <ItemList />
//         </div>

//         {/* Item Details */}
//         <div className="item-form">
//           <h2 className="section-heading">Item Details</h2>
//           <ItemForm />
//         </div>

//         {/* Add New Item Form */}
//         <div className="add-item-form">
//           <h2 className="section-heading">Add New Item</h2>
//           <AddNewItemForm />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainContent;

export default function AddProduct() {
    // typeOfData [stateData, stateUpdateFunction] = useState(initialData)
    let initialValue = [];
    const [products, setProduct] = useState(initialValue);
    const formData = createRef();
    // add product handler method
    const add = (event)=>{
        event.preventDefault();
        //console.log(event.target.product_name.value);
        // const formData = event.target;
        // const newProduct = {
        //     product_name: formData.product_name.value,
        //     price: formData.price.value,
        //     qty: formData.qty.value
        // }
        //console.log(formData.current)
        const newProduct = {
            product_name: formData.current.product_name.value,
            price: formData.current.price.value,
            qty: Number(formData.current.qty.value)
        }
        //console.log(newProduct);
        // add a new product inside products array
        setProduct([...products,newProduct]);
        //console.log(products);
    }
    // increment qty value by 1
    const increQty = (event)=>{
        //console.log(event.target.value)
        const indexOfArray = event.target.value;
        products[indexOfArray].qty = products[indexOfArray].qty + 1;
        setProduct([...products])
    }
    // decrement qty value by 1
    const decreQty = (event)=>{
        const indexOfArray = event.target.value;
        products[indexOfArray].qty = products[indexOfArray].qty - 1;
        setProduct([...products])
    }

    function asosAPI() {
        const fetchData =() => {
            Axios.get(`https://asos2.p.rapidapi.com/categories/list ${products}`).then((res) => {
                console.log(res.data);
            });
        };
    }
    return (
        <div>
            <Form onSubmit={add} ref={formData}>
            <Form.Group controlId="formBasicProductName">
                <Form.Label>Product Type:</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Type" onChange={(event) => {setProduct(event.target.value)}} name="product_name"/>
            </Form.Group>

            <Form.Group controlId="formBasicPrice">
                <Form.Label>Price:</Form.Label>
                <Form.Control type="number" placeholder="Price" name="price"/>
            </Form.Group>

            <Form.Group controlId="formBasicQty">
                <Form.Label>Quantity:</Form.Label>
                <Form.Control type="number" placeholder="How many:  #" name="qty"/>
            </Form.Group>

            <Button onClick={fetchData} variant="primary" type="submit">
                Add to Inventory
            </Button>
            </Form>
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Product Type:</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Add or Subtract</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{item.product_type}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <Button variant="success" onClick={event=>increQty(event)} value={index}>+</Button>
                                    <Button variant="danger" onClick={event => decreQty(event)} value={index}>-</Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </Table>
        </div>
    )
}
