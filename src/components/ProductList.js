import React, { useEffect, useState } from 'react'
import { url } from '../common/constants';
import { Link } from 'react-router-dom';
import '../App.css'

const ProductList = () => {
    const [product, setProductList] = useState("");

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        let result = await fetch(url + "product/getProduct", {
            headers: {
                'authorization': 'Bearer ' + JSON.parse(localStorage.getItem("auth"))
            },
        })
        const data = await result.json();
        if (data.length > 0) {
            setProductList(data);
        }
    }

    const handleDeleteProduct = async (data) => {
        let result = await fetch(url + "product/deleteProduct/" + data._id, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("auth"))
            },
        });
        const response = await result.json();
        if (response.status) {
            alert(" Product deleted successfully");
            getProduct();
        }
    }

    const handleProductSeach = async (event) => {
        if (event.target.value) {
            let result = await fetch(url + "product/search/" + event.target.value)
            const data = await result.json();
            if (data.length > 0) {
                setProductList(data);
            }
        }
        else {
            getProduct();
        }
    }

    return (
        <div className='product'>
            <h3> ProductList</h3>

            <input className='searchTextBox' type='text' placeholder='search Product' onChange={handleProductSeach} />

            <ul>
                <li>Sr No </li>
                <li>Name </li>
                <li>Price </li>
                <li>Category</li>
                <li>Operation</li>
            </ul>
            {product !== "" &&
                product.map((item, index) =>
                    <ul>
                        <li>{index + 1} </li>
                        <li>{item.ProductName}</li>
                        <li>{item.ProductPrice}</li>
                        <li>{item.ProductCategory}</li>
                        <li>
                            <button onClick={() => handleDeleteProduct(item)}>Delete</button>
                            <Link to={`/update/${item._id}`}>Update</Link>
                        </li>
                    </ul>

                )
            }

        </div>
    )
}

export default ProductList