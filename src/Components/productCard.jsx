import React from 'react'

export const ProductCard = ({product}) => {
    return (
    <>
        <div className="col-md-3 card-container p-1">
            <div className="card border-0">
                <a href="/">
                    <img src={product.img} alt={product.title} className='card-img-top rounded' />
                </a>
            </div>
            <div className="card-body">
                <h5 className="card-text text-center">{product.title}</h5>
                <p className="card-text text-center text-danger">$ {product.price} ARS</p>
                <p className='d-flex justify-content-center'>
                    <button className="btn btn-dark rounded-pill">Más Info. <i class="bi bi-plus-circle"></i></button>
                </p>
            </div>
        </div>
    </>
    )
}
