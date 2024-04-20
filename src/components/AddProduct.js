import React, { useState } from 'react';
import '../App.css';
import { header_data, url } from '../common/constants';

const AddProduct = () => {
    const [prodName, setProdName] = useState("");
    const [prodPrice, setProdPrice] = useState(0);
    const [prodCategory, setProdCategory] = useState("");
    const [prodComp, setProdComp] = useState("");
    const [error, setError] = useState(false);

    const handleAddProduct = async () => {
        if (!prodName || !prodPrice || !prodCategory || !prodComp) {
            setError(true);
            return false;
        }
        const getUserId = JSON.parse(localStorage.getItem('user'));

        const body = {
            ProductName: prodName,
            ProductPrice: prodPrice,
            ProductCategory: prodCategory,
            ProductCompany: prodComp,
            userId: getUserId,
        }
        let result = await fetch(url + "product/addProduct", {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("auth"))
            },
        })
        const data = await result.json();
        alert("Product added", data)
    }

    return (
        <div className='containerRegister'>
            <h1>
                Add Product
            </h1>

            <input
                className='inputTxt'
                type='text'
                placeholder='Product name'
                onChange={(e) => setProdName(e.target.value)}
            />
            {error && !prodName && <span className='invalid'>Enter valid name</span>}
            <input
                className='inputTxt'
                type='number'
                placeholder='Product price'
                onChange={(e) => setProdPrice(e.target.value)}
            />
            {error && !prodPrice && <span className='invalid'>Enter valid price</span>}
            <input
                className='inputTxt'
                type='text'
                placeholder='Product category'
                onChange={(e) => setProdCategory(e.target.value)}
            />
            {error && !prodCategory && <span className='invalid'>Enter valid category</span>}
            <input
                className='inputTxt'
                type='text'
                placeholder='Product company'
                onChange={(e) => setProdComp(e.target.value)}
            />
            {error && !prodComp && <span className='invalid'>Enter valid company</span>}

            <button
                className='button'
                onClick={handleAddProduct}
            >
                Add Product
            </button>
        </div>
    )
}

export default AddProduct;