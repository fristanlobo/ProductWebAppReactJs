import React, { useEffect, useState } from 'react';
import { url } from '../common/constants';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const [prodName, setProdName] = useState("");
    const [prodPrice, setProdPrice] = useState(0);
    const [prodCategory, setProdCategory] = useState("");
    const [prodComp, setProdComp] = useState("");
    const [error, setError] = useState(false);

    const params = useParams();

    useEffect(() => {
        getspecificProduct();
    }, [])

    const getspecificProduct = async () => {
        let result = await fetch(url + "product/getProduct/" + params.id)
        const data = await result.json();
        if (data) {
            setProdName(data.ProductName);
            setProdPrice(data.ProductPrice);
            setProdCategory(data.ProductCategory);
            setProdComp(data.ProductCompany);
        }
    }

    const handleUpdateProduct = () => {


    }
    return (
        <div className='containerRegister'>
            <h1>
                Update Product
            </h1>

            <input
                className='inputTxt'
                type='text'
                placeholder='Product name'
                onChange={(e) => setProdName(e.target.value)}
                value={prodName}
            />
            {error && !prodName && <span className='invalid'>Enter valid name</span>}
            <input
                className='inputTxt'
                type='number'
                placeholder='Product price'
                onChange={(e) => setProdPrice(e.target.value)}
                value={prodPrice}
            />
            {error && !prodPrice && <span className='invalid'>Enter valid price</span>}
            <input
                className='inputTxt'
                type='text'
                placeholder='Product category'
                onChange={(e) => setProdCategory(e.target.value)}
                value={prodCategory}
            />
            {error && !prodCategory && <span className='invalid'>Enter valid category</span>}
            <input
                className='inputTxt'
                type='text'
                placeholder='Product company'
                onChange={(e) => setProdComp(e.target.value)}
                value={prodComp}
            />
            {error && !prodComp && <span className='invalid'>Enter valid company</span>}

            <button
                className='button'
                onClick={handleUpdateProduct}
            >
                update Product
            </button>
        </div>
    )
}

export default UpdateProduct