import React from 'react'
import { ProductCard } from '../Components/productCard.jsx'
import products from '../Data/data.json'

export const ProductsView = () => {
    return (
    <>
        <div className="container">
            <h1 className="text-center">Catálogo</h1>
            <div className="row">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    </>
    )
}
