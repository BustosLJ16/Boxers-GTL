import React from 'react'
import products from '../Data/data.json'
import { ProductCard } from '../Components/productCard'

export const ProductsView = () => {
    return (
    <>
        <div className="container">
            <h1 className="text-center">Productos</h1>
            <div className="row px-5">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    </>
    )
}
