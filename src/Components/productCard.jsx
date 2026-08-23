import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({product}) => {
    return (
    <>
        <div className="col-md-3 card-container p-1">
            <div className="card border-0">
                <Link to={`/prod/${product.id}`}>
                    <img src={product.img} alt={product.title} className='card-img-top rounded' />
                </Link>
            </div>
            <div className="card-body">
                <h5 className="card-text text-center">{product.title}</h5>
                <p className="card-text text-center text-danger">$ {product.price} ARS</p>
                <Link to={`/prod/${product.id}`} className='d-flex justify-content-center text-decoration-none'>
                    <p className="btn btn-dark rounded-pill">Más Info. <i class="bi bi-plus-circle"></i></p>
                </Link>
            </div>
        </div>
    </>
    )
}
