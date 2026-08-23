import React from 'react'

export const ProductDetailView = ({product, id}) => {
    return (
    <>
        <h1 className='text-center'>Producto detallado.</h1>
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={product.img} alt={product.title} width='50'/>
                </div>
                <div className="col">
                    <h3 className="text-center">{product.title}</h3>
                    <p>Descripción: {product.desc}</p>
                    <p>Precio:
                        <p className='text-danger'>$ {product.price} ARS</p>
                    </p>
                    <p>Categoría/s:
                        <p>{product.category},{product.type}</p>
                    </p>
                </div>
            </div>
        </div>
    </>
    )
}
