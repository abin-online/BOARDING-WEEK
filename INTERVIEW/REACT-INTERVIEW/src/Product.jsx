import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { fetchData } from './api'

const Product = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await axios.get(`https://dummyjson.com/products`);
                console.log(response.data)
                setProducts(response.data.products)
            } catch (error) {

            }
        }

        fetchData()

    }, [])

    return (
        <>
            <h1>PRODUCTS</h1>
            <div className='products-container'>

                {products.map((product, index) => {
                    return (
                        <>

                            <div key={index} className='container'>
                                <div className='images'>

                                    <img style={{ width: '100px', }} src={product.images[0]} />
                                </div>
                                <h5 className='title'>{product.title}</h5>
                                <span className='category'>{product.category}</span>
                                <div className='decription'>
                                    <p >{product.description}</p>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Product
