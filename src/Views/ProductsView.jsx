import React from 'react'
import products from '../Data/data.json'
import { ProductCard } from '../Components/productCard'

export const ProductsView = () => {
    return (
    <>
        <div className="container pt-2">
            <h1 className='text-center'>Productos</h1>
            <div className="row">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    </>
    )
}
