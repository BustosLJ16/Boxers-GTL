import React from 'react'

export const ProductDetail = ({product}) => {
    return (
    <>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.img} alt={product.title} className='img-fluid rounded' />
                </div>
                <div className="col-md-6">
                    <h3 className="text-center">{product.title}</h3>
                    <p>Descripción: {product.desc}</p>
                    <p>Precio: 
                        <span className='text-danger'> ${product.price} ARS</span>
                    </p>
                    <p>Categoría/s: {product.category.join(", ")} </p>
                    <p>Tipo: {product.type.join(',')}</p>
                    <p>Marca: {product.marca}</p>
                    <p>
                        <button className="btn btn-dark rounded">
                            <i class="bi bi-whatsapp"> Consultar Disponibilidad.</i>
                        </button>
                    </p>
                </div>
            </div>
        </div>
    </>
    )
}
