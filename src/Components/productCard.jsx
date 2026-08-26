import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({ product }) => {
    return (
    <>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-2">
        <div className="card">
            <div className="card-img-top border-0">
                <Link to={`/product/${product.id}`}>
                    <img src={product.img} alt={product.title} className='card-img-top rounded'/>
                </Link>
            </div>
            <div className="card-body p-1">
            <h5 className="card-text text-center">{product.title}</h5>
                <p className="card-text text-center text-danger">
                    ${product.price} ARS.
                </p>
                <p className="d-flex justify-content-center">
                    <Link className="btn btn-dark rounded-pill" to={`/product/${product.id}`}>
                        Más Info <i className="bi bi-info-circle"></i>
                    </Link>
                </p>
            </div>
        </div>
    </div>
    </>
    )
}
