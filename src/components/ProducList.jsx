import React from 'react'
import Product from './Product'

export default function ProductList() {
    return (
        <div>
            <Product name="Bread" price="10"></Product>
            <Product name="Milk" price="8"></Product>
            <Product name="Chees" price="15"></Product>
        </div>
    )
}
