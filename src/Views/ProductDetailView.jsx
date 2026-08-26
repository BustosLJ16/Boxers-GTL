import React from 'react'
import { useParams } from "react-router-dom";
import products from '../Data/data.json'
import { ProductDetail } from '../Components/productDetail';


export const ProductDetailView = () => {

    const { id } = useParams();

    const product = products.find(
        (product) => product.id === Number(id)
    );

    if (!product) {
        return (
            <div className="container py-5">
                <h2>Producto no encontrado</h2>
            </div>
        );
    }

    return (
        <>
            <ProductDetail product={product} />
        </>
    )
}
