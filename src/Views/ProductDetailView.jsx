import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../Data/data.json'



function ProductDetailView() {
    const {id} = useParams();
    
    const product = products.find(
        (product) => product.id === Number(id)
    );

    if (!product) {
        return(
            <h1 className='text-center py-5'>Producto no encontrado.</h1>)
    }

    return (
    <>
        <div className="container">
            <div className="row">
                <div className="col p-1">
                    <img src={product.img} alt={product.title} className='w-75 rounded' />
                </div>
                <div className="col p-1">
                    <h3> {product.title}</h3>
                    <p>- Descripción: {product.desc}</p>
                    <p>- Categoría/s: {product.category}, {product.type}</p>
                    <p>- Precio: 
                        <span className="text-danger"> ${product.price} ARS</span>
                    </p>
                    <button className='btn btn-dark'>Consultar disponibilidad.</button>
                </div>
            </div>
        </div>
    </>
    )
}

export default ProductDetailView