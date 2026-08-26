import React, { useEffect, useState } from 'react'
import { ProductCard } from '../Components/productCard.jsx'
import { obtenerProductos } from '../Data/funcionesJson.js'

export const ProductsView = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        obtenerProductos().then((data) => setProducts(data));
    }, []);
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
