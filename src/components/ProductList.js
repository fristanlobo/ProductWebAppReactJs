import React, { useEffect, useState } from 'react'
import { header_data, url } from '../common/constants';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [product, setProductList] = useState("");

    useEffect(() => {
        getProduct();
    }, [product]);

    const getProduct = async () => {
        let result = await fetch(url + "product/getProduct")
        const data = await result.json();
        console.log(data)
        if (data.length > 0) {
            setProductList(data);
        }
    }

    const handleDeleteProduct = async (data) => {
        let result = await fetch(url + "product/deleteProduct/" + data._id, {
            method: 'DELETE',
            headers: header_data,

        });
        const response = await result.json();
        if (response.status) {
            alert(" Product deleted successfully");
        }
    }

    return (
        <div className='product'>
            <h3> ProductList</h3>
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