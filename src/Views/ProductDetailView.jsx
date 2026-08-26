import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { obtenerProductos } from '../Data/funcionesJson.js'
import { ProductDetail } from '../Components/productDetail';


export const ProductDetailView = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        obtenerProductos().then((products) => {
            const found = products.find((product) => product.id === id);
            setProduct(found);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return (
            <div className="container py-5">
                <h2>Cargando...</h2>
            </div>
        );
    }

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
